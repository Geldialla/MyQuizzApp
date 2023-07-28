const quizdata = [
    {
        question: 'How old is Geldi?',
        a: '10',
        b: '18',
        c: '22',
        d: '24',
        correct: 'c'
    },
    {
        question: 'What leanguage its he learning?',
        a: 'Javascript',
        b: 'jAVA',
        c: 'Python',
        d: 'C++',
        correct: 'a'
    },
    {
        question: 'Who is the best game?',
        a: 'CarX Street',
        b: 'PubG',
        c: 'Rust',
        d: 'Uno',
        correct: 'c'
    },
    {
        question: 'What HTML mean?',
        a: 'Hypertext Markup Language',
        b: 'Hover language ',
        c: 'Hard Transitionn language ',
        d: 'Hard Transition Markup Language',
        correct: 'a'
    },
    {
        question: 'What year JavaScript launch?',
        a: '1995',
        b: '1996',
        c: '1997',
        d: 'None of these years',
        correct: 'b'
    }
]

const questionEL = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerEL = document.querySelectorAll('.answer');

const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()


    const currentQuizData = quizdata[currentQuiz]

    questionEL.innerHTML = currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined

    answerEL.forEach(answerEL => {
        if (answerEL.checked) {
            answer = answerEL.id;
        }
    })
    return answer;

}

function deselectAnswers() {

    answerEL.forEach((answerEL) => {
        answerEL.checked = false;
    })
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    console.log(answer);

    if (answer) {
        if (answer === quizdata[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        if (currentQuiz < quizdata.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2> You answered correctly as ${score}/${quizdata.length} questions.<h2>
            
            <button onclick="location.reload()"><span class="material-symbols-outlined">
            restart_alt
            </span></button>`
        }

    }

});