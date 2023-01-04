// This is the question funstions that contain questions and the answers. They are in multidimensional array with inner array elements
var questions = [
    { 
        question: "Сколько нужно угадать событий в ТОТО 15, чтобы купон выйграл?", 
        answers: [
            { text: "9 из 14", correct: false },
            { text: "9 из 15" , correct: true },
            { text: "4 из 9", correct: false },
            { text: "8 из 14", correct: false }
        ],
        explanation: "Для того чтобы тото 15 выграл нужно угадать 9 из 15",
    },
    { 
        question: "Сколько нужно угадать событий в ТОТО ТС, чтобы купон выйграл?", 
        answers: [
            { text: "4 из 8", correct: false },
            { text: "2 из 9", correct: false },
            { text: "2 из 8", correct: true },
            { text: "9 из 15", correct: false }
        ],
        explanation: "Для того чтобы тото тс выграл нужно угадать 2 из 8",
    },
    { 
        question: "Сколько нужно угадать событий в ТОТО Футбол, чтобы купон выйграл?", 
        answers: [
            { text: "9 из 14", correct: true },
            { text: "8 из 8", correct: false },
            { text: "4 из 8", correct: false },
            { text: "6 из 12", correct: false }
        ],
        explanation: "Для того чтобы тото футбол выграл нужно угадать 9 из 14",
    },
    { 
        question: "Сколько нужно угадать событий в ТОТО ТС, чтобы выйграть джекпот?", 
        answers: [
            { text: "7 из 12", correct: false },
            { text: "8 из 8", correct: true },
            { text: "4 из 8", correct: false },
            { text: "9 из 15", correct: false }
        ],
        explanation: "Для того чтобы выйграть джекпот в тото тс нужно угадать 8 из 8 ",
    },
    { 
        question: "Сколько матчей входит в ТОТО Хокей ?",
        answers: [
            { text: "7", correct: false },
            { text: "12", correct: false },
            { text: "8", correct: false },
            { text: "5", correct: true }
        ],
        explanation: "В тото хокей 5 матчей",
    },
];