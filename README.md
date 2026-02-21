# 💱 Currency Converter App

<div align="center">

![Currency Converter](https://img.shields.io/badge/Currency-Converter-blue?style=for-the-badge&logo=react&logoColor=white)
![Version](https://img.shields.io/badge/Version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)

**A clean and simple currency converter web app built with React.js**

[🌐 Live Demo](#) • [📸 Screenshots](#screenshots) • [🛠 Installation](#installation) • [📬 Contact](#contact)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

---

## 👤 About

**Currency Converter App** is a lightweight and user-friendly web application built with **React.js** that allows users to instantly convert amounts between world currencies. It features a clean white card UI with country flags, currency codes, and real-time conversion display.

This project was built by **Alamin** (afghanyarrami-bit), a Junior Frontend Developer based in 🇨🇭 Switzerland, as part of a growing portfolio of React.js projects.

> ⚠️ **Note:** This version uses **static/fixed exchange rates** — no external API is used. All conversion logic is handled locally inside the app.

---

## ✨ Features

- 💱 **Currency Conversion** — Convert amounts between multiple world currencies
- 🌍 **Country Flags** — Each currency is displayed with its country flag emoji
- 🔢 **Amount Input** — Enter any number to convert instantly
- 📋 **From & To Dropdowns** — Select source and target currencies easily
- 📊 **Converted Amount Display** — Shows the result in a clean result card
- 📱 **Responsive Design** — Works on mobile, tablet and desktop
- ⚡ **Fast & Lightweight** — No API calls, no loading delays
- 🎨 **Clean UI** — Minimal white card design on a soft grey background

---

## 🛠 Tech Stack

| Technology | Badge | Usage |
|---|---|---|
| HTML5 | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Structure |
| CSS3 | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling |
| JavaScript ES6+ | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Logic |
| React.js | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | Frontend Framework |
| Git & GitHub | ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) | Version Control |

---

## 📸 Screenshots
<img width="2751" height="1499" alt="Image" src="https://github.com/user-attachments/assets/b0a1e8f1-ebe3-4747-b04c-96323cce9011" />
### 🖥 Main Screen
> Currency Converter showing AFN → USD conversion

```
📁 screenshots/
└── main-screen.png
```

---

## ⚙️ Installation

Follow these steps to run the project on your local machine:

### Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/afghanyarrami-bit/currency-converter-app.git
```

**2. Go into the project folder**

```bash
cd currency-converter-app
```

**3. Install dependencies**

```bash
npm install
```

**4. Set up environment variables**

```bash
# Copy the example env file
cp .env.example .env
```

> ⚠️ Since this project does NOT use an API, the `.env` file may be empty or contain only local config settings.

**5. Start the development server**

```bash
npm start
```

**6. Open in browser**

```
http://localhost:3000
```

---

## 📁 Project Structure

```
currency-converter-app/
│
├── 📁 build/                     # Production build output
├── 📁 node_modules/              # Installed packages
├── 📁 public/                    # Static public assets
│   ├── index.html
│   └── favicon.ico
│
├── 📁 src/                       # Main source code
│   ├── App.css                   # App-level styles
│   ├── App.js                    # Root component (main logic)
│   ├── index.css                 # Global styles
│   └── index.js                  # React entry point
│
├── .env                          # Environment variables
├── .gitignore                    # Git ignore rules
├── package-lock.json             # Exact dependency versions
├── package.json                  # Project metadata & scripts
└── README.md                     # Project documentation
```

---

## ⚙️ How It Works

Since this app does **NOT use an external API**, all exchange rates are stored locally inside the app. Here is the simple flow:

```
User enters Amount
        ↓
User selects "From" currency  (e.g. AFN - Afghan Afghani)
        ↓
User selects "To" currency    (e.g. USD - US Dollar)
        ↓
App calculates using local static rates
        ↓
Result displayed → "0.00 USD"
```

### 💡 Conversion Logic (Example)

```javascript
// Static rates stored in App.js
const rates = {
  USD: 1,
  AFN: 71.5,
  CHF: 0.91,
  EUR: 0.92,
  GBP: 0.79,
  // ... more currencies
};

// Conversion formula
const convert = (amount, from, to) => {
  return (amount / rates[from]) * rates[to];
};
```

---

## 🚀 Usage

**Step 1** — Enter the amount you want to convert in the **Amount** field

**Step 2** — Select the **From** currency (example: AFN - Afghan Afghani 🇦🇫)

**Step 3** — Select the **To** currency (example: USD - US Dollar 🇺🇸)

**Step 4** — The **Converted Amount** updates automatically below

---

## 🌍 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Build and deploy
npm run build
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Drag and drop the build/ folder to netlify.com
```

### Deploy to GitHub Pages

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json:
# "homepage": "https://afghanyarrami-bit.github.io/currency-converter-app"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"

npm run deploy
```

---

## 🗺 Future Improvements

- [ ] 🌐 Connect to a **live exchange rate API** (e.g. ExchangeRate-API, Fixer.io)
- [ ] 🔄 Add **swap button** to quickly reverse From/To currencies
- [ ] 📈 Add **exchange rate chart** showing historical rates
- [ ] 🌙 Add **Dark Mode** toggle
- [ ] 💾 Save **favourite currency pairs** in localStorage

---

## 📬 Contact

<div align="center">

**Alamin** — Junior Frontend Developer 🇨🇭 Switzerland

[![GitHub](https://img.shields.io/badge/GitHub-afghanyarrami--bit-black?style=for-the-badge&logo=github)](https://github.com/afghanyarrami-bit)
[![Upwork](https://img.shields.io/badge/Upwork-Available-6FDA44?style=for-the-badge&logo=upwork&logoColor=white)](#)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your@email.com)

</div>

---

## 📄 License

This project is licensed under the **MIT License** — free to use and modify!

```
MIT License © 2025 Alamin (afghanyarrami-bit)
```

---

<div align="center">

**Made with ❤️ in Switzerland 🇨🇭**

⭐ If you like this project, please give it a **star** on GitHub!

</div>
