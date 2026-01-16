# 💥 Boomer Number

A fast‑paced, offline‑friendly web game where players take turns guessing numbers within a shrinking range. The twist: the secret number is hidden inside the range, and whoever hits it… **BOOM**.

This project includes **English**, **Simplified Chinese**, and **Cantonese**, plus a polished UI, dark mode, and mobile‑friendly layout.

---

## 🎮 Gameplay Overview

- The game randomly selects a **secret number** between `0` and the chosen maximum.
- Players take turns guessing numbers.
- After each guess, the visible range **shrinks inward**.
- Players may only choose numbers **strictly inside** the current range.
- The secret number is always inside the range — it never becomes the boundary.
- The player who guesses the secret number triggers the **BOOM** and loses the round.

---

## ✨ Features

### 🌐 Multi‑language Support
- English  
- Simplified Chinese  
- Cantonese  

### 🌙 / ☀️ Theme Toggle
- Light mode  
- Dark mode  
- Theme preference is saved automatically

### 👥 Multiplayer Support
- 2–6 players  
- Custom player names  
- Adjustable maximum number  

### 🔢 Smart Range Logic
- Range shrinks based on each guess  
- Players can only input numbers **inside** the range  
- Prevents invalid or boundary guesses  

### ⏱ Countdown System
- 3‑second timer normally  
- 1‑second timer when the range becomes tight  

### 📱 Mobile‑Friendly UI
- Works on iPhone, iPad, Android, and desktop browsers  
- Fully offline — no server required  

---

## 📂 Project Structure

```
boom-number/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── i18n.js
│   └── game.js
└── README.md
```

---

## 🚀 How to Run

Simply open:

```
index.html
```

No server, no build tools, no dependencies.

---

## 🛠 Technologies Used

- HTML5  
- CSS3  
- Vanilla JavaScript  
- Fully offline‑capable  

---

### — Designed by BY —
