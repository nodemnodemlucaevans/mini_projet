const questions = [
  {
    question: "Quelle est la capitale du Cameroun ?",
    answers: ["Douala", "Buea", "Limbe", "Dchamp"],
    correct: 0
  },
  {
    question: "Combien font 5 + 3 ?",
    answers: ["6", "8", "10"],
    correct: 1
  },
  {
    question: "Quel est le plus grand mont au monde ?",
    answers: ["Mt.Kilimanjaro", "Mt.Cameroun", "Mt.Everest"],
    correct: 2
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", () => {
  if (nextBtn.innerText === "Démarrer") {
    showQuestion();
  } else if (current < questions.length) {
    showQuestion();
  } else {
    resetQuiz();
  }
});

function showQuestion() {
  clearAnswers();
  const q = questions[current];
  questionEl.innerText = q.question;

  q.answers.forEach((text, index) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.classList.add("answer-btn");
    btn.addEventListener("click", () => selectAnswer(btn, index === q.correct));
    answersEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function selectAnswer(button, isCorrect) {
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    buttons[questions[current].correct].classList.add("correct");
  }

  current++;
  nextBtn.innerText = current < questions.length ? "Suivant" : "Afficher score";
  nextBtn.style.display = "inline-block";
}

function clearAnswers() {
  answersEl.innerHTML = "";
}

function resetQuiz() {
  questionEl.innerText = `Tu as eu ${score}/${questions.length} bonnes réponses 🎉`;
  answersEl.innerHTML = "";
  nextBtn.innerText = "Rejouer";
  current = 0;
  score = 0;
}


