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
        image: "",
        question: "What is the name of the island where most of the story takes place?",
        options: [
            {
                text: "Marley",
                isCorrect: false
            },
            {
                text: "Paradise",
                isCorrect: false
            },
            {
                text: "Paradise Island",
                isCorrect: false
            },
            {
                text: "Paradis Island",
                isCorrect: true
            }
        ]
    },
    {
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
        question: "What event triggers Eren's transformation into a Titan for the first time?",
        options: [
            {
                text: "His Mother's Death",
                isCorrect: true
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
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
const app = document.querySelector('app');
const startBtn = document.querySelector('.start-btn');
const start = document.querySelector('.start-quiz');
const quesAns = document.querySelector('.ques-ans');
const question = document.querySelector('.ques');
const quesImg = document.querySelector('.ques-img');
const optionBtn = document.querySelector('.btn');
const options = document.querySelector('.options');
const nextBtn = document.querySelector('.next-button');
const nextBtnDiv = document.querySelector('.button-div');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    nextBtnDiv.style.display = 'none';
    displayQuestion(currentQuestionIndex,score);
}

function displayQuestion(currentQuestionIndex,score){
        ops = assets[currentQuestionIndex];
        question.innerHTML = ops.question;

        ops.options.forEach((option)=>{
            const button = document.createElement('button');
            button.innerHTML = option.text;
            button.classList.add('btn');
            options.appendChild(button);
        })
}


nextBtn.addEventListener('click',()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < assets.length){
        resetQuestions();
    }else{
        app.style.display = 'none';
        resultScreen.style.display = 'block';
        restartButton.style.display = 'block';
    }
})

// restartBtn.addEventListener('click',()=>){
//     startQuiz();
//     app.style.display = 'block';
//     resultScreen.style.display = 'none';
//     restartButton.style.display = 'none';
// }

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

