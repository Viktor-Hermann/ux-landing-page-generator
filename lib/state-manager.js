/**
 * AppIQ Flutter Workflow - State Management System
 * Provides crash recovery, state preservation, and coordination utilities
 */

const fs = require('fs').promises;
const path = require('path');

class FeatureStateManager {
  constructor(basePath = 'docs/features') {
    this.basePath = basePath;
    this.stateCache = new Map();
    this.backupInterval = 300000; // 5 minutes
    this.maxBackups = 10;
  }

  /**
   * Initialize state management for a feature
   */
  async initializeFeatureState(featureName, initialData = {}) {
    const stateData = {
      featureName,
      status: 'initialized',
      currentPhase: 'planning',
      currentAgent: 'feature-manager',
      createdDate: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      version: '1.0.0',
      agents: {
        'po-agent': { status: 'pending', progress: 0, tasks: [], lastActivity: null },
        'ui-agent': { status: 'pending', progress: 0, tasks: [], lastActivity: null },
        'cubit-agent': { status: 'pending', progress: 0, tasks: [], lastActivity: null },
        'domain-agent': { status: 'pending', progress: 0, tasks: [], lastActivity: null },
        'data-agent': { status: 'pending', progress: 0, tasks: [], lastActivity: null },
        'security-agent': { status: 'pending', progress: 0, tasks: [], lastActivity: null },
        'test-agent': { status: 'pending', progress: 0, tasks: [], lastActivity: null },
        'integration-validator': { status: 'pending', progress: 0, tasks: [], lastActivity: null }
      },
      qualityGates: {
        requirements: false,
        ui: false,
        state: false,
        domain: false,
        data: false,
        security: false,
        testing: false,
        integration: false
      },
      parallelExecution: {
        active: false,
        groups: [],
        coordination: {}
      },
      blockers: [],
      deploymentReadiness: false,
      crashRecovery: {
        enabled: true,
        lastBackup: new Date().toISOString(),
        recoveryPoints: []
      },
      performance: {
        startTime: new Date().toISOString(),
        agentDurations: {},
        totalDuration: null,
        efficiency: {}
      },
      ...initialData
    };

    await this.saveFeatureState(featureName, stateData);
    this.stateCache.set(featureName, stateData);
    
    // Start automatic backup
    this.scheduleBackup(featureName);
    
    return stateData;
  }

  /**
   * Load feature state from file
   */
  async loadFeatureState(featureName) {
    try {
      // Check cache first
      if (this.stateCache.has(featureName)) {
        return this.stateCache.get(featureName);
      }

      const stateFile = path.join(this.basePath, `${featureName}_state.json`);
      const stateData = JSON.parse(await fs.readFile(stateFile, 'utf8'));
      
      // Validate state integrity
      this.validateStateIntegrity(stateData);
      
      this.stateCache.set(featureName, stateData);
      return stateData;
    } catch (error) {
      console.warn(`Could not load state for ${featureName}:`, error.message);
      return null;
    }
  }

  /**
   * Save feature state to file with backup
   */
  async saveFeatureState(featureName, stateData) {
    try {
      stateData.lastUpdated = new Date().toISOString();
      stateData.version = this.incrementVersion(stateData.version || '1.0.0');

      const stateFile = path.join(this.basePath, `${featureName}_state.json`);
      
      // Create backup of current state
      await this.createBackup(featureName, stateData);
      
      // Save new state
      await fs.writeFile(stateFile, JSON.stringify(stateData, null, 2));
      
      // Update cache
      this.stateCache.set(featureName, stateData);
      
      console.log(`✅ State saved for ${featureName} - Version ${stateData.version}`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to save state for ${featureName}:`, error.message);
      throw error;
    }
  }

  /**
   * Update agent status and progress
   */
  async updateAgentProgress(featureName, agentName, updates) {
    const state = await this.loadFeatureState(featureName);
    if (!state) {
      throw new Error(`Feature state not found: ${featureName}`);
    }

    if (!state.agents[agentName]) {
      throw new Error(`Agent not found: ${agentName}`);
    }

    // Update agent data
    Object.assign(state.agents[agentName], {
      ...updates,
      lastActivity: new Date().toISOString()
    });

    // Update overall progress
    const totalAgents = Object.keys(state.agents).length;
    const completedAgents = Object.values(state.agents).filter(agent => agent.status === 'completed').length;
    state.overallProgress = Math.round((completedAgents / totalAgents) * 100);

    // Update current agent if status changed
    if (updates.status === 'active') {
      state.currentAgent = agentName;
    } else if (updates.status === 'completed') {
      state.currentAgent = this.getNextAgent(state, agentName);
    }

    await this.saveFeatureState(featureName, state);
    return state;
  }

  /**
   * Create recovery checkpoint
   */
  async createRecoveryCheckpoint(featureName, description = 'Manual checkpoint') {
    const state = await this.loadFeatureState(featureName);
    if (!state) {
      throw new Error(`Feature state not found: ${featureName}`);
    }

    const checkpoint = {
      id: `checkpoint_${Date.now()}`,
      timestamp: new Date().toISOString(),
      description,
      state: JSON.parse(JSON.stringify(state)), // Deep copy
      gitCommit: await this.getCurrentGitCommit(),
      fileSystem: await this.captureFileSystemState(featureName)
    };

    state.crashRecovery.recoveryPoints.push(checkpoint);
    
    // Keep only the latest 10 checkpoints
    if (state.crashRecovery.recoveryPoints.length > this.maxBackups) {
      state.crashRecovery.recoveryPoints = state.crashRecovery.recoveryPoints.slice(-this.maxBackups);
    }

    await this.saveFeatureState(featureName, state);
    console.log(`📋 Recovery checkpoint created: ${checkpoint.id}`);
    return checkpoint;
  }

  /**
   * Restore from recovery checkpoint
   */
  async restoreFromCheckpoint(featureName, checkpointId = null) {
    const state = await this.loadFeatureState(featureName);
    if (!state) {
      throw new Error(`Feature state not found: ${featureName}`);
    }

    const checkpoint = checkpointId 
      ? state.crashRecovery.recoveryPoints.find(cp => cp.id === checkpointId)
      : state.crashRecovery.recoveryPoints[state.crashRecovery.recoveryPoints.length - 1];

    if (!checkpoint) {
      throw new Error(`Recovery checkpoint not found: ${checkpointId || 'latest'}`);
    }

    // Restore state
    const restoredState = checkpoint.state;
    restoredState.lastUpdated = new Date().toISOString();
    restoredState.status = 'recovered';
    
    await this.saveFeatureState(featureName, restoredState);
    
    console.log(`🔄 Restored from checkpoint: ${checkpoint.id} (${checkpoint.description})`);
    return restoredState;
  }

  /**
   * Handle parallel agent coordination
   */
  async startParallelExecution(featureName, groupName, agents) {
    const state = await this.loadFeatureState(featureName);
    if (!state) {
      throw new Error(`Feature state not found: ${featureName}`);
    }

    state.parallelExecution.active = true;
    state.parallelExecution.groups.push({
      name: groupName,
      agents,
      startTime: new Date().toISOString(),
      status: 'active',
      coordination: {
        sharedContext: {},
        conflictResolution: 'priority-based',
        progressTracking: {}
      }
    });

    // Update agent statuses
    agents.forEach(agentName => {
      if (state.agents[agentName]) {
        state.agents[agentName].status = 'active';
        state.agents[agentName].parallelGroup = groupName;
      }
    });

    await this.saveFeatureState(featureName, state);
    console.log(`⚡ Started parallel execution: ${groupName} with agents [${agents.join(', ')}]`);
    return state;
  }

  /**
   * Complete parallel execution group
   */
  async completeParallelExecution(featureName, groupName) {
    const state = await this.loadFeatureState(featureName);
    if (!state) {
      throw new Error(`Feature state not found: ${featureName}`);
    }

    const group = state.parallelExecution.groups.find(g => g.name === groupName);
    if (!group) {
      throw new Error(`Parallel group not found: ${groupName}`);
    }

    group.status = 'completed';
    group.endTime = new Date().toISOString();
    group.duration = new Date(group.endTime) - new Date(group.startTime);

    // Check if all parallel groups are completed
    const activeGroups = state.parallelExecution.groups.filter(g => g.status === 'active');
    if (activeGroups.length === 0) {
      state.parallelExecution.active = false;
    }

    await this.saveFeatureState(featureName, state);
    console.log(`✅ Completed parallel execution: ${groupName}`);
    return state;
  }

  /**
   * Validate quality gate
   */
  async validateQualityGate(featureName, gateName, criteria = {}) {
    const state = await this.loadFeatureState(featureName);
    if (!state) {
      throw new Error(`Feature state not found: ${featureName}`);
    }

    const validation = {
      gate: gateName,
      timestamp: new Date().toISOString(),
      criteria,
      result: 'pending',
      issues: []
    };

    // Perform validation logic here
    // This would typically call external validation systems
    const passed = await this.performQualityValidation(gateName, criteria);
    
    validation.result = passed ? 'passed' : 'failed';
    state.qualityGates[gateName] = passed;

    if (!passed) {
      state.blockers.push({
        type: 'quality-gate-failure',
        gate: gateName,
        timestamp: validation.timestamp,
        description: `Quality gate ${gateName} failed validation`,
        resolution: 'pending'
      });
    }

    await this.saveFeatureState(featureName, state);
    console.log(`🚦 Quality gate ${gateName}: ${validation.result.toUpperCase()}`);
    return validation;
  }

  /**
   * Health check for feature state
   */
  async performHealthCheck(featureName = null) {
    const healthReport = {
      timestamp: new Date().toISOString(),
      overall: 'healthy',
      features: {},
      system: {
        stateManagerVersion: '1.0.0',
        cacheSize: this.stateCache.size,
        backupSystem: 'operational'
      }
    };

    try {
      if (featureName) {
        // Check specific feature
        const state = await this.loadFeatureState(featureName);
        healthReport.features[featureName] = this.analyzeFeatureHealth(state);
      } else {
        // Check all features
        const featureFiles = await fs.readdir(this.basePath);
        const stateFiles = featureFiles.filter(file => file.endsWith('_state.json'));
        
        for (const stateFile of stateFiles) {
          const fName = stateFile.replace('_state.json', '');
          const state = await this.loadFeatureState(fName);
          healthReport.features[fName] = this.analyzeFeatureHealth(state);
        }
      }

      // Determine overall health
      const featureHealths = Object.values(healthReport.features);
      const unhealthyFeatures = featureHealths.filter(health => health.status !== 'healthy');
      
      if (unhealthyFeatures.length > 0) {
        healthReport.overall = unhealthyFeatures.length > featureHealths.length / 2 ? 'critical' : 'warning';
      }

    } catch (error) {
      healthReport.overall = 'error';
      healthReport.error = error.message;
    }

    return healthReport;
  }

  // Helper methods

  validateStateIntegrity(state) {
    const required = ['featureName', 'status', 'agents', 'qualityGates'];
    for (const field of required) {
      if (!state[field]) {
        throw new Error(`Invalid state: missing ${field}`);
      }
    }
  }

  incrementVersion(version) {
    const [major, minor, patch] = version.split('.').map(Number);
    return `${major}.${minor}.${patch + 1}`;
  }

  async createBackup(featureName, stateData) {
    try {
      const backupFile = path.join(this.basePath, `${featureName}_state_backup_${Date.now()}.json`);
      await fs.writeFile(backupFile, JSON.stringify(stateData, null, 2));
      
      // Clean old backups
      await this.cleanOldBackups(featureName);
    } catch (error) {
      console.warn(`Backup creation failed for ${featureName}:`, error.message);
    }
  }

  async cleanOldBackups(featureName) {
    try {
      const files = await fs.readdir(this.basePath);
      const backupFiles = files
        .filter(file => file.startsWith(`${featureName}_state_backup_`))
        .map(file => ({
          name: file,
          path: path.join(this.basePath, file),
          time: parseInt(file.split('_').pop().replace('.json', ''))
        }))
        .sort((a, b) => b.time - a.time);

      // Keep only the latest backups
      const filesToDelete = backupFiles.slice(this.maxBackups);
      for (const file of filesToDelete) {
        await fs.unlink(file.path);
      }
    } catch (error) {
      console.warn(`Backup cleanup failed for ${featureName}:`, error.message);
    }
  }

  getNextAgent(state, currentAgent) {
    const agentOrder = [
      'po-agent', 'ui-agent', 'domain-agent', 'cubit-agent', 
      'data-agent', 'security-agent', 'test-agent', 'integration-validator'
    ];
    
    const currentIndex = agentOrder.indexOf(currentAgent);
    if (currentIndex === -1 || currentIndex === agentOrder.length - 1) {
      return 'feature-manager'; // Last agent or unknown
    }
    
    return agentOrder[currentIndex + 1];
  }

  async getCurrentGitCommit() {
    try {
      const { exec } = require('child_process');
      return new Promise((resolve) => {
        exec('git rev-parse HEAD', (error, stdout) => {
          resolve(error ? 'unknown' : stdout.trim());
        });
      });
    } catch {
      return 'unknown';
    }
  }

  async captureFileSystemState(featureName) {
    try {
      const docsPath = path.join('docs', 'features');
      const tasksPath = path.join('docs', 'tasks');
      
      return {
        featureFile: `${docsPath}/${featureName}.md`,
        stateFile: `${docsPath}/${featureName}_state.json`,
        tasksFile: `${tasksPath}/${featureName}_tasks.md`,
        historyFile: `${tasksPath}/${featureName}_history.md`,
        timestamp: new Date().toISOString()
      };
    } catch {
      return {};
    }
  }

  async performQualityValidation(gateName, criteria) {
    // This would typically integrate with actual validation systems
    // For now, return true as a placeholder
    console.log(`🔍 Validating quality gate: ${gateName}`);
    return true;
  }

  analyzeFeatureHealth(state) {
    if (!state) {
      return { status: 'error', message: 'State not found' };
    }

    const issues = [];
    
    // Check for blockers
    if (state.blockers && state.blockers.length > 0) {
      issues.push(`${state.blockers.length} active blockers`);
    }

    // Check agent progress
    const stuckAgents = Object.entries(state.agents)
      .filter(([name, agent]) => {
        const lastActivity = agent.lastActivity ? new Date(agent.lastActivity) : null;
        const hoursSinceActivity = lastActivity ? (Date.now() - lastActivity.getTime()) / (1000 * 60 * 60) : Infinity;
        return agent.status === 'active' && hoursSinceActivity > 24;
      });

    if (stuckAgents.length > 0) {
      issues.push(`${stuckAgents.length} agents inactive for >24h`);
    }

    // Check quality gates
    const failedGates = Object.entries(state.qualityGates)
      .filter(([gate, passed]) => !passed).length;
    
    if (failedGates > 0) {
      issues.push(`${failedGates} quality gates not passed`);
    }

    return {
      status: issues.length === 0 ? 'healthy' : issues.length < 3 ? 'warning' : 'critical',
      issues,
      lastUpdate: state.lastUpdated,
      progress: state.overallProgress || 0
    };
  }

  scheduleBackup(featureName) {
    setInterval(async () => {
      try {
        await this.createRecoveryCheckpoint(featureName, 'Automatic backup');
      } catch (error) {
        console.warn(`Automatic backup failed for ${featureName}:`, error.message);
      }
    }, this.backupInterval);
  }
}

module.exports = { FeatureStateManager };