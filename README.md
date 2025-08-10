
# 📌 Project Name
PLAYWRIGHT-TEST-PRACTICE

## 📖 Overview
Automated end-to-end testing suite using Playwright and TypeScript, with modular Page Object Model and integrated performance testing via Artillery.

## 🚀 Features
- ✅ Automated UI tests using Playwright
- ✅ API and performance testing using Artillery
- ✅ Interactive HTML test reports
- ✅ CI/CD config example

## 🔧 Prerequisites
- Node.js installed
- Recommended: VS Code with Playwright extension

## 🔧 Installation
Follow these steps to set up the project locally:

Clone the project: 
``` sh
git clone https://github.com/vmcs29/playwright-test-practice.git
```

Install dependencies:
``` sh
npm install
```

Install Playwright browsers:
``` sh
npx playwright install
```

## Running Tests
▶️ Run All UI Tests
``` sh
npx playwright test
```

▶️ Run Specific Test File
``` sh
npx playwright test tests/ui/sauceTests.spec.ts
```

▶️ Run Specific Test by Title
``` sh
npx playwright test -g "Login with invalid credentials shows error"
```

📊 View HTML Report
``` sh
npx playwright show-report
```


## ⚡ Performance Testing with Artillery
This project includes load testing using Artillery, targeting the SauceDemo login flow.

▶️ Run Simulated Login Load Test
``` sh
npx artillery run performance/saucedemo-login.yml
```

📈 Generate Performance Report
``` sh
npx artillery run performance/saucedemo-login.yml --output performance/reports/report.json
```
``` sh
npx artillery report performance/report.json
```
Note: This simulates login by sending form data to /, mimicking the client-side login flow.


## 📂 Project Structure
``` sh
playwright-test-practice/
├── tests/
│   ├── ui/
│   │   └── sauceTests.spec.ts
│   ├── api/
│   │   └── apiTests.spec.ts  # (optional for future API tests)
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── performance/
│   ├── saucedemo-login.yml
│   ├── report.json
│   └── data/
│       └── users.csv
├── README.md
├── package.json

```

📬 Contact
For questions or contributions, feel free to reach out or open an issue!
