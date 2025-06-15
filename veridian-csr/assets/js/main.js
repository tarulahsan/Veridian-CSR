// --- Global Theme Manager ---
const DEFAULT_THEME_PATH = 'assets/css/themes/theme-corporate-dark.css'; // Default if nothing is set
const PREFERENCES_KEY = 'veridianUserPreferences';

function getSavedThemePath() {
    if (typeof SecureStorage !== 'undefined') {
        const prefs = SecureStorage.loadData(PREFERENCES_KEY);
        if (prefs && prefs.theme) {
            return prefs.theme;
        }
    }
    // console.warn('SecureStorage not available or no theme preference found, using default.');
    return DEFAULT_THEME_PATH;
}

function applyThemeToPage(themePath) {
    const themeStylesheetLink = document.getElementById('themeStylesheet');
    if (themeStylesheetLink) {
        themeStylesheetLink.setAttribute('href', themePath);
        // console.log('Applied theme:', themePath);
    } else {
        // console.error('#themeStylesheet link not found on this page.');
    }
}

function initializePageTheme() {
    const savedTheme = getSavedThemePath();
    applyThemeToPage(savedTheme);
}

// Apply theme as soon as possible once the DOM is being parsed
// For pages other than panel-configuration.html, which has its own Alpine-based theme loading.
// Also ensure not to run on index.html if it doesn't have #themeStylesheet
if (document.getElementById('themeStylesheet') && (!document.body.hasAttribute('x-data') || !document.body.getAttribute('x-data').includes('configurationPanel'))) {
    // Check if DOMContentLoaded already fired, otherwise add listener.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePageTheme);
    } else {
        initializePageTheme(); // DOM already loaded
    }
}

// Other global JavaScript functions can go here.
// For example, if there was a global function to handle mobile menu toggling
// that wasn't part of an Alpine component, it could reside here.
// However, current navigation JS is embedded in each page or handled by Alpine.

// Example: Placeholder for future global utility
function logGlobalMessage(message) {
    console.log("Global Log:", message);
}
