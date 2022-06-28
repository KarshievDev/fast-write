const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const words = [
    "instagram",
    "npm",
    "vue",
    "hack",
    "end",
    "I am",
    "all",
    "number",
    "oil",
    "within",
    "now",
    "right",
    "feet",
    "leave",
    "what",
    "now",
    "facebook",
    "came",
    "live",
    "test",
    "about",
    "netflix",
    "came",
    "set",
    "were",
    "follow",
    "study",
    "day",
    "structure",
    "over",
    "why",
    "why",
    "talk",
    "soon",
    "because",
    "random",
    "watch",
    "year",
    "her",
    "any",
    "snapchat",
    "I",
    "both",
    "around",
    "book",
    "line",
    "mother",
    "open",
    "now",
    "defend",
    "mile",
    "go",
    "by",
    "found",
    "said",
    "eye",
    "come",
    "so",
    "place",
    "food",
    "got",
    "city",
    "always",
    "these",
    "any",
    "use",
    "been",
    "was",
    "read",
    "their",
    "without",
    "as",
    "change",
    "leave",
    "can",
    "they",
    "those",
    "eat",
    "never",
    "no",
    "eat",
    "story",
]

let randomWord;

let score = 0;

let time = 60;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

const updateTime = () => {
  time--;
  timeEl.innerHTML = time + "s";

  if(time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
const timeInterval = setInterval(updateTime, 1000);

const gameOver = () => {
  endGameEl.innerHTML = `
    <h1>Time up!</h1>
    <p>Your final score is : ${score}</p>
    <button onclick="location.reload()">
      Reload
    </button>
  `;
  endGameEl.style.display = "flex";
}

addToDOM();


text.addEventListener("input", (e) => { 
  const typedText = e.target.value;


  if (typedText === randomWord) {
    updateScore(); // hisob oshsin
    addToDOM(); // keyingi so'zlar chiqsin
    e.target.value = ""; // inputga kiritilgan valueni tozalab yuboramiz
    updateTime(); // vaqtni yangilab borilsin
  }
});