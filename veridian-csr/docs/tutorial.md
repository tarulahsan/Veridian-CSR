# Veridian CSR - Theme Documentation

## Table of Contents
*   1. Introduction to Veridian CSR
*   2. Installation Guide
*   3. Overview of Core Page Templates
*   4. Feature Deep Dive
    *   4.1. Executive Dashboard (`dashboard-executive.html`)
    *   4.2. Carbon Footprint Tracker (`tracker-carbon-footprint.html`)
    *   4.3. Environmental Metrics (`metrics-environmental.html`)
    *   4.4. Social Impact Hub (`hub-social-impact.html`)
    *   4.5. Governance Center (`center-governance.html`)
    *   4.6. CSR Report Builder (`builder-csr-report.html`)
    *   4.7. Compliance Checklist (`checklist-compliance.html`)
    *   4.8. Data I/O Hub (`hub-data-io.html`)
    *   4.9. Analytics & Insights (`analytics-insights.html`)
    *   4.10. Configuration Panel (`panel-configuration.html`)
*   5. Standout Features
    *   5.1. Gamification System
    *   5.2. Voice Commands (Experimental)
    *   5.3. Customizable Widgets (Dashboard)
*   6. Customization Guide
    *   6.1. Theme Selection & Switching
    *   6.2. White-Labeling / Rebranding (CSS Custom Properties)
    *   6.3. Advanced CSS Customization
    *   6.4. JavaScript Overview & Customization Hooks (Placeholder)
    *   6.5. Adding New Languages (JSON Files)
*   7. Data Management
    *   7.1. LocalStorage Usage
    *   7.2. Data Encryption (AES)
    *   7.3. Data Import Process (Excel/CSV)
    *   7.4. Data Export Process (Excel/CSV)
    *   7.5. Data Structure Overview (for Import/Export)
*   8. Frequently Asked Questions (FAQ)
*   9. Changelog
*   10. Support Information

---

## 1. Introduction to Veridian CSR
Welcome to Veridian CSR, your definitive toolkit for enterprises to manage, track, and report on their Environmental Sustainability and Corporate Social Responsibility (CSR) initiatives. Veridian CSR is a pure client-side application built with HTML5, CSS3, and modern JavaScript, offering a professional, enterprise-grade aesthetic combined with cutting-edge interactive features.

**Purpose:** To provide a comprehensive suite of tools for enterprises to monitor environmental impact (carbon footprint, energy, water, waste), manage social and governance metrics, and generate compliant CSR reports.

**Key Benefits:**
*   **All-in-One Solution:** From data input and tracking to advanced analytics and report generation.
*   **Client-Side Operation:** Runs entirely in the browser, ensuring data privacy and control (no server-side dependencies).
*   **Highly Customizable:** Extensive theming options and white-labeling capabilities.
*   **Modern & Interactive:** Features real-time data visualization, gamification, and innovative UI elements.
*   **Marketplace Ready:** Designed with best practices for quality, documentation, and user experience.

**Target Audience:** Enterprises of all sizes looking for a robust, in-house solution to manage their CSR data and reporting without relying on external SaaS platforms. Developers looking for a comprehensive HTML5 theme to build upon for CSR-related applications.

## 2. Installation Guide
Veridian CSR is designed to be straightforward to use. As a client-side HTML5 theme, it doesn't require complex installation procedures.

**Steps:**

1.  **Download & Unzip:** Obtain the Veridian CSR theme package (e.g., from Envato Market) and unzip it to a desired location on your local machine or web server.
2.  **Explore the File Structure:** Familiarize yourself with the main directories:
    *   `/` (root): Contains all HTML page templates (e.g., `dashboard-executive.html`, `tracker-carbon-footprint.html`, etc.) and `index.html`.
    *   `/assets/`: Contains all static assets:
        *   `/css/`: Main stylesheet (`style.css`), minified version (`style.min.css`), and theme variations in `/themes/`.
        *   `/js/`: Main JavaScript file (`main.js`), minified version (`main.min.js`), and various modules in `/modules/` (e.g., `secureStorage.js`, `carbonCalculator.js`).
        *   `/images/`: Placeholder for demo images and logos.
        *   `/webfonts/`: For any locally hosted web fonts (if not using CDNs like Google Fonts).
        *   `/lang/`: JSON files for multi-language support (e.g., `en.json`, `de.json`).
    *   `/docs/`: Contains this documentation and other helpful resources like video scripts.
    *   `/samples/`: Sample data files (`sample-data.json`, `sample-import.xlsx`, `sample-import.csv`) to demonstrate data import/export.
3.  **Open in Browser:** Simply open any of the `.html` files (e.g., `index.html` or `dashboard-executive.html`) directly in your web browser (like Chrome, Firefox, Safari, Edge) to start using the theme.
4.  **Local Server (Recommended for some features):** While most of the theme works by opening HTML files directly, some browser features (like fetching local JSON language files via `fetch()` API or certain advanced JavaScript functionalities) might behave more consistently or avoid security restrictions when served from a local web server.
    *   You can use simple tools like Python's `http.server` (`python -m http.server 8000` in the theme's root directory), Node.js based servers (e.g., `live-server`), or XAMPP/MAMP/WAMP. This is standard practice for web development.

That's it! You can now explore the theme's pages and features.

## 3. Overview of Core Page Templates
Veridian CSR comes with 11 pre-built HTML page templates, each serving a specific purpose within the CSR management workflow:

*   **`index.html`**: Placeholder entry page. Can be customized as a landing page or redirect to the main dashboard.
*   **`dashboard-executive.html`**: The main overview dashboard for C-level executives, showcasing key CSR metrics, charts, and gamification badges.
*   **`tracker-carbon-footprint.html`**: For detailed tracking of Scope 1, 2, and 3 carbon emissions, with placeholders for map visualizations and real-time calculation displays.
*   **`metrics-environmental.html`**: A tabbed interface to monitor specific environmental data like Energy, Waste Management, and Water Usage, with charts and tables.
*   **`hub-social-impact.html`**: Dashboard for tracking people-focused metrics like Diversity & Inclusion, Employee Safety, and Community Volunteer Hours.
*   **`center-governance.html`**: A document manager-style interface for managing company policies, compliance documents, and their statuses.
*   **`builder-csr-report.html`**: A step-by-step wizard to generate professional CSR reports, allowing data selection, customization, and PDF export.
*   **`checklist-compliance.html`**: An interactive tool to track adherence to various compliance standards (e.g., CSRD, SEC) with progress bars.
*   **`hub-data-io.html`**: Central hub for importing and exporting the entire application dataset using Excel (.xlsx) or CSV files.
*   **`analytics-insights.html`**: Provides tools for advanced analysis, including "what-if" scenarios and predictive forecasting of metrics like emissions.
*   **`panel-configuration.html`**: Allows users to customize their experience, including theme selection, language preferences, and API hook configurations.

## 4. Feature Deep Dive

### 4.1. Executive Dashboard (`dashboard-executive.html`)
*(Content to be added: Explanation of KPI cards, charts, gamification badge display.)*

### 4.2. Carbon Footprint Tracker (`tracker-carbon-footprint.html`)

The Carbon Footprint Tracker is a dedicated page for inputting and analyzing your organization's greenhouse gas (GHG) emissions, categorized by Scope 1, Scope 2, and Scope 3.

**Interface Overview:**

*   **Header:** Displays the page title "Carbon Footprint Tracker."
*   **Emission Controls Section:** This is the primary area for data input, divided into three cards:
    *   **Scope 1 Emissions Card:**
        *   **Description:** "Direct emissions from owned or controlled sources."
        *   **Input Fields:** Includes example fields like "Natural Gas (kWh)". You can expand this with more Scope 1 sources relevant to your organization (e.g., company-owned vehicles, other fuel types).
        *   **Calculate Button:** A "Calculate Scope 1" button to process the entered data for this scope.
    *   **Scope 2 Emissions Card:**
        *   **Description:** "Indirect emissions from the generation of purchased energy."
        *   **Input Fields:** Includes an example field for "Purchased Electricity (kWh)".
        *   **Calculate Button:** A "Calculate Scope 2" button.
    *   **Scope 3 Emissions Card:**
        *   **Description:** "All other indirect emissions in the value chain."
        *   **Input Fields:** Includes an example field for "Business Travel (km)". This scope is often the most extensive and can include categories like purchased goods and services, employee commuting, waste disposal, etc. You can add more specific input fields as needed.
        *   **Calculate Button:** A "Calculate Scope 3" button.
*   **Map Visualization Section (Placeholder):**
    *   A card titled "Emissions by Location."
    *   Contains a placeholder area (`<div id="carbonMap">`) where a D3.js map visualization will be rendered in future updates to show emissions geographically.
*   **Real-Time Results Section:**
    *   A card titled "Calculated Carbon Footprint."
    *   Displays the calculated CO2e (Carbon Dioxide equivalent) values:
        *   `Total CO2e`: Sum of all scopes.
        *   `Scope 1 CO2e`: Calculated emissions for Scope 1.
        *   `Scope 2 CO2e`: Calculated emissions for Scope 2.
        *   `Scope 3 CO2e`: Calculated emissions for Scope 3.
    *   These values are updated when you click the respective "Calculate Scope X" buttons.

**How to Use:**

1.  **Navigate:** Access the page via the main navigation menu ("Carbon Tracker").
2.  **Enter Data:**
    *   For each relevant scope (Scope 1, 2, or 3), enter your activity data into the provided input fields (e.g., kWh of natural gas, kWh of electricity, km of business travel).
    *   The current input fields are examples. The theme is designed for you to customize these fields based on your specific data collection methods and emission sources.
3.  **Calculate Emissions:**
    *   After entering data for a scope, click the corresponding "Calculate Scope X" button.
    *   The page will use pre-defined (currently placeholder) emission factors from `assets/js/modules/emissionFactors.js` and calculation logic from `assets/js/modules/carbonCalculator.js` to estimate the CO2e for that scope.
    *   The results will appear in the "Calculated Carbon Footprint" section.
4.  **View Total:** The "Total CO2e" will automatically update to reflect the sum of all calculated scopes.
5.  **Data Persistence:** All input values and calculated CO2e figures for each scope are automatically saved to your browser's local storage (using AES encryption via `SecureStorage.js`). When you revisit the page, your previously entered and calculated data will be reloaded.

**Customization & Expansion:**

*   **Emission Factors:** The accuracy of calculations depends heavily on the emission factors used. The current factors in `assets/js/modules/emissionFactors.js` are placeholders. You should update these with factors relevant to your region, energy providers, and specific activities, sourced from reputable bodies like the EPA, DEFRA, IEA, or the GHG Protocol.
*   **Input Fields:** You can add more input fields to the HTML structure within each scope card to cover more emission sources. You'll also need to update the JavaScript logic in `tracker-carbon-footprint.html` to read from these new fields and call appropriate functions in `carbonCalculator.js` (which you might also need to extend).
*   **`co2.js` Library:** The page also loads `@tgwf/co2` (CO2.js by The Green Web Foundation). This library is specialized for digital carbon footprints (e.g., website energy usage). While not used by the default Scope 1, 2, 3 forms on this page, it's available if you wish to add features to estimate the carbon footprint of your company's digital assets.

### 4.3. Environmental Metrics (`metrics-environmental.html`)
*(Content to be added: Using tabs for Energy, Waste, Water; understanding charts and tables.)*

### 4.4. Social Impact Hub (`hub-social-impact.html`)
*(Content to be added: Gauges for D&I, Safety; cards for community hours.)*

### 4.5. Governance Center (`center-governance.html`)
*(Content to be added: Managing policies, status tracking, document linking metadata.)*

### 4.6. CSR Report Builder (`builder-csr-report.html`)

The CSR Report Builder allows you to generate professional, multi-page PDF reports summarizing your organization's CSR data. It uses a step-by-step wizard interface.

**Interface Overview:**

*   **Header:** "CSR Report Builder" and a brief description.
*   **Wizard Navigation:** A pill-style navigation bar at the top shows the four steps:
    1.  Data Range
    2.  Sections
    3.  Branding
    4.  Preview & Download
    You can click on these navigation pills to jump between steps (once they are accessible).
*   **Wizard Content Area:** Displays the content for the current active step.
*   **Navigation Buttons:** "Previous" and "Next" buttons are provided at the bottom to move through the wizard. The "Next" button changes to "Generate Report" on the final step.

**How to Use:**

1.  **Step 1: Select Data Range**
    *   **Start Date & End Date:** Choose the period for which you want to generate the report using the date input fields.
    *   *Note: Currently, the application stores snapshot data (e.g., latest carbon calculations, current checklist status). True historical data reporting would require a more complex data storage structure that versions data over time. This wizard currently acts as a placeholder for data selection based on available (latest) data.*

2.  **Step 2: Choose Sections to Include**
    *   A list of checkboxes allows you to select which sections to include in your report. Examples:
        *   Executive Summary
        *   Carbon Footprint Analysis
        *   Environmental Metrics (Energy, Waste, Water)
        *   Social Impact Initiatives
        *   Governance & Compliance Overview
    *   Check the sections relevant to your reporting needs. *The actual data for these sections will be pulled from the respective modules (e.g., Carbon Tracker data, Social Impact Hub data). This data fetching is placeholder for now.*

3.  **Step 3: Customize Branding**
    *   **Upload Company Logo:** Select an image file (PNG, JPG) for your company logo to be included in the report.
    *   **Report Primary Color:** Choose a primary color for headings or accents in the report using a color picker.
    *   **Custom Header/Footer Text (Optional):** Add any custom text you want to appear in the report's header or footer (e.g., "Confidential").

4.  **Step 4: Preview & Download**
    *   **Report Preview Area:** This area will show a dynamic preview of how your report will look based on your selections. *(Current implementation shows a very basic placeholder text; full dynamic preview is a complex feature for future development).*
    *   **"Generate Report" Button (from "Next" on Step 3):** Clicking this button (after filling previous steps) will trigger the placeholder data compilation.
    *   **"Download PDF Report" Button:** After "generating," click this button. The application will use `jsPDF` to create a PDF document.
        *   The current PDF generation is very basic, including a title and some placeholder text. A production-ready report would involve complex formatting, data table creation, chart inclusion (potentially as images), and multi-page handling within `jsPDF`.

**Technical Notes:**

*   **jsPDF:** The theme uses the `jsPDF` library (loaded via CDN) for client-side PDF generation.
*   **Data Aggregation (Placeholder):** The logic to collect all selected data from various parts of the application (Carbon Tracker, Environmental Metrics, etc.) and format it for the PDF is currently placeholder. A real implementation would require robust data retrieval functions.
*   **Customization:** The report's design and content structure generated by `jsPDF` can be extensively customized by editing the JavaScript code that handles the PDF creation (currently in the page-specific script within `builder-csr-report.html`).

### 4.7. Compliance Checklist (`checklist-compliance.html`)
*(Content to be added: Interactive checklist usage, progress bars, localStorage persistence.)*

### 4.8. Data I/O Hub (`hub-data-io.html`)

The Data I/O Hub is your central location for managing the entire application's dataset. It allows you to import data from and export data to local files, serving as your "database file" strategy. All data is processed client-side.

**Interface Overview:**

*   **Import Data Section:**
    *   **File Input:** A drag-and-drop zone (or clickable file input) allows you to select an Excel (`.xlsx`) or CSV (`.csv`) file from your computer.
    *   **Import Button:** Becomes active once a file is selected. Clicking it initiates the import process.
    *   **File Name Display:** Shows the name of the selected file.
    *   **Validation/Success Messages:** Areas to display messages about the import process, including any validation errors or success notifications.
*   **Export Data Section:**
    *   **"Export as Excel (.xlsx)" Button:** Click to download the entire current application dataset as an Excel file.
    *   **"Export as CSV" Button:** Click to download the entire current application dataset as a CSV file.
    *   **Notes:** Brief explanations about the export formats.

**Data Format for Import/Export:**

*   The Veridian CSR application stores and manages its data as a single, large JSON object internally (when saving the full dataset).
*   **Exported Files:** When you export, this JSON object is either:
    *   Stored as a string in cell A1 of the generated Excel (`.xlsx`) file.
    *   Stored as a string in the first (and only) field of the generated CSV (`.csv`) file.
*   **Imported Files:** When you import, the application expects the file to contain this JSON string in the same way (A1 for Excel, first field for CSV).
*   You can view the expected structure by first exporting your current data or by examining the `samples/sample-data.json` file.

**How to Use:**

**Import Data:**
1.  **Prepare Your File:**
    *   Ensure your data is in a JSON string format.
    *   If using Excel, paste this JSON string into cell A1 of a new sheet.
    *   If using CSV, the CSV file should contain only this JSON string (optionally enclosed in double quotes if it contains commas or newlines, though the current parser is simple).
    *   Refer to `samples/sample-import.xlsx.txt` (describes Excel A1 content) and `samples/sample-import.csv` for examples.
2.  **Select File:** Drag your `.xlsx` or `.csv` file onto the drop zone, or click the drop zone to open a file selection dialog.
3.  **Import:** Click the "Import Data" button.
4.  **Validation & Saving:** The application will:
    *   Read the JSON string from the file using `SheetJS`.
    *   Parse the JSON string into an object.
    *   Perform basic validation (e.g., checking for expected top-level keys like `veridianCSRVersion`). Placeholder validation is currently in place.
    *   If valid, the entire dataset is saved into your browser's local storage using AES encryption (via `SecureStorage.js`) under the key `veridianCSR_fullDataSet`. **This will overwrite any existing application data.**
    *   You'll receive a success or error message.

**Export Data:**
1.  **Choose Format:** Click either "Export as Excel (.xlsx)" or "Export as CSV".
2.  **Download:** Your browser will download a file (e.g., `veridian_csr_data_export.xlsx` or `veridian_csr_data_export.csv`).
3.  **Content:** This file contains the unencrypted JSON string of your entire application data, suitable for backup, transfer, or offline analysis.
    *   The export function first tries to load the `veridianCSR_fullDataSet` (if you previously imported data).
    *   If not found, it attempts to construct a dataset by loading individual data pieces (like user preferences, carbon tracker data, etc.) that have been saved securely by other modules.

**Technical Notes:**
*   **SheetJS:** Used for client-side reading of Excel and CSV files.
*   **SecureStorage:** Imported data is encrypted before being saved to `localStorage`. Exported data is provided unencrypted in the downloaded file for user convenience.
*   **Data Structure:** Maintaining the correct JSON structure (as seen in `sample-data.json` or a fresh export) is crucial for successful imports.

### 4.9. Analytics & Insights (`analytics-insights.html`)
*(Content to be added: What-if scenarios, predictive analytics (linear regression example).)*

### 4.10. Configuration Panel (`panel-configuration.html`)
*(Content to be added: Changing themes, selecting language, API hook fields explanation.)*
The Configuration Panel is where users can personalize their Veridian CSR experience and set up integrations.

*   **Theme Preferences:** Allows users to select from 10 unique design variations. The chosen theme is applied instantly across the application. See the "Customization Guide" for details on themes.
*   **Language Settings:** Users can select their preferred language for the application's user interface. New languages can be added by placing corresponding JSON files in the `/assets/lang/` directory.
*   **Data Source Configuration (Placeholders):** These fields are placeholders for future integration with external data sources.
*   **API Hooks & Integrations (Placeholders):** Users can enter API credentials (e.g., Slack Webhook URL, Trello API Key/Token) for potential third-party integrations. Example JavaScript snippets are provided (commented out in the page source) to guide developers on how these might be used.

All preferences set here are saved securely in the browser's local storage.

## 5. Standout Features

### 5.1. Gamification System
*(Content to be added: How achievements are triggered, where badges are displayed, list of current achievements.)*

### 5.2. Voice Commands (Experimental)
*(Content to be added: How to activate, list of sample commands, browser compatibility notes.)*

### 5.3. Customizable Widgets (Dashboard)
*(Content to be added: How to drag-and-drop widgets (once implemented), layout persistence.)*

## 6. Customization Guide

### 6.1. Theme Selection & Switching

Veridian CSR comes with 10 pre-built themes to instantly change the application's look and feel. You can easily switch between these themes using the Configuration Panel.

**How to Switch Themes:**

1.  **Navigate to the Configuration Panel:** Click on "Configuration" (or a similar label) in the main navigation menu. This will take you to `panel-configuration.html`.
2.  **Locate Theme Preferences:** Find the "Theme Preferences" section on the page.
3.  **Select a Theme:** You'll see a dropdown menu labeled "Select Theme:". Click on it to see the list of available themes:
    *   Default Light
    *   Corporate Dark
    *   Oceanic
    *   Forest
    *   High Contrast
    *   Solar Flare
    *   Arctic Dawn
    *   Vintage Paper
    *   Neon Noir
    *   Spring Bloom
    *   Grayscale Impact
4.  **Apply Theme:** Select your desired theme from the list. The application's appearance will update immediately to reflect your choice.
5.  **Save Preferences:** Your theme selection is automatically saved to your browser's local storage (in an encrypted format) when you navigate away or when explicitly saving all preferences on the Configuration Panel (if a global save button exists or upon specific actions that trigger preference saving). When you next open Veridian CSR, your chosen theme will be automatically loaded.

**Note on `style.css`:** The "Default Light" theme option typically refers to the base styles defined in `assets/css/style.css` without any theme-specific overrides from the `/themes/` directory.

### 6.2. White-Labeling / Rebranding (CSS Custom Properties)
Veridian CSR is designed to be easily white-labeled or rebranded to match your company's identity. This is primarily achieved by modifying CSS Custom Properties (variables) defined in the main stylesheet: `assets/css/style.css`.

At the top of `assets/css/style.css`, you'll find a commented section titled "VERIDIAN CSR - WHITE-LABELING & EASY REBRANDING GUIDE". This section highlights the key variables you'll want to change:

*   **Primary Brand Colors:**
    *   `--primary-color`: Your main brand color (e.g., `#FF6600`).
    *   `--primary-color-rgb`: The R,G,B equivalent (e.g., `255, 102, 0`) for use in `rgba()`.
    *   `--primary-color-dark` & `--primary-color-light`: Darker and lighter shades.
    *   `--primary-text-color`: Text color for primary backgrounds (typically `#FFFFFF` or `#000000`).
*   **Secondary & Accent Colors:** Similar variables for secondary and accent colors.
*   **Typography:**
    *   `--font-family-sans-serif`: For main body text.
    *   `--font-family-headings`: For all headings.
    *   (Ensure any new fonts are imported via `@import` in `style.css` or linked in HTML).
*   **General UI:**
    *   `--body-bg`: Page background.
    *   `--body-color`: Default text color.
    *   `--card-bg`: Card background.
    *   `--border-radius`: Default roundness for corners.

**How to Apply Changes:**
1.  Open `assets/css/style.css`.
2.  Locate the `:root {}` selector.
3.  Modify the values of the custom properties as needed.
4.  Save the file and refresh your browser to see the changes.

Most visual aspects of the theme are tied to these variables, allowing for significant rebranding with minimal CSS edits. For deeper changes or to adjust the pre-built themes, you can edit the individual theme files in `/assets/css/themes/`.

### 6.3. Advanced CSS Customization
*(Content to be added: How to modify individual theme files, or add new CSS rules.)*

### 6.4. JavaScript Overview & Customization Hooks (Placeholder)
*(Content to be added: Overview of JS module structure (`assets/js/modules/`), how to interact with key functions if applicable, placeholder for future hooks.)*

### 6.5. Adding New Languages (JSON Files)
*(Content to be added: How to create a new `xx.json` file in `assets/lang/` and update the language selector.)*

## 7. Data Management

Veridian CSR operates entirely on the client-side, meaning all your data is stored locally in your web browser's `localStorage`. This ensures you have full control over your information and no data is sent to any external servers by the theme itself.

### 7.1. LocalStorage and AES Encryption

**What is Stored?**
The application stores various types of data to provide a persistent experience, including:
*   **User Preferences:** Your selected theme, language, and any API hook configurations from the `panel-configuration.html`. (Stored under key: `veridianUserPreferences`)
*   **Carbon Tracker Data:** Inputs and calculated CO2e values for Scope 1, 2, and 3 emissions from `tracker-carbon-footprint.html`. (Stored under key: `veridianCSR_carbonTrackerData`)
*   **Compliance Checklist Progress:** The checked/unchecked states of items in `checklist-compliance.html`. (Stored under key: `complianceChecklistProgress`)
*   **Dashboard Widget Layout (Future):** The preferred order and visibility of widgets on the `dashboard-executive.html`. (Stored under key: `veridianCSR_dashboardWidgetLayout`)
*   **Gamification Data:** Earned achievements/badges. (Stored under key: `veridianCSR_earnedAchievements`)
*   **Full Application Dataset (on Import):** If you import data using the Data I/O Hub, the entire imported dataset is stored under a single key (`veridianCSR_fullDataSet`).

**Data Encryption (AES):**
To provide a layer of privacy for the data stored in your browser, Veridian CSR uses **AES (Advanced Encryption Standard)** to encrypt all data before it's saved to `localStorage`.

*   **How it Works:**
    *   The theme includes a module called `SecureStorage.js` (located in `assets/js/modules/`).
    *   This module utilizes the reputable `CryptoJS` library (loaded via CDN) to perform AES encryption and decryption.
    *   When data is saved (e.g., saving preferences, carbon tracker entries), it is first converted to a JSON string, then encrypted using AES, and the resulting ciphertext is stored in `localStorage`.
    *   When data is loaded, the ciphertext is retrieved from `localStorage`, decrypted using AES, and then parsed back into a usable JavaScript object.
*   **Encryption Key:**
    *   Currently, `SecureStorage.js` uses a **fixed, hardcoded encryption key** for simplicity of this client-side theme. This key is embedded within the `SecureStorage.js` file.
    *   **Security Note:** While this prevents casual inspection of `localStorage` data, it's important to understand that for a purely client-side application, a determined user with access to the browser's developer tools could potentially find this key and decrypt the data. This is an inherent limitation of client-side encryption where the key must be available to the client. For enhanced security in a production environment handling highly sensitive data, server-side encryption or user-provided passphrases (managed carefully) would typically be employed, but these are outside the scope of a standalone client-side theme.
    *   The primary benefit here is obfuscation from casual browsing of localStorage data and providing a basic level of data protection as per the "simple AES implementation" requirement.

You can clear your browser's `localStorage` for the site if you wish to reset all application data, but remember this is irreversible unless you have an exported backup.

### 7.3. Data Import Process (Excel/CSV)
*(Content to be added: File format expectations, how data is merged/overwritten.)*

### 7.4. Data Export Process (Excel/CSV)
*(Content to be added: What data is included in the export.)*

### 7.5. Data Structure Overview (for Import/Export)
*(Content to be added: A brief overview of the main JSON structure expected for full data import/export.)*

## 8. Frequently Asked Questions (FAQ)
*(Content to be added: Q&A for common issues or questions.)*
*   *Q: How do I add a new theme?*
*   *Q: Is my data shared with any server? (A: No, it's purely client-side)*
*   *Q: What are the browser compatibility requirements?*

## 9. Changelog
*(Content to be added: A reference to `changelog.txt` or a summary of key versions.)*

## 10. Support Information
*(Content to be added: How to get support, report issues, or suggest features.)*
