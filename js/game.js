let players = [];
let secret = 0;
let low = 0;
let high = 0;
let current = 0;
let maxNum = 0;

const setup = document.getElementById("setup");
const game = document.getElementById("game");
const end = document.getElementById("end");

const playerCount = document.getElementById("playerCount");
const nameInputs = document.getElementById("nameInputs");
const maxNumber = document.getElementById("maxNumber");

const playerInfo = document.getElementById("playerInfo");
const rangeInfo = document.getElementById("rangeInfo");
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const countdown = document.getElementById("countdown");
const message = document.getElementById("message");
const resultText = document.getElementById("resultText");

/* 渲染玩家名字输入框 */
function renderNameInputs() {
  nameInputs.innerHTML = "";
  const count = parseInt(playerCount.value);
  const L = LANG[currentLang];

  for (let i = 0; i < count; i++) {
    const label = document.createElement("label");
    label.textContent = L.playerName(i + 1);

    const input = document.createElement("input");
    input.id = `name${i}`;
    input.placeholder = L.playerName(i + 1);

    nameInputs.appendChild(label);
    nameInputs.appendChild(input);
  }
}

playerCount.addEventListener("change", renderNameInputs);
renderNameInputs();

/* 玩家人数按钮组 */
document.querySelectorAll("#playerButtons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const count = btn.getAttribute("data-count");
    playerCount.value = count;
    renderNameInputs();
  });
});

/* 开始游戏 */
document.getElementById("startBtn").onclick = () => {
  const count = parseInt(playerCount.value);
  const need = count * 10;
  maxNum = parseInt(maxNumber.value);

  if (maxNum < need) {
    alert(`最大数字必须 ≥ ${need}`);
    return;
  }

  players = [];
  for (let i = 0; i < count; i++) {
    let name = document.getElementById(`name${i}`).value.trim();
    if (!name) {
      alert("请填写所有玩家名字");
      return;
    }
    players.push(name);
  }

  low = 0;
  high = maxNum;
  secret = Math.floor(Math.random() * (maxNum + 1));
  current = 0;

  setup.classList.add("hidden");
  game.classList.remove("hidden");
  end.classList.add("hidden");

  updateUI();
};

/* 更新界面 */
function updateUI() {
  const L = LANG[currentLang];

  playerInfo.textContent = L.turn(players[current]);
  rangeInfo.textContent = L.range(low, high);

  guessInput.value = "";
  guessInput.min = low + 1;
  guessInput.max = high - 1;

  countdown.textContent = "";
  message.textContent = "";
}

/* 提交数字 */
guessBtn.onclick = () => {
  const guess = parseInt(guessInput.value);
  const L = LANG[currentLang];

  if (isNaN(guess) || guess <= low || guess >= high) {
    message.textContent = L.onlyInside;
    return;
  }

  guessBtn.disabled = true;
  guessInput.disabled = true;

  startCountdown(guess);
};

/* 倒计时 */
function startCountdown(guess) {
  let t = (high - low <= maxNum / 3) ? 1 : 3;
  countdown.textContent = t;

  const timer = setInterval(() => {
    t--;
    if (t <= 0) {
      clearInterval(timer);
      countdown.textContent = "0";
      setTimeout(() => resolveGuess(guess), 200);
    } else {
      countdown.textContent = t;
    }
  }, 1000);
}

/* 判断结果 */
function resolveGuess(guess) {
  const L = LANG[currentLang];

  if (guess === secret) {
    game.classList.add("hidden");
    end.classList.remove("hidden");
    resultText.textContent = L.boom(players[current], secret);
    return;
  }

  if (guess < secret) low = guess;
  else high = guess;

  current = (current + 1) % players.length;

  guessBtn.disabled = false;
  guessInput.disabled = false;

  updateUI();
}

/* 再来一局 */
document.getElementById("restartBtn").onclick = () => {
  setup.classList.remove("hidden");
  game.classList.add("hidden");
  end.classList.add("hidden");
  maxNumber.value = 50;
  renderNameInputs();
};

/* 语言菜单 */
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");

langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("hidden");
});

langMenu.querySelectorAll("div").forEach(item => {
  item.addEventListener("click", () => {
    const lang = item.getAttribute("data-lang");
    setLang(lang);
    langMenu.classList.add("hidden");
  });
});

document.addEventListener("click", e => {
  if (!langMenu.contains(e.target) && e.target !== langBtn) {
    langMenu.classList.add("hidden");
  }
});

/* 暗夜模式 */
const themeBtn = document.getElementById("themeToggle");

function applyTheme() {
  const theme = localStorage.getItem("theme") || "light";

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    themeBtn.textContent = "☀️";
  } else {
    document.documentElement.classList.remove("dark");
    themeBtn.textContent = "🌙";
  }
}

themeBtn.addEventListener("click", () => {
  const current = localStorage.getItem("theme") || "light";
  const next = current === "light" ? "dark" : "light";
  localStorage.setItem("theme", next);
  applyTheme();
});

applyTheme();
