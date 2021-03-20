// Constant Variables - data that never changes
const BASE_URL = 'https://opentdb.com/api.php?amount=12&category=12&type=multiple';

// State Variables - data that changes
let questions;
// Cached Element References - parts of the dom that get touched
const $questions = $('#questions');
// Event Listenters - capture and respond to events i.e. user clicks

// Functions
init();

function init() {
    getData();
}

function getData() {
    $.ajax(BASE_URL)
        .then(function (data){
            questions = data.results;
            console.log(questions)
            render();
        }, function (error) {
            console.log(error);
        });
}


function render() {
    const html = questions.map(function (question) {
        console.log(questions)
        return `
        <article class='card'>
            <h1>${question.question}</h1>
            <p>${`<button id='multChoice' class='incorrectAnswer'>a). </button>`+question.incorrect_answers[0]}</p>
            <p>${`<button id='multChoice' class='incorrectAnswer'>b). </button>` +question.incorrect_answers[1]}</p>
            <p>${`<button id='multChoice' class='incorrectAnswer'>c). </button>`+question.incorrect_answers[2]}</p>
            <p>${`<button id='multChoice' class='correctAnswer'>d). </button>`+question.correct_answer}</p>
        </article>        
        `;
    });
    $questions.append(html);
}