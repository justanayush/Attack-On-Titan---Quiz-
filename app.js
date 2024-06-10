const assets = [
    {
        image: "images/01.jpg",
        question: "What is the real identity of the Armored Titan?",
        options: [
            {
                text: "Erwin Smith",
                isCorrect: false
            },
            {
                text: "Reiner Braun",
                isCorrect: true
            },
            {
                text: "Jean Kirstein",
                isCorrect: false
            },
            {
                text: "Connie Springer",
                isCorrect: false
            }
        ]
    },
    {
        image: "images/02.gif",
        question: "What is the name of the island where most of the story takes place?",
        options: [
            {
                text: "Marley",
                isCorrect: false
            },
            {
                text: "Eldia",
                isCorrect: false
            },
            {
                text: "Heaven Island",
                isCorrect: false
            },
            {
                text: "Paradis Island",
                isCorrect: true
            }
        ]
    },
    {
        image: "images/03.jpg",
        question: "Who was the previous holder of the Attack Titan before Eren Yeager?",
        options: [
            {
                text: "Grisha Yeager",
                isCorrect: true
            },
            {
                text: "Zeke Yeager",
                isCorrect: false
            },
            {
                text: "Kenny Ackerman",
                isCorrect: false
            },
            {
                text: "Levi Ackerman",
                isCorrect: false
            }
        ]
    },
    {
        image: "images/04.gif",
        question: "What is the power of the Founding Titan?",
        options: [
            {
                text: "Superhuman Strength",
                isCorrect: false
            },
            {
                text: "Ability to Control Other Titans",
                isCorrect: true
            },
            {
                text: "Invisibility",
                isCorrect: false
            },
            {
                text: "Flight",
                isCorrect: false
            }
        ]
    },
    {
        image: "images/05.jpg",
        question: "Who is the commander of the Survey Corps after Erwin Smith?",
        options: [
            {
                text: "Levi Ackerman",
                isCorrect: false
            },
            {
                text: "Hange Zoë",
                isCorrect: true
            },
            {
                text: "Jean Kirstein",
                isCorrect: false
            },
            {
                text: "Armin Arlert",
                isCorrect: false
            }
        ]
    },
    {
        image: "images/06.jpg",
        question: "What event triggers Eren's transformation into a Titan for the first time?",
        options: [
            {
                text: "His Mother's Death",
                isCorrect: false
            },
            {
                text: "The Fall of Wall Maria",
                isCorrect: false
            },
            {
                text: "Being Injected with a Mysterious Serum",
                isCorrect: true
            },
            {
                text: "The Death of his Friend Armin",
                isCorrect: false
            }
        ]
    },
    {
        image: "images/07.jpg",
        question: "Which Titan is known for its speed and agility?",
        options: [
            {
                text: "Colossal Titan",
                isCorrect: false
            },
            {
                text: "Female Titan",
                isCorrect: false
            },
            {
                text: "Cart Titan",
                isCorrect: false
            },
            {
                text: "Jaw Titan",
                isCorrect: true
            }
        ]
    },
    {
        image: "images/08.gif",
        question: "Who kills the Beast Titan for the first time?",
        options: [
            {
                text: "Eren Yeager",
                isCorrect: false
            },
            {
                text: "Levi Ackerman",
                isCorrect: true
            },
            {
                text: "Mikasa Ackerman",
                isCorrect: false
            },
            {
                text: "Armin Arlert",
                isCorrect: false
            }
        ]
    },
    {
        image: "images/09.jpg",
        question: "What is Historia Reiss's true identity?",
        options: [
            {
                text: "The Queen of Marley",
                isCorrect: false
            },
            {
                text: "The True Heir to the Throne of Eldia",
                isCorrect: true
            },
            {
                text: "A Member of the Survey Corps",
                isCorrect: false
            },
            {
                text: "The Sister of Annie Leonhart",
                isCorrect: false
            }
        ]
    },
    {
        image: "images/10.jpg",
        question: "What secret is hidden in the basement of Eren's house?",
        options: [
            {
                text: "A Map to Paradise",
                isCorrect: false
            },
            {
                text: "Grisha's Diary",
                isCorrect: true
            },
            {
                text: "A Hidden Weapon",
                isCorrect: false
            },
            {
                text: "A Serum to Create Titans",
                isCorrect: false
            }
        ]
    }
]
const app = document.querySelector('.app');
const startBtn = document.querySelector('.start-btn');
const start = document.querySelector('.start-quiz');
const quesAns = document.querySelector('.ques-ans');
const question = document.querySelector('.ques');
const quesImg = document.querySelector('.ques-img');
const optionBtn = document.querySelector('.btn');
const options = document.querySelector('.options');
const nextBtn = document.querySelector('.next-button');
const nextBtnDiv = document.querySelector('.button-div');
const resultSection = document.querySelector('.result-section');
const restartBtn = document.querySelector('.restart');
const scored = document.querySelector('.score');
const trueFan = document.querySelector('.true-fan');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtnDiv.style.display = 'none';
    displayQuestion(currentQuestionIndex,score);
}

function displayQuestion(currentQuestionIndex,score){
        ops = assets[currentQuestionIndex];
        question.innerHTML = ops.question;
        quesImg.setAttribute('src', `${ops.image}`);
        ops.options.forEach((option)=>{
            const button = document.createElement('button');
            button.innerHTML = option.text;
            button.classList.add('btn');
            options.appendChild(button);
            if(option.isCorrect){
                button.dataset.isCorrect = option.isCorrect;
            }
            button.addEventListener('click', optionSelection);
        })

       
}

function optionSelection(e){
    Array.from(options.children).forEach((option) =>{
        if(option.dataset.isCorrect === 'true'){
            option.classList.add('correct');
        }
        option.disabled = true;

    });
    nextBtnDiv.style.display = 'block';
    if (e.target.dataset.isCorrect){
        score+=1;
    }
    else{
        e.target.classList.add('wrong');
    }
}

nextBtn.addEventListener('click',()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < assets.length){
        resetQuestions();
        displayQuestion(currentQuestionIndex,score);
    }else{
        scored.innerHTML = `Your score is ${score}/10`
        if(score === 10){
            trueFan.style.display = 'block';
        }
        quesAns.style.display = 'none';
        resultSection.style.display = 'block';
        restartBtn.classList.add('.next-button');
    }
})

restartBtn.addEventListener('click', ()=>{
    document.body.style.backgroundImage = 'url("images/mikasa.gif")';
    start.style.display = 'block';
    trueFan.style.display = 'none';
    resultSection.style.display = 'none';
    resetQuestions();
});

function resetQuestions(){
    nextBtnDiv.style.display = 'none';
    while(options.firstChild){
        options.removeChild(options.firstChild);
    }
}

startBtn.addEventListener('click',()=>{
    document.body.style.backgroundImage = 'url("images/aot.jpg")';
    start.style.display  = 'none';
    quesAns.style.display = 'block';
    startQuiz();
})

