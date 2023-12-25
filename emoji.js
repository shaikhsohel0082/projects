alert(
  "1) Each question has 15 Sec time.\n2) You don't have to submit the answers once time is up it will be auto submitted.\n3)You can check Emoji description before answering."
);
const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Index pointing down", emoji: "👇🏻" },
  { description: "thumbs down", emoji: "👎🏻" },
  { description: "Angry Face", emoji: "😠" },
  { description: "Growing Heart", emoji: "💗" },
  { description: "skull", emoji: "💀" },
  { description: "broken heart", emoji: "💔" },

  // Add more emoji descriptions here
];
let currentEmoji = 0;
let score = 0;

const emojiEle = document.getElementById("description");
const inputEle = document.getElementById("guess-input");
const resultEle = document.getElementById("result");
const scoreEle = document.getElementById("score");
const timerEle = document.getElementById("timer");
const { description, emoji } = emojiDetails[currentEmoji];

//function to diplay emojies
function displayEmoji() {
  emojiEle.textContent = emojiDetails[currentEmoji].emoji;
  timer();
}
displayEmoji();

//function to check user guess
function checkGuess() {
  const userGuess = inputEle.value.trim().toLowerCase();
  const correctGuess = emojiDetails[currentEmoji].description
    .trim()
    .toLowerCase();
  if (userGuess === correctGuess) {
    score++;
    resultEle.textContent = "Correct!!";
  } else if (userGuess !== "") {
    resultEle.textContent = "Wrong!!";
  }
  setTimeout(() => {
    resultEle.textContent = "";
  }, 1000);
  scoreEle.textContent = `Score: ${score} / ${emojiDetails.length}`;
  inputEle.value = "";
  inputEle.focus();

  nextEmoji();
}
// nextemoji functio to move to next emoji
function nextEmoji() {
  currentEmoji++;
  if (currentEmoji >= emojiDetails.length) {
    emojiEle.textContent = "Game Over!!";
    resultEle.textContent = "";
    if (score >= 6) {
      resultEle.textContent = "You Win!!!";
    } else {
      resultEle.textContent = "Better Luck Next Time";
    }
    inputEle.style.display = "none";
  }
  displayEmoji();
}

// inputEle.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     checkGuess();
//   }
// });
//setting timer
function timer() {
  let seconds = 16;
  const time = setInterval(() => {
    timerEle.textContent = `${--seconds} s`;
    if (seconds == 0) {
      clearInterval(time);
      timerEle.textContent = "";
    }
  }, 1000);
  setTimeout(() => {
    checkGuess();
  }, 16000);
}
