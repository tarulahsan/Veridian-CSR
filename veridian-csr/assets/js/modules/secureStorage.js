// Veridian CSR - Secure Storage Module (AES Encryption for localStorage)

// Assumes CryptoJS is loaded globally via CDN.
// CDN: https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js

const SecureStorage = {
    // IMPORTANT: This is a fixed key for simplicity as per initial plan.
    // For a production system, especially one handling sensitive data,
    // this key should be managed more securely (e.g., derived from user input,
    // or not stored directly in client-side code if possible, though that's
    // challenging for pure client-side apps without a server).
    // For the purpose of this Envato theme, a fixed key might be an acceptable
    // trade-off for "simple AES implementation" if clearly documented.
    _encryptionKey: "VeridianCSRDefaultKey_MustBeStrongAndSecret", // Replace with a strong, unique key

    /**
     * Encrypts and saves data to localStorage.
     * @param {string} key - The localStorage key.
     * @param {object} dataObject - The JavaScript object to save.
     * @returns {boolean} True if successful, false otherwise.
     */
    saveData: function(key, dataObject) {
        if (typeof CryptoJS === 'undefined') {
            console.error("CryptoJS not loaded. Cannot save secure data.");
            return false;
        }
        if (key === null || key === undefined || dataObject === null || dataObject === undefined) {
            console.error("SecureStorage.saveData: Key or dataObject is null/undefined.");
            return false;
        }

        try {
            const jsonString = JSON.stringify(dataObject);
            const encrypted = CryptoJS.AES.encrypt(jsonString, this._encryptionKey).toString();
            localStorage.setItem(key, encrypted);
            return true;
        } catch (error) {
            console.error("Error saving data to secure storage for key '" + key + "':", error);
            return false;
        }
    },

    /**
     * Loads and decrypts data from localStorage.
     * @param {string} key - The localStorage key.
     * @returns {object|null} The decrypted JavaScript object, or null if not found or error.
     */
    loadData: function(key) {
        if (typeof CryptoJS === 'undefined') {
            console.error("CryptoJS not loaded. Cannot load secure data.");
            return null;
        }
        if (key === null || key === undefined) {
            console.error("SecureStorage.loadData: Key is null/undefined.");
            return null;
        }

        try {
            const encryptedString = localStorage.getItem(key);
            if (encryptedString === null) {
                // console.log("No data found in secure storage for key:", key);
                return null;
            }

            const bytes = CryptoJS.AES.decrypt(encryptedString, this._encryptionKey);
            const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

            if (!decryptedString) {
                // This can happen if the key is wrong or data is corrupted
                console.error("Failed to decrypt data for key '" + key + "'. Data might be corrupted or key is incorrect.");
                return null;
            }

            return JSON.parse(decryptedString);
        } catch (error) {
            console.error("Error loading data from secure storage for key '" + key + "':", error);
            // It's possible the data is not valid JSON after decryption attempt or not encrypted at all.
            // To prevent app crash, try to remove the problematic item.
            // localStorage.removeItem(key); // Optional: clear corrupted data
            return null;
        }
    },

    /**
     * Removes an item from localStorage.
     * @param {string} key - The localStorage key.
     */
    removeData: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing data from storage for key '" + key + "':", error);
        }
    }
};

// If using ES6 modules in the future, uncomment:
// export default SecureStorage;
