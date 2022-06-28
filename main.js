// elementlarga murojaat
const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

// so'zlar
const words = [
  "npm cache",
  "vue",
  "hacking world",
  "end",
  "I",
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

// random so'zlarni chiqarishda yordam beradigan o'zgaruvchi
let randomWord;

// ochkoni hisoblash uchun o'zgaruvchi
let score = 0;

// vaqt uchun
let time = 60;

// random so'zlar ovolamiz
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// so'zlarni DOMga qo'shish
function addToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// so'zlarni kiritganda ochkoni oshirish va ochkoni yozish
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// vaqtni yangilab borish
const updateTime = () => {
  time--;
  timeEl.innerHTML = time + "s";

  if(time === 0) { // vaqt tugaganda xabar chiqishi
    clearInterval(timeInterval);
    gameOver();
  }
}
const timeInterval = setInterval(updateTime, 1000);

const gameOver = () => { // vaqt tugagandan keyin chiqadigan card
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

// input kiritilgan valuelarni olish
text.addEventListener("input", (e) => { 
  const typedText = e.target.value;
  // valueni o'zgaruvchi tenglashitirb olamiz

  if (typedText === randomWord) {
    updateScore(); // hisob oshsin
    addToDOM(); // keyingi so'zlar chiqsin
    e.target.value = ""; // inputga kiritilgan valueni tozalab yuboramiz
    updateTime(); // vaqtni yangilab borilsin
  }
});
