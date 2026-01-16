/* Base layout */
html {
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f5f5f5;
  color: #222;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}

/* Main container */
.container {
  width: 100%;
  max-width: 540px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0,0,0,0.08);
  position: relative;
  font-size: 18px;
}

/* Title */
h1 {
  text-align: center;
  margin-top: 0;
  color: #d62828;
  font-size: 36px;
}

/* Top-right buttons */
.top-right {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 12px;
}

/* Circular buttons with shadow */
#langBtn,
#themeToggle {
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: 50%;
  background: #ffffff;
  color: #333;
  font-size: 22px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark #langBtn,
.dark #themeToggle {
  background: #f0f0f0;
  color: #111;
}

/* Language dropdown */
.lang-wrapper {
  position: relative;
}

.lang-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 100;
  font-size: 18px;
}

.lang-menu div {
  padding: 10px 16px;
  cursor: pointer;
  white-space: nowrap;
}

.lang-menu div:hover {
  background: #eee;
}

.hidden {
  display: none;
}

/* Labels and inputs */
label {
  display: block;
  margin-top: 14px;
  font-size: 18px;
}

input, select, button {
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 18px;
  box-sizing: border-box;
}

input[type="number"] {
  text-align: center;
  font-size: 16px;
}

/* Buttons */
button {
  background: #ff4b4b;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background 0.2s ease;
}

button:hover {
  background: #e03c3c;
}

button:disabled {
  background: #bbb;
}

/* Player count buttons */
.player-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
}

.player-buttons button {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background: #ff4b4b;
  color: #fff;
  cursor: pointer;
}

/* Sections */
.section {
  margin-top: 24px;
  border-top: 1px solid #ddd;
  padding-top: 24px;
}

.info {
  margin: 10px 0;
}

.countdown {
  text-align: center;
  font-size: 48px;
  margin: 14px 0;
  color: #d62828;
}

.result {
  text-align: center;
  font-size: 26px;
  margin: 24px 0;
  color: #d62828;
}

/* Footer */
.footer {
  text-align: center;
  margin-top: 30px;
  font-size: 16px;
  opacity: 0.6;
  padding: 10px 0;
  user-select: none;
}

/* Dark mode */
.dark body {
  background: #111;
  color: #eee;
}

.dark .container {
  background: #222;
  color: #eee;
  box-shadow: 0 0 20px rgba(255,255,255,0.05);
}

.dark input,
.dark select {
  background: #333;
  color: #eee;
  border: 1px solid #555;
}

.dark button {
  background: #d62828;
}

.dark .section {
  border-top: 1px solid #444;
}

.dark .countdown,
.dark .result {
  color: #ff6b6b;
}

.dark .lang-menu {
  background: #333;
  border-color: #555;
}

.dark .lang-menu div:hover {
  background: #444;
}

.dark .footer {
  color: #ccc;
  opacity: 0.7;
}
