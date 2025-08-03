/**
 * AppIQ Flutter Workflow - Independent Agent Tracking System
 * Enables individual agents to work autonomously with full tracking and history
 */

const fs = require('fs').promises;
const path = require('path');

class IndependentAgentTracker {
  constructor(basePath = 'docs/independent-sessions') {
    this.basePath = basePath;
    this.sessionsPath = basePath;
    this.activeSessions = new Map();
  }

  /**
   * Initialize independent session for an agent
   */
  async startIndependentSession(agentName, taskDescription, relatedFeature = null) {
    const sessionId = `${agentName}_${Date.now()}`;
    const sessionData = {
      sessionId,
      agentName,
      taskDescription,
      relatedFeature,
      startTime: new Date().toISOString(),
      status: 'active',
      mode: 'independent',
      activities: [],
      tracking: {
        progress: 0,
        currentActivity: 'initializing',
        estimatedDuration: 'unknown',
        actualDuration: null
      },
      quality: {
        checks: [],
        validations: [],
        issues: []
      },
      collaboration: {
        feedbackRequests: [],
        agentCoordination: [],
        escalations: []
      },
      deliverables: [],
      nextSteps: []
    };

    // Ensure directory exists
    await this.ensureDirectoryExists();

    // Save session
    await this.saveSession(sessionId, sessionData);
    this.activeSessions.set(sessionId, sessionData);

    // Log session start
    await this.logActivity(sessionId, 'session_started', {
      description: `Started independent session for ${agentName}`,
      task: taskDescription,
      relatedFeature
    });

    console.log(`🚀 Started independent session: ${sessionId}`);
    return sessionData;
  }

  /**
   * Find related feature for current task
   */
  async findRelatedFeature(taskDescription) {
    try {
      const featuresPath = 'docs/features';
      const files = await fs.readdir(featuresPath);
      const featureFiles = files.filter(file => 
        file.endsWith('.md') && 
        !file.includes('_state') && 
        !file.includes('_history') &&
        file !== 'feature-template.md'  // Ignore template file
      );
      
      const relatedFeatures = [];
      
      for (const file of featureFiles) {
        const featurePath = path.join(featuresPath, file);
        const content = await fs.readFile(featurePath, 'utf8');
        
        // Simple keyword matching - could be enhanced with better NLP
        const keywords = this.extractKeywords(taskDescription.toLowerCase());
        const featureContent = content.toLowerCase();
        
        let relevanceScore = 0;
        for (const keyword of keywords) {
          if (featureContent.includes(keyword)) {
            relevanceScore++;
          }
        }
        
        if (relevanceScore > 0) {
          relatedFeatures.push({
            featureName: file.replace('.md', ''),
            relevanceScore,
            filePath: featurePath
          });
        }
      }
      
      // Sort by relevance
      relatedFeatures.sort((a, b) => b.relevanceScore - a.relevanceScore);
      
      return relatedFeatures.slice(0, 3); // Return top 3 matches
    } catch (error) {
      console.warn('Could not search for related features:', error.message);
      return [];
    }
  }

  /**
   * Update existing feature with independent agent work
   */
  async updateFeatureFromSession(sessionId, featureName) {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }

    // Update feature state if it exists
    try {
      const { FeatureStateManager } = require('./state-manager.js');
      const stateManager = new FeatureStateManager();
      
      await stateManager.updateAgentProgress(featureName, session.agentName, {
        status: 'active',
        progress: session.tracking.progress,
        lastActivity: new Date().toISOString(),
        independentSession: sessionId,
        tasks: session.activities.map(activity => ({
          id: activity.id,
          description: activity.description,
          status: activity.status || 'completed',
          timestamp: activity.timestamp
        }))
      });

      // Log coordination with feature workflow
      await this.logActivity(sessionId, 'feature_coordination', {
        description: `Coordinated with feature workflow: ${featureName}`,
        featureName,
        agentUpdated: session.agentName
      });

      console.log(`🔄 Updated feature ${featureName} with session ${sessionId} progress`);
      return true;
    } catch (error) {
      console.warn(`Could not update feature ${featureName}:`, error.message);
      return false;
    }
  }

  /**
   * Create standalone component outside feature workflow
   */
  async createStandaloneComponent(sessionId, componentName, componentType = 'widget') {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }

    const component = {
      name: componentName,
      type: componentType,
      createdAt: new Date().toISOString(),
      agentCreator: session.agentName,
      sessionId: sessionId,
      filePath: `lib/shared/widgets/${componentName.toLowerCase()}.dart`,
      standalone: true,
      relatedFeatures: [],
      quality: {
        responsive: false,
        accessible: false,
        performant: false,
        tested: false
      }
    };

    // Add to session deliverables
    session.deliverables.push(component);
    await this.saveSession(sessionId, session);

    // Log component creation
    await this.logActivity(sessionId, 'component_created', {
      description: `Created standalone component: ${componentName}`,
      componentName,
      componentType,
      filePath: component.filePath
    });

    console.log(`🎨 Created standalone component: ${componentName}`);
    return component;
  }

  /**
   * Log activity in independent session
   */
  async logActivity(sessionId, activityType, details = {}) {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }

    const activity = {
      id: `activity_${Date.now()}`,
      type: activityType,
      timestamp: new Date().toISOString(),
      agent: session.agentName,
      description: details.description || activityType,
      ...details
    };

    session.activities.push(activity);
    session.tracking.currentActivity = activityType;
    session.tracking.lastUpdate = activity.timestamp;

    await this.saveSession(sessionId, session);
    
    // Also log to central activity log
    await this.logToCentralActivity(activity);

    return activity;
  }

  /**
   * Update session progress and status
   */
  async updateProgress(sessionId, progress, status = null, currentActivity = null) {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }

    session.tracking.progress = Math.max(0, Math.min(100, progress));
    if (status) session.status = status;
    if (currentActivity) session.tracking.currentActivity = currentActivity;

    await this.saveSession(sessionId, session);

    await this.logActivity(sessionId, 'progress_update', {
      description: `Progress updated to ${progress}%`,
      progress,
      status,
      currentActivity
    });

    return session;
  }

  /**
   * Validate quality of independent work
   */
  async validateQuality(sessionId, checks = []) {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }

    const validation = {
      timestamp: new Date().toISOString(),
      checks: checks.length > 0 ? checks : ['responsive', 'accessible', 'performant', 'consistent'],
      results: {},
      overall: 'pending'
    };

    // Perform quality checks (placeholder - would integrate with actual validation)
    for (const check of validation.checks) {
      validation.results[check] = await this.performQualityCheck(check, session);
    }

    // Determine overall result
    const passed = Object.values(validation.results).filter(result => result === true).length;
    const total = validation.checks.length;
    validation.overall = passed === total ? 'passed' : passed >= total * 0.8 ? 'warning' : 'failed';

    session.quality.validations.push(validation);
    await this.saveSession(sessionId, session);

    await this.logActivity(sessionId, 'quality_validation', {
      description: `Quality validation completed: ${validation.overall}`,
      validation
    });

    return validation;
  }

  /**
   * Request feedback from user
   */
  async requestFeedback(sessionId, feedbackType, context = {}) {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }

    const feedbackRequest = {
      id: `feedback_${Date.now()}`,
      type: feedbackType,
      timestamp: new Date().toISOString(),
      context,
      status: 'pending',
      response: null
    };

    session.collaboration.feedbackRequests.push(feedbackRequest);
    await this.saveSession(sessionId, session);

    await this.logActivity(sessionId, 'feedback_requested', {
      description: `Requested ${feedbackType} feedback`,
      feedbackType,
      context
    });

    return feedbackRequest;
  }

  /**
   * Coordinate with other agents
   */
  async coordinateWithAgents(sessionId, agents, purpose, context = {}) {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }

    const coordination = {
      id: `coordination_${Date.now()}`,
      timestamp: new Date().toISOString(),
      initiatingAgent: session.agentName,
      targetAgents: agents,
      purpose,
      context,
      status: 'initiated',
      responses: []
    };

    session.collaboration.agentCoordination.push(coordination);
    await this.saveSession(sessionId, session);

    await this.logActivity(sessionId, 'agent_coordination', {
      description: `Coordinating with agents: ${agents.join(', ')}`,
      purpose,
      targetAgents: agents
    });

    return coordination;
  }

  /**
   * Escalate to full workflow
   */
  async escalateToWorkflow(sessionId, reason, complexity = 'medium') {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }

    const escalation = {
      id: `escalation_${Date.now()}`,
      timestamp: new Date().toISOString(),
      reason,
      complexity,
      sessionId,
      agentName: session.agentName,
      taskDescription: session.taskDescription,
      currentProgress: session.tracking.progress,
      workDone: session.activities,
      status: 'pending'
    };

    session.collaboration.escalations.push(escalation);
    session.status = 'escalated';
    await this.saveSession(sessionId, session);

    await this.logActivity(sessionId, 'workflow_escalation', {
      description: `Escalated to full workflow: ${reason}`,
      reason,
      complexity
    });

    // Notify FeatureMaster about escalation
    await this.notifyFeatureMaster(escalation);

    return escalation;
  }

  /**
   * Complete independent session
   */
  async completeSession(sessionId, summary = '') {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }

    session.status = 'completed';
    session.endTime = new Date().toISOString();
    session.tracking.actualDuration = new Date(session.endTime) - new Date(session.startTime);
    session.tracking.progress = 100;
    session.summary = summary;

    await this.saveSession(sessionId, session);

    await this.logActivity(sessionId, 'session_completed', {
      description: `Session completed successfully`,
      summary,
      duration: session.tracking.actualDuration
    });

    this.activeSessions.delete(sessionId);
    console.log(`✅ Completed independent session: ${sessionId}`);
    return session;
  }

  /**
   * Get session health status
   */
  async getSessionHealth(sessionId = null) {
    if (sessionId) {
      const session = await this.getSession(sessionId);
      return this.analyzeSessionHealth(session);
    }

    // Analyze all active sessions
    const healthReport = {
      timestamp: new Date().toISOString(),
      totalSessions: this.activeSessions.size,
      healthySessions: 0,
      warningSessions: 0,
      criticalSessions: 0,
      sessions: {}
    };

    for (const [id, session] of this.activeSessions) {
      const health = this.analyzeSessionHealth(session);
      healthReport.sessions[id] = health;
      
      if (health.status === 'healthy') healthReport.healthySessions++;
      else if (health.status === 'warning') healthReport.warningSessions++;
      else healthReport.criticalSessions++;
    }

    return healthReport;
  }

  // Helper methods

  async ensureDirectoryExists() {
    try {
      await fs.mkdir(this.basePath, { recursive: true });
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
    }
  }

  async saveSession(sessionId, sessionData) {
    const filePath = path.join(this.basePath, `${sessionId}.json`);
    await fs.writeFile(filePath, JSON.stringify(sessionData, null, 2));
  }

  async getSession(sessionId) {
    try {
      if (this.activeSessions.has(sessionId)) {
        return this.activeSessions.get(sessionId);
      }

      const filePath = path.join(this.basePath, `${sessionId}.json`);
      const data = await fs.readFile(filePath, 'utf8');
      const session = JSON.parse(data);
      
      if (session.status === 'active') {
        this.activeSessions.set(sessionId, session);
      }
      
      return session;
    } catch (error) {
      return null;
    }
  }

  extractKeywords(text) {
    const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'must', 'a', 'an'];
    return text.split(/\s+/)
      .filter(word => word.length > 2 && !commonWords.includes(word))
      .slice(0, 10); // Top 10 keywords
  }

  async performQualityCheck(checkType, session) {
    // Placeholder for actual quality checks
    // In real implementation, this would integrate with testing frameworks
    console.log(`🔍 Performing ${checkType} quality check for session ${session.sessionId}`);
    return Math.random() > 0.2; // 80% pass rate for demo
  }

  async logToCentralActivity(activity) {
    try {
      const centralLogPath = 'docs/independent-sessions/activity-log.json';
      
      let log = { activities: [] };
      try {
        const existingLog = await fs.readFile(centralLogPath, 'utf8');
        log = JSON.parse(existingLog);
      } catch {
        // File doesn't exist, start fresh
      }

      log.activities.push(activity);
      
      // Keep only last 1000 activities
      if (log.activities.length > 1000) {
        log.activities = log.activities.slice(-1000);
      }

      await fs.writeFile(centralLogPath, JSON.stringify(log, null, 2));
    } catch (error) {
      console.warn('Could not log to central activity log:', error.message);
    }
  }

  async notifyFeatureMaster(escalation) {
    // Placeholder for FeatureMaster notification
    console.log(`📢 Notifying FeatureMaster about escalation: ${escalation.id}`);
    // In real implementation, this would trigger FeatureMaster workflow
  }

  analyzeSessionHealth(session) {
    if (!session) return { status: 'error', message: 'Session not found' };

    const issues = [];
    const now = new Date();
    const sessionStart = new Date(session.startTime);
    const hoursActive = (now - sessionStart) / (1000 * 60 * 60);

    // Check session age
    if (hoursActive > 24 && session.status === 'active') {
      issues.push('Session active for over 24 hours');
    }

    // Check progress
    if (session.tracking.progress < 10 && hoursActive > 2) {
      issues.push('Low progress after significant time');
    }

    // Check activity
    const lastActivity = session.activities[session.activities.length - 1];
    if (lastActivity) {
      const hoursSinceActivity = (now - new Date(lastActivity.timestamp)) / (1000 * 60 * 60);
      if (hoursSinceActivity > 4 && session.status === 'active') {
        issues.push('No activity for over 4 hours');
      }
    }

    return {
      status: issues.length === 0 ? 'healthy' : issues.length < 3 ? 'warning' : 'critical',
      issues,
      progress: session.tracking.progress,
      duration: hoursActive,
      lastActivity: lastActivity?.timestamp || session.startTime
    };
  }
}

module.exports = { IndependentAgentTracker };