// Veridian CSR - Emission Factors (Placeholder)
// Data should be sourced from reputable sources like EPA, DEFRA, IEA, GHG Protocol etc.
// Units should be consistent (e.g., kg CO2e per unit of activity).

const emissionFactors = {
    electricity: {
        us_average: { value: 0.401, unit: "kgCO2e/kWh", source: "EPA eGRID (example)" }, // Example value
        uk_average: { value: 0.233, unit: "kgCO2e/kWh", source: "DEFRA (example)" }    // Example value
    },
    natural_gas: {
        standard: { value: 0.185, unit: "kgCO2e/kWh", source: "GHG Protocol (example)" } // Example from kWh, can also be per therm/m3
    },
    transport: {
        passenger_car_gasoline_average: { value: 0.25, unit: "kgCO2e/km", source: "EPA (example)" }, // Example
        light_duty_truck_gasoline_average: { value: 0.35, unit: "kgCO2e/km", source: "EPA (example)" } // Example
    },
    // Add more categories and factors as needed:
    // - Different fuel types (diesel, LPG)
    // - Refrigerants
    // - Waste disposal
    // - Business travel (flights by distance class)
    // - Material usage
};

// If using ES6 modules in the future, uncomment:
// export default emissionFactors;
