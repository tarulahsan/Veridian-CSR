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
*(Content to be added: How to input Scope 1, 2, 3 data, map visualization placeholder, understanding results.)*

### 4.3. Environmental Metrics (`metrics-environmental.html`)
*(Content to be added: Using tabs for Energy, Waste, Water; understanding charts and tables.)*

### 4.4. Social Impact Hub (`hub-social-impact.html`)
*(Content to be added: Gauges for D&I, Safety; cards for community hours.)*

### 4.5. Governance Center (`center-governance.html`)
*(Content to be added: Managing policies, status tracking, document linking metadata.)*

### 4.6. CSR Report Builder (`builder-csr-report.html`)
*(Content to be added: Step-by-step wizard usage, data selection, branding, preview, jsPDF generation.)*

### 4.7. Compliance Checklist (`checklist-compliance.html`)
*(Content to be added: Interactive checklist usage, progress bars, localStorage persistence.)*

### 4.8. Data I/O Hub (`hub-data-io.html`)
*(Content to be added: Importing/Exporting data using Excel/CSV, SheetJS usage, data validation notes.)*

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
*(Content to be added: Using the Configuration Panel.)*

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

### 7.1. LocalStorage Usage
*(Content to be added: Explanation of what data is stored locally.)*

### 7.2. Data Encryption (AES)
*(Content to be added: How data in localStorage is encrypted using `SecureStorage.js` and CryptoJS. Note on the fixed key.)*

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
