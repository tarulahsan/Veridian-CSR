// Veridian CSR - Voice Commands Module (Web Speech API)

const VoiceCommands = {
    recognition: null,
    isListening: false,
    statusElement: null, // Optional: An element to display status messages

    init: function(statusElementId = null) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn("Web Speech API (SpeechRecognition) is not supported by this browser.");
            if (this.statusElement) this.statusElement.textContent = "Voice commands not supported by this browser.";
            return false;
        }

        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false; // Process single utterances
        this.recognition.lang = 'en-US';     // Set language
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

        if (statusElementId) {
            this.statusElement = document.getElementById(statusElementId);
        }

        this.recognition.onresult = (event) => {
            const speechResult = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
            if (this.statusElement) this.statusElement.textContent = `Heard: "${speechResult}"`;
            console.log('Voice command heard:', speechResult);
            this.handleCommand(speechResult);
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            if (this.statusElement) this.statusElement.textContent = `Error: ${event.error}`;
            if (event.error === 'no-speech' || event.error === 'audio-capture' || event.error === 'not-allowed') {
                this.stopListening(); // Ensure listening stops on critical errors
            }
        };

        this.recognition.onend = () => {
            // console.log('Speech recognition ended.');
            if (this.isListening) {
                // If still supposed to be listening (e.g. continuous mode, or manual restart needed)
                // For non-continuous, it ends after each utterance. We might restart if needed.
                // For now, simple stop.
                this.isListening = false;
                if (this.statusElement) this.statusElement.textContent = "Voice recognition ended. Click button to start again.";
                 // Update button state if any
                const voiceButton = document.getElementById('activateVoiceButton');
                if(voiceButton) voiceButton.textContent = 'Activate Voice Commands';

            }
        };

        this.recognition.onstart = () => {
            // console.log('Speech recognition started.');
            if (this.statusElement) this.statusElement.textContent = "Listening...";
        };

        console.log("VoiceCommands initialized.");
        if (this.statusElement) this.statusElement.textContent = "Voice commands ready. Click button to activate.";
        return true;
    },

    startListening: function() {
        if (!this.recognition) {
            console.warn("Speech recognition not initialized or not supported.");
            if (this.statusElement) this.statusElement.textContent = "Voice recognition not available.";
            return;
        }
        if (this.isListening) {
            console.log("Already listening.");
            return;
        }
        try {
            this.recognition.start();
            this.isListening = true;
        } catch (e) {
            console.error("Error starting speech recognition:", e);
            if (this.statusElement) this.statusElement.textContent = "Error starting voice recognition.";
        }
    },

    stopListening: function() {
        if (!this.recognition) return;
        if (this.isListening) {
            this.recognition.stop();
            this.isListening = false; // Will also be set by onend
        }
    },

    handleCommand: function(command) {
        // Placeholder command handling
        // In a real app, this would integrate with a navigation/action system.
        if (command.includes("show carbon tracker") || command.includes("open carbon tracker")) {
            console.log("Action: Navigate to tracker-carbon-footprint.html");
            ToastNotifications.showToast("Navigating to Carbon Tracker...", "info");
            // window.location.href = 'tracker-carbon-footprint.html'; // Actual navigation
        } else if (command.includes("open report builder") || command.includes("show report builder")) {
            console.log("Action: Navigate to builder-csr-report.html");
            ToastNotifications.showToast("Navigating to Report Builder...", "info");
            // window.location.href = 'builder-csr-report.html';
        } else if (command.includes("show dashboard") || command.includes("open dashboard")) {
            console.log("Action: Navigate to dashboard-executive.html");
            ToastNotifications.showToast("Navigating to Dashboard...", "info");
            // window.location.href = 'dashboard-executive.html';
        } else if (command.includes("switch to dark mode") || command.includes("enable dark mode")) {
            console.log("Action: Switch to dark mode");
            ToastNotifications.showToast("Switching to dark mode (placeholder)...", "info");
            // Placeholder: This would call a function in panel-configuration.js or similar
            // Example: if (typeof configurationPanel !== 'undefined' && configurationPanel.setTheme) {
            // configurationPanel.setTheme('assets/css/themes/theme-corporate-dark.css'); }
        } else if (command.includes("switch to light mode") || command.includes("enable light mode")) {
            console.log("Action: Switch to light mode");
            ToastNotifications.showToast("Switching to light mode (placeholder)...", "info");
        } else {
            console.log("Command not recognized:", command);
            // ToastNotifications.showToast(`Command not recognized: "${command}"`, "warning");
        }
    }
};

// If using ES6 modules:
// export default VoiceCommands;
