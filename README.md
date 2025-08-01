# OrangeHRM Test Case

This folder contains the test case for OrangeHRM, located under the `e2e` directory.

## Description

- The test cases cover the OrangeHRM application login functionality.
- Tests are organized under the `e2e/orangeHRM` folder for better modularity.
- These tests use Cypress to automate browser interactions and validations.

# Cypress
Cypress is a JavaScript-based end-to-end (E2E) testing framework designed for testing modern web applications. It helps developers and QA engineers write automated tests that run directly in the browser to verify that an application works as expected.

## Why Use Cypress?

- Great developer experience (DX)
- Fast and reliable test execution
- Rich UI for debugging
- Easy integration with CI/CD pipelines

## Installation
```bash
npm install cypress
```

## Run Cypress
This opens the Cypress UI where you can see your tests and run them interactively.
```bash
npx cypress open
```
- After running this command, the Cypress Test Runner window will pop up.
- You can click on any test spec file to run the tests in a browser.
- Useful for debugging and watching tests run step-by-step.

## Cypress Folder Structure

When open Cypress for the first time, it automatically creates a default folder structure in project directory. Understanding these folders will help organize tests and related files effectively.


---

## Folder Details

### 1. `cypress/fixtures/`

- Contains **test data files**.
- Usually JSON, but can be any format like `.txt`, `.csv`, or `.js`.
- Used to load fixed sets of data during tests, e.g., user info or API responses.
- Example usage in a test: `cy.fixture('user.json').then(...)`

---

### 2. `cypress/integration/`

- This is where your **test spec files** go.
- Each file contains one or more test cases written in JavaScript.
- By default, Cypress looks here for tests to run.
- You can organize tests in subfolders if needed.

---

### 3. `cypress/plugins/`

- Contains the **plugins file**: `index.js`.
- Used to extend or modify Cypress behavior.
- You can customize the test environment, add tasks, or hook into events here.
- Runs in the Node.js process (not in the browser).

---

### 4. `cypress/support/`

- Contains reusable code and configurations.
- Commonly used files:
  - `commands.js` — for custom Cypress commands you create.
  - `index.js` — loaded before test files, for global setups like importing commands.
- Helps keep your tests clean and DRY (Don't Repeat Yourself).

---

## `cypress.json` (Configuration file)

- JSON file where you can define Cypress settings and options.
- Examples:
  - Base URL for tests.
  - Timeouts.
  - Environment variables.

---

## Summary

| Folder          | Purpose                                |
|-----------------|--------------------------------------|
| `fixtures/`     | Static test data                      |
| `integration/`  | Test spec files                       |
| `plugins/`      | Extend Cypress with plugins/custom tasks |
| `support/`      | Reusable commands and setup code     |
| `cypress.json`  | Cypress configuration options         |

---