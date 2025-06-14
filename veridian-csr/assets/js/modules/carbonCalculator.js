// Veridian CSR - Carbon Calculator Module

// This module handles custom carbon calculations based on manually defined emission factors
// in emissionFactors.js. It is used for operational emissions like direct fuel use,
// general electricity consumption, travel, etc.

// For digital carbon footprints (e.g., website energy use), the @tgwf/co2 library
// (co2.js) has been included in the project and should be used directly for its specialized models.
// See: https://developers.thegreenwebfoundation.org/co2js/

// Assuming emissionFactors is loaded globally or imported if using modules.
// For now, it will be loaded via a separate <script> tag before this one.

const CarbonCalculator = {
    /**
     * Calculates CO2e emissions for a given activity using custom emission factors.
     * @param {number} activityValue - The amount of activity (e.g., kWh, km).
     * @param {string} factorCategory - The main category in emissionFactors (e.g., 'electricity', 'transport').
     * @param {string} factorSubcategory - The subcategory/type (e.g., 'us_average', 'passenger_car_gasoline_average').
     * @returns {number|null} Calculated CO2e emissions in kg, or null if factor not found.
     */
    calculateCO2eWithCustomFactors: function(activityValue, factorCategory, factorSubcategory) {
        if (typeof activityValue !== 'number' || activityValue < 0) {
            console.error("Invalid activity value:", activityValue);
            return null;
        }
        if (typeof emissionFactors === 'undefined' || !emissionFactors || !emissionFactors[factorCategory] || !emissionFactors[factorCategory][factorSubcategory]) {
            console.error("Custom emission factor not found for:", factorCategory, factorSubcategory);
            return null;
        }

        const factorData = emissionFactors[factorCategory][factorSubcategory];
        const factorValue = factorData.value; // Assuming this is in kgCO2e per unit
        // TODO: Add unit conversion logic if activityValue unit differs from factor unit.
        // For now, assumes units are compatible and result is in kgCO2e.
        return activityValue * factorValue;
    },

    /**
     * Example: Get emissions for electricity usage using custom factors.
     * @param {number} kWh - Kilowatt-hours of electricity consumed.
     * @param {string} region - e.g., 'us_average', 'uk_average'.
     * @returns {number|null} kg CO2e.
     */
    getElectricityEmissions: function(kWh, region = 'us_average') {
        return this.calculateCO2eWithCustomFactors(kWh, 'electricity', region);
    },

    /**
     * Example: Get emissions for natural gas usage using custom factors.
     * @param {number} kWh - Kilowatt-hours of natural gas consumed. (Note: or therms, m3, etc. - ensure factors match)
     * @returns {number|null} kg CO2e.
     */
    getNaturalGasEmissions: function(kWh) {
        // Assuming 'standard' factor is for kWh. If input is therms, convert or use different factor.
        return this.calculateCO2eWithCustomFactors(kWh, 'natural_gas', 'standard');
    },

    /**
     * Example: Get emissions for transport using custom factors.
     * @param {number} distanceKm - Distance traveled in kilometers.
     * @param {string} vehicleType - e.g., 'passenger_car_gasoline_average'.
     * @returns {number|null} kg CO2e.
     */
    getTransportEmissions: function(distanceKm, vehicleType = 'passenger_car_gasoline_average') {
        return this.calculateCO2eWithCustomFactors(distanceKm, 'transport', vehicleType);
    },

    // --- Placeholder for using co2.js from The Green Web Foundation ---
    /**
     * Example placeholder for calculating website hosting emissions using @tgwf/co2.
     * This demonstrates how co2.js *could* be integrated for relevant calculations.
     * @param {number} bytesTransferred - Bytes transferred for a website visit.
     * @param {boolean} isGreenHosting - Whether the hosting is green.
     * @returns {number|null} Estimated CO2e in grams, or null if co2.js is not available.
     */
    getWebsiteHostingEmissionsExample: function(bytesTransferred, isGreenHosting = false) {
        if (typeof co2 === 'undefined') { // co2.js (IIFE) typically exposes a global `co2` class
            console.warn("@tgwf/co2 library (co2.js) not found. Cannot calculate website hosting emissions.");
            return null;
        }
        try {
            // Using the Sustainable Web Design model by default
            const co2Estimator = new co2(); // or new co2({model: "swd"})
            const emissionsGrams = co2Estimator.perByte(bytesTransferred, isGreenHosting);
            return emissionsGrams; // Returns grams of CO2e
        } catch (error) {
            console.error("Error using co2.js for website hosting emissions:", error);
            return null;
        }
    }
    // Add more specific calculation functions as needed.
};

// If using ES6 modules in the future, uncomment:
// export default CarbonCalculator;

// Rename original calculateCO2e to calculateCO2eWithCustomFactors
// to avoid confusion if a generic calculateCO2e is ever added.
CarbonCalculator.calculateCO2e = CarbonCalculator.calculateCO2eWithCustomFactors;
