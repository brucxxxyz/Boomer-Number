const LANG = {
  zh: {
    title: "💥爆炸数字",
    playerCount: "玩家人数",
    playerName: i => `玩家 ${i} 名字`,
    maxNumber: "最大数字（≥ 人数 × 10）",
    start: "开始游戏",
    guessLabel: "请输入数字（范围内部）",
    guessBtn: "确认数字并开始倒计时",
    restart: "再来一局",
    onlyInside: "只能输入范围内部数字",
    boom: (name, secret) => `💥 BOOM！${name} 选中了爆炸数字 ${secret}！`,
    turn: name => `轮到：${name}`,
    range: (low, high) => `当前范围：${low} ~ ${high}`
  },

  hk: {
    title: "💥爆炸數字",
    playerCount: "玩家人數",
    playerName: i => `玩家 ${i} 名`,
    maxNumber: "最大數字（≥ 人數 × 10）",
    start: "開始遊戲",
    guessLabel: "請輸入範圍內嘅數字",
    guessBtn: "確認並開始倒數",
    restart: "再玩一局",
    onlyInside: "只可以輸入範圍內嘅數字",
    boom: (name, secret) => `💥 BOOM！${name} 揀中咗爆炸數字 ${secret}！`,
    turn: name => `輪到：${name}`,
    range: (low, high) => `目前範圍：${low} ~ ${high}`
  },

  en: {
    title: "💥 Boom Number",
    playerCount: "Number of Players",
    playerName: i => `Player ${i} Name`,
    maxNumber: "Max Number (≥ players × 10)",
    start: "Start Game",
    guessLabel: "Enter a number (inside range)",
    guessBtn: "Confirm & Start Countdown",
    restart: "Play Again",
    onlyInside: "Only numbers inside the range allowed",
    boom: (name, secret) => `💥 BOOM! ${name} hit the boom number ${secret}!`,
    turn: name => `Turn: ${name}`,
    range: (low, high) => `Range: ${low} ~ ${high}`
  }
};

let currentLang = "zh";

function setLang(lang) {
  currentLang = lang;
  const L = LANG[lang];

  document.getElementById("title").textContent = L.title;
  document.getElementById("label-player-count").textContent = L.playerCount;
  document.getElementById("label-max-number").textContent = L.maxNumber;
  document.getElementById("startBtn").textContent = L.start;
  document.getElementById("label-guess").textContent = L.guessLabel;
  document.getElementById("guessBtn").textContent = L.guessBtn;
  document.getElementById("restartBtn").textContent = L.restart;

  renderNameInputs();
}
