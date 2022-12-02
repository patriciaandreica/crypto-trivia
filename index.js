const quizData = [
    {
        Qus: "What is the main difference between cryptocurrency and NFTs?",
        ans1: "NFTs are not mutually interchangeable, while crypto can be exchanged with another crypto",
        ans2: "There are no differences",
        ans3: "NFTs are not unique and can be replicated",
        ans4: "NFTs are traded like securities on digital exchange, but are not sold ",
        ans: "a",
    },
    {
        Qus: "What does 'DAO' stand for?",
        ans1: "Decentralized Authority Operations",
        ans2: "Data Access Organization",
        ans3: "Distributed Autonomous Operations",
        ans4: "Decentralized Autonomous Organization",
        ans: "d",
    },
    {
        Qus: "What is important when considering tokenomics?",
        ans1: "Token burns",
        ans2: "Mining and staking",
        ans3: "Supply",
        ans4: "All the above",
        ans: "d",
    },
    {
        Qus: "Who was one of the creators of Ethereum?",
        ans1: "Satoshi Nakamoto",
        ans2: "Vitalik Buterin",
        ans3: "Mark Zuckerberg",
        ans4: "Anatoly Yakovenko",
        ans: "b",
    },
    {
        Qus: "How is Decentralized Exchange (DEX) different than Centralized Exchange (CEX)?",
        ans1: "DEX requires personal identity verification.",
        ans2: "They are essentially the same.",
        ans3: "DEX works upon smart contract technology with no control of any centralized entity.",
        ans4: "DEX runs on its own platform.",
        ans: "c",
    },
    {
        Qus: "What was the Ethereum merge?",
        ans1: "Ethereum adopting a proof-of-stake model",
        ans2: "A conceptual model that may be implemented Ethereum's future",
        ans3: "Ethereum adopting a proof-of-work model",
        ans4: "A way to reduce Bitcoin's energy consumption",
        ans: "a",
    },
    {
        Qus: "What is the maximum number of bitcoins that can be mined?",
        ans1: "21 million",
        ans2: "0",
        ans3: "19 million",
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
        head.innerText = "Let's see how you did!"
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