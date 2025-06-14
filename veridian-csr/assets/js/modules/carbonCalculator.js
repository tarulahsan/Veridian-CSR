// Veridian CSR - Carbon Calculator Module

// Assuming emissionFactors is loaded globally or imported if using modules
// For now, it will be loaded via a separate <script> tag before this one.

const CarbonCalculator = {
    /**
     * Calculates CO2e emissions for a given activity.
     * @param {number} activityValue - The amount of activity (e.g., kWh, km).
     * @param {string} factorCategory - The main category in emissionFactors (e.g., 'electricity', 'transport').
     * @param {string} factorSubcategory - The subcategory/type (e.g., 'us_average', 'passenger_car_gasoline_average').
     * @returns {number|null} Calculated CO2e emissions, or null if factor not found.
     */
    calculateCO2e: function(activityValue, factorCategory, factorSubcategory) {
        if (typeof activityValue !== 'number' || activityValue < 0) {
            console.error("Invalid activity value:", activityValue);
            return null;
        }
        if (!emissionFactors || !emissionFactors[factorCategory] || !emissionFactors[factorCategory][factorSubcategory]) {
            console.error("Emission factor not found for:", factorCategory, factorSubcategory);
            return null;
        }

        const factor = emissionFactors[factorCategory][factorSubcategory].value;
        return activityValue * factor;
    },

    /**
     * Example: Get emissions for electricity usage.
     * @param {number} kWh - Kilowatt-hours of electricity consumed.
     * @param {string} region - e.g., 'us_average', 'uk_average'.
     * @returns {number|null} kg CO2e.
     */
    getElectricityEmissions: function(kWh, region = 'us_average') {
        return this.calculateCO2e(kWh, 'electricity', region);
    },

    /**
     * Example: Get emissions for natural gas usage.
     * @param {number} kWh - Kilowatt-hours of natural gas consumed.
     * @returns {number|null} kg CO2e.
     */
    getNaturalGasEmissions: function(kWh) {
        return this.calculateCO2e(kWh, 'natural_gas', 'standard');
    },

    /**
     * Example: Get emissions for transport.
     * @param {number} distanceKm - Distance traveled in kilometers.
     * @param {string} vehicleType - e.g., 'passenger_car_gasoline_average'.
     * @returns {number|null} kg CO2e.
     */
    getTransportEmissions: function(distanceKm, vehicleType = 'passenger_car_gasoline_average') {
        return this.calculateCO2e(distanceKm, 'transport', vehicleType);
    }

    // Add more specific calculation functions as needed.
};

// If using ES6 modules in the future, uncomment:
// export default CarbonCalculator;
