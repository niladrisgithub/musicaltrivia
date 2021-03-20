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
            questions = data;
            render();
        }, function (error) {
            console.log(error);
        });
}


function render() {
    const html = questions.map(function(question){
        return `
        <article class='card'>
            <h1>${question.results.question}</h1>
            <p>${question.response_code.results.incorrect_answers}</p>
            <p>${question.response_code.results.correct_answers}</p>
        </article>        
        `;
    });
    $questions.append(html);
}