---
title: "Hugo Theme Submission Validation Script"
date: "2024-01-26"
hidden: false
---
This Python script is designed to validate the readiness of a Hugo theme for submission by checking various requirements defined in the theme.toml & README.md files. The script ensures that essential metadata and links are correctly specified and functional.

## Overview
### 1. Metadata Validation
   - **Name:** Ensures the existence and non-empty value of the theme name.
   - **License:** Checks for the presence and validity of the license type.
   - **License Link:** Verifies that the license link is an absolute and valid URL.
   - **Description:** Ensures the presence and non-empty value of the theme description.
   - **Homepage:** Validates the homepage link for being an absolute and working URL.
   - **Demosite:** Checks the demosite link for being an absolute and functional URL.
   - **Tags:** Verifies the existence of theme tags.
   - **Authors:** Ensures the presence of author information, including name and homepage.

### 2. Image Validation
   - **Screenshot:** Verifies the existence of either `screenshot.png` or `screenshot.jpg` in the `images` directory.
   - **Thumbnail:** Ensures the presence of either `tn.png` or `tn.jpg` in the `images` directory.

### 3. Optional Porting Check
   - **Original Theme Information:** If the user indicates that the theme is ported, checks for the existence and non-empty values of the original author's name, homepage, and repository link.

### 4. Link Validations
   - **License Link:** Ensures the 'licenselink' is an absolute and valid URL.
   - **Homepage Link:** Validates the 'homepage' link for being an absolute and functional URL.
   - **Demosite Link:** Checks the 'demosite' link for being an absolute and functional URL (if provided).
   - **Original Theme Links:** If the theme is ported, validates the 'homepage' and 'repo' links in the original theme information for being absolute and valid URLs.

---