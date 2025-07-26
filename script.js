
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Leveler"
    ],
    answer: 2
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets"
    ],
    answer: 0
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: 2
  },
  {
    question: "Which is used to Connect To Database?",
    options: ["PHP", "HTML", "JS", "All"],
    answer: 0
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ],
    answer: 3
  },
  {
    question: "Which tag is used to insert an image in HTML?",
    options: ["<image>", "<img>", "<src>", "<pic>"],
    answer: 1
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<script>", "<javascript>"],
    answer: 2
  },
  {
    question: "Which of the following is a valid type of function javascript supports?",
    options: ["named function", "anonymous function", "both of the above", "none of the above"],
    answer: 2
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"],
    answer: 0
  },
  {
    question: "What is the correct syntax for referring to an external script called 'app.js'?",
    options: ["<script src='app.js'>", "<script href='app.js'>", "<link rel='script' href='app.js'>", "<js src='app.js'>"],
    answer: 0
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: ["msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');"],
    answer: 3
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["font", "styles", "class", "style"],
    answer: 3
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["bgcolor", "color", "background-color", "backgroundColor"],
    answer: 2
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function myFunction()", "def myFunction()", "create myFunction()", "function:myFunction()"],
    answer: 0
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: ["call myFunction()", "call function myFunction", "myFunction()", "Call.myFunction()"],
    answer: 2
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    options: ["if i == 5 then", "if i = 5", "if (i == 5)", "if i = 5 then"],
    answer: 2
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["-", "=", "*", "x"],
    answer: 1
  },
  {
    question: "How does a FOR loop start?",
    options: ["for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)"],
    answer: 1
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: ["var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
    answer: 1
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onmouseclick", "onclick"],
    answer: 3
  },
  {
    question: "What is the correct syntax to change the content of a <p> element with id='demo'?",
    options: ["#demo.innerHTML = 'Hello';", "document.getElement('p').innerHTML = 'Hello';", "document.getElementById('demo').innerHTML = 'Hello';", "document.getId('demo') = 'Hello';"],
    answer: 2
  },
  {
    question: "Which method is used to round a number to the nearest integer?",
    options: ["Math.ceil()", "Math.round()", "Math.floor()", "Math.rnd()"],
    answer: 1
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "float", "string"],
    answer: 0
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<style>", "<css>", "<stylesheet>"],
    answer: 1
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: 2
  },
  {
    question: "What is the default value of position property in CSS?",
    options: ["relative", "absolute", "fixed", "static"],
    answer: 3
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "/* */", "**"],
    answer: 0
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Management", "Digital Ordinance Model", "Desktop Object Model"],
    answer: 0
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: 0
  },
  {
    question: "Which input type defines a slider control in HTML?",
    options: ["slider", "range", "scroll", "bar"],
    answer: 1
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    options: ["top(x, y)", "Math.max(x, y)", "Math.ceil(x, y)", "ceil(x, y)"],
    answer: 1
  },
  {
    question: "Which of the following is not a data type in JavaScript?",
    options: ["Number", "Boolean", "Float", "String"],
    answer: 2
  },
  {
    question: "What is the correct way to declare a JavaScript object?",
    options: ["var obj = {}", "var obj = []", "var obj = ()", "var obj = <>"],
    answer: 0
  },
  {
    question: "How do you comment multiple lines in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "** **"],
    answer: 2
  },
  {
    question: "Which method removes the last element from an array?",
    options: ["pop()", "remove()", "delete()", "shift()"],
    answer: 0
  },
  {
    question: "Which of the following is a looping structure in JavaScript?",
    options: ["for", "while", "do-while", "All of the above"],
    answer: 3
  },
  {
    question: "What is the correct syntax for a comment in CSS?",
    options: ["// this is a comment", "/* this is a comment */", "<!-- this is a comment -->", "** this is a comment **"],
    answer: 1
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: ["text-style", "font-weight", "font-style", "bold"],
    answer: 1
  }
];


let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let seconds = 0;
let shuffledQuestions = [];

const usernameInput = document.getElementById("username");
const welcomeUser = document.getElementById("welcome-user");
const questionText = document.getElementById("question");
const optionsList = document.getElementById("options");
const timer = document.getElementById("timer");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");

function shuffleQuestions(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function startQuiz() {
  const username = usernameInput.value.trim();
  if (!username) return alert("Please enter your name");

  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  welcomeUser.textContent = `Hello ${username}`;

  seconds = 0;
  score = 0;
  currentQuestionIndex = 0;

  shuffledQuestions = shuffleQuestions([...questions]).slice(0, 10); // 👈 Only 10 questions
 // clone and shuffle
  startTimer();
  showQuestion();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    seconds++;
    let mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    let secs = String(seconds % 60).padStart(2, '0');
    timer.textContent = `${mins}:${secs}`;
  }, 1000);
}

function showQuestion() {
  const current = shuffledQuestions[currentQuestionIndex];
  questionText.textContent = current.question;
  optionsList.innerHTML = "";
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
  progressBar.style.width = `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%`;

  current.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => selectOption(index);
    optionsList.appendChild(li);
  });

  document.getElementById("prev-btn").style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
  document.getElementById("next-btn").style.display = currentQuestionIndex === shuffledQuestions.length - 1 ? "none" : "inline-block";
  document.getElementById("submit-btn").style.display = currentQuestionIndex === shuffledQuestions.length - 1 ? "inline-block" : "none";
}

function selectOption(selectedIndex) {
  const correctIndex = shuffledQuestions[currentQuestionIndex].answer;
  if (selectedIndex === correctIndex) score++;
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
}

document.getElementById("start-btn").addEventListener("click", startQuiz);

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
});

document.getElementById("submit-btn").addEventListener("click", () => {
  clearInterval(timerInterval);
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
  document.getElementById("score").textContent = `${score}/${shuffledQuestions.length}`;
  document.getElementById("userResult").textContent = usernameInput.value;
  document.getElementById("totalTime").textContent = `${seconds}s`;
});

document.getElementById("restart-btn").addEventListener("click", () => {
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
});

document.getElementById("copy-btn").addEventListener("click", () => {
  const resultText = `Name: ${usernameInput.value}\nScore: ${score}/${shuffledQuestions.length}\nTime: ${seconds}s`;
  navigator.clipboard.writeText(resultText).then(() => {
    alert("Score copied to clipboard!");
  });
});

document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
