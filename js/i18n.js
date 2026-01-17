let currentLang = "zh";

const LANG = {
  zh: {
    title: "💥爆炸数字",
    labelPlayerCount: "玩家人数",
    labelMaxNumber: "最大数字（≥ 人数 × 10）",
    start: "开始游戏",
    labelGuess: "请输入数字（范围内部）",
    guessBtn: "确认数字并开始倒计时",
    restart: "再来一局",

    playerCountLabel: "",

    playerName: (i) => `玩家 ${i}`,
    turn: (name) => `轮到：${name}`,
    range: (low, high) => `当前范围：${low} ～ ${high}`,
    onlyInside: "请输入范围内部的数字",
    boom: (name, num) => `${name} 选中了爆炸数字 ${num}！💥`
  },

  hk: {
    title: "💥爆炸數字",
    labelPlayerCount: "玩家人數",
    labelMaxNumber: "最大數字（≥ 人數 × 10）",
    start: "開始遊戲",
    labelGuess: "請輸入數字（範圍內）",
    guessBtn: "確認數字並開始倒數",
    restart: "再來一局",

    playerCountLabel: "",

    playerName: (i) => `玩家 ${i}`,
    turn: (name) => `輪到：${name}`,
    range: (low, high) => `目前範圍：${low} ～ ${high}`,
    onlyInside: "請輸入範圍內的數字",
    boom: (name, num) => `${name} 選中了爆炸數字 ${num}！💥`
  },

  en: {
    title: "💥Boom Number",
    labelPlayerCount: "Players",
    labelMaxNumber: "Max number (≥ players × 10)",
    start: "Start Game",
    labelGuess: "Enter a number (inside range)",
    guessBtn: "Confirm and start countdown",
    restart: "Play Again",

    playerCountLabel: "",

    playerName: (i) => `Player ${i}`,
    turn: (name) => `Turn: ${name}`,
    range: (low, high) => `Current range: ${low} to ${high}`,
    onlyInside: "Please enter a number inside the range",
    boom: (name, num) => `${name} hit the boom number ${num}! 💥`
  }
};
