const quizData = [
    {
        Qus: "Aprox. how many Bitcoins are left to be mined?",
        ans1: "2 million",
        ans2: "None",
        ans3: "4 million",
        ans4: "Bitcoin has unlimited supply",
        ans: "a",
    },
    {
        Qus: "Aprox. how many Bitcoins are left to be mined?",
        ans1: "2 million",
        ans2: "None",
        ans3: "4 million",
        ans4: "Bitcoin has unlimited supply",
        ans: "a",
    },
    {
        Qus: "Aprox. how many Bitcoins are left to be mined?",
        ans1: "2 million",
        ans2: "None",
        ans3: "4 million",
        ans4: "Bitcoin has unlimited supply",
        ans: "a",
    },
    {
        Qus: "Aprox. how many Bitcoins are left to be mined?",
        ans1: "2 million",
        ans2: "None",
        ans3: "4 million",
        ans4: "Bitcoin has unlimited supply",
        ans: "a",
    },
    {
        Qus: "Aprox. how many Bitcoins are left to be mined?",
        ans1: "2 million",
        ans2: "None",
        ans3: "4 million",
        ans4: "Bitcoin has unlimited supply",
        ans: "a",
    },
    {
        Qus: "Aprox. how many Bitcoins are left to be mined?",
        ans1: "2 million",
        ans2: "None",
        ans3: "4 million",
        ans4: "Bitcoin has unlimited supply",
        ans: "a",
    },
    {
        Qus: "Aprox. how many Bitcoins are left to be mined?",
        ans1: "2 million",
        ans2: "None",
        ans3: "4 million",
        ans4: "Bitcoin has unlimited supply",
        ans: "a",
    }
]

const btn = document.querySelector(".btn");
const nextQueBtn = document.getElementById("nextQueBtn");
const resultBtn = document.querySelector(".resultBtn");
const playagainBtn = document.querySelector(".playagainBtn")
const queAndoptions = document.querySelector(".queAndoptions");
const first = document.querySelector(".first");
const head = document.getElementById("head")
const ques = document.querySelector(".ques");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
let option = document.querySelectorAll(".option")


let questions = 0;

function show() {
    let quizQuestions = quizData[questions];

    ques.innerHTML = quizQuestions.Qus;

    opt1.innerText = quizQuestions.ans1;
    opt2.innerText = quizQuestions.ans2;
    opt3.innerText = quizQuestions.ans3;
    opt4.innerText = quizQuestions.ans4;
}

btn.addEventListener("click", function () {
    queAndoptions.style.display = "block";
    first.style.display = "none"
    show();
})

// For getting out selected option id
let answer = '';
let score = '';
const getAns = () => {
    option.forEach((element) => {
        if (element.checked) {
            answer = element.id
        }
    })
    return answer;
}

const deselectAll= ()=>{
    option.forEach((element)=>{
        element.checked = false;
    })
}

nextQueBtn.addEventListener("click", function () {
    let checkAnswer = getAns()
    console.log(checkAnswer);

    if (checkAnswer == quizData[questions].ans) {
        score++;
    }
    questions++;
    if (questions < quizData.length) {
        show();
        deselectAll();
    }
    else {
        queAndoptions.style.display = "none";
        first.style.display = "block"
        head.innerText = "Great! Quiz has been over."
        btn.style.display = "none"
        resultBtn.style.display = "block"

        resultBtn.addEventListener("click", () => {
            queAndoptions.style.display = "block";
            queAndoptions.innerHTML = `<h2>You have scored ${score}/${quizData.length}</h2>`
            resultBtn.style.display = "none"
            playagainBtn.style.display = "block"
            head.style.display = "none"
        })
        playagainBtn.addEventListener("click", () => {
            location.reload();
        })
    }
})