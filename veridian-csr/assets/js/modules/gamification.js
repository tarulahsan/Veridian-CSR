// Veridian CSR - Gamification Module

// Depends on: SecureStorage.js, toastNotifications.js
// Assumes these are loaded globally.

const Gamification = {
    ACHIEVEMENT_STORAGE_KEY: 'veridianCSR_earnedAchievements',
    achievements: {
        FIRST_LOGIN: {
            id: 'FIRST_LOGIN',
            name: 'Welcome Aboard!',
            description: 'Successfully logged in for the first time (simulated).',
            icon: 'fas fa-door-open', // Font Awesome icon class
            criteria: function(appData) { /* Placeholder: return appData.user.loginCount === 1; */ return false; }
        },
        CARBON_TRACKER_FIRST_ENTRY: {
            id: 'CARBON_TRACKER_FIRST_ENTRY',
            name: 'First Footprint Entry',
            description: 'Made your first entry in the Carbon Tracker.',
            icon: 'fas fa-shoe-prints',
            criteria: function(appData) { /* Placeholder: return appData.carbonTracker.entries > 0; */ return false; }
        },
        REDUCED_FOOTPRINT_5PC: {
            id: 'REDUCED_FOOTPRINT_5PC',
            name: 'Eco Saver!',
            description: 'Reduced overall carbon footprint by 5% compared to last period.',
            icon: 'fas fa-leaf',
            criteria: function(appData) { /* Placeholder for complex logic */ return false; }
        },
        FIRST_REPORT_GENERATED: {
            id: 'FIRST_REPORT_GENERATED',
            name: 'Reporting Ready',
            description: 'Generated your first CSR report.',
            icon: 'fas fa-file-alt',
            criteria: function(appData) { /* Placeholder */ return false; }
        },
        COMPLETED_CSRD_CHECKLIST: {
            id: 'COMPLETED_CSRD_CHECKLIST',
            name: 'CSRD Compliant',
            description: 'Completed all items in the CSRD compliance checklist.',
            icon: 'fas fa-check-double',
            criteria: function(appData) { /* Placeholder */ return false; }
        }
        // Add more achievements here
    },

    earnedAchievements: [], // Loaded from SecureStorage

    init: function() {
        if (typeof SecureStorage !== 'undefined') {
            const loadedBadges = SecureStorage.loadData(this.ACHIEVEMENT_STORAGE_KEY);
            if (loadedBadges && Array.isArray(loadedBadges)) {
                this.earnedAchievements = loadedBadges;
            }
        } else {
            console.error("SecureStorage not found. Gamification badges cannot be loaded or saved.");
        }
        // console.log("Gamification initialized. Earned achievements:", this.earnedAchievements);
    },

    /**
     * Checks all defined achievements against the current application data.
     * @param {object} appData - A comprehensive object representing the application's current state.
     */
    checkAllAchievements: function(appData = {}) {
        // console.log("Checking all achievements with appData:", appData);
        for (const key in this.achievements) {
            const achievement = this.achievements[key];
            if (!this.isAchieved(achievement.id)) {
                try {
                    if (achievement.criteria(appData)) {
                        this.triggerAchievement(achievement.id);
                    }
                } catch (e) {
                    console.error(`Error evaluating criteria for achievement ${achievement.id}:`, e);
                }
            }
        }
    },

    /**
     * Triggers a specific achievement.
     * @param {string} achievementId - The ID of the achievement to trigger.
     */
    triggerAchievement: function(achievementId) {
        const achievement = this.achievements[achievementId];
        if (!achievement) {
            console.warn("Attempted to trigger unknown achievement:", achievementId);
            return;
        }

        if (this.isAchieved(achievementId)) {
            // console.log("Achievement already earned:", achievementId);
            return; // Already earned
        }

        this.earnedAchievements.push(achievementId);
        if (typeof SecureStorage !== 'undefined') {
            SecureStorage.saveData(this.ACHIEVEMENT_STORAGE_KEY, this.earnedAchievements);
        }

        if (typeof ToastNotifications !== 'undefined' && ToastNotifications.showToast) {
            ToastNotifications.showToast(`Achievement Unlocked: ${achievement.name}! - ${achievement.description}`, 'success');
        } else {
            alert(`Achievement Unlocked: ${achievement.name}! - ${achievement.description}`); // Fallback
        }
        console.log("Achievement triggered:", achievement);

        // Placeholder for updating a "Badges" section on the UI
        this.updateBadgesDisplay(); // Call function to update UI if it exists
    },

    isAchieved: function(achievementId) {
        return this.earnedAchievements.includes(achievementId);
    },

    getEarnedAchievementsDetails: function() {
        return this.earnedAchievements.map(id => this.achievements[id]).filter(ach => ach);
    },

    updateBadgesDisplay: function() {
        // This function would find the #gamification-badges section (e.g., on dashboard-executive.html)
        // and render the earned badges.
        const badgesContainer = document.getElementById('gamification-badges-list'); // Assuming a ul or div with this ID
        if (badgesContainer) {
            badgesContainer.innerHTML = ''; // Clear existing badges
            const earnedDetails = this.getEarnedAchievementsDetails();
            if (earnedDetails.length === 0) {
                badgesContainer.innerHTML = '<p class="text-muted"><em>No achievements unlocked yet. Keep up the great work!</em></p>';
                return;
            }
            const ul = document.createElement('ul');
            ul.className = 'list-inline';
            earnedDetails.forEach(ach => {
                const li = document.createElement('li');
                li.className = 'list-inline-item m-1';
                li.innerHTML = `
                    <span class="badge bg-warning text-dark p-2" title="${ach.description}">
                        <i class="${ach.icon} me-1"></i> ${ach.name}
                    </span>
                `; // Using warning as a placeholder, can be themed
                ul.appendChild(li);
            });
            badgesContainer.appendChild(ul);
        }
    },

    // Example function to be called when relevant app data changes
    // e.g., after saving carbon footprint data
    onDataUpdated: function(appData) {
        // console.log("Gamification: Data updated, checking achievements...");
        this.checkAllAchievements(appData);
    }
};

// Initialize Gamification module when script loads
// Gamification.init(); // Call init, for example, on DOMContentLoaded or when app starts

// If using ES6 modules:
// export default Gamification;
