// Constant Variables - data that never changes
const BASE_URL = 'https://opentdb.com/api.php?amount=9&category=12&type=multiple';

// State Variables - data that changes
let questions;
// Cached Element References - parts of the dom that get touched
const $questions = $('#questions');

// DOM Elements
const $incorrectAnswer = $('.incorrectAnswer');
const $correctAnswer = $('.correctAnswer');
const $button = $('button');

// Event Listenters - capture and respond to events i.e. user click


// Functions
init();

function init() {
    getData();
}

function getData() {
    $.ajax(BASE_URL)
        .then(function (data) {
            questions = data.results;
            render();
        }, function (error) {
            console.log(error);
        });
}


function render() {
    const html = questions.map(function (question) {
        return `
        <article class='card'>
            <h1>${question.question}</h1>
            <br>
            <p>${`<button id='multChoice' class='incorrectAnswer' onclick="alert('Nice try, but give that question another go.')">a).</button>`+question.incorrect_answers[0]}</p>
            <p>${`<button id='multChoice' class='incorrectAnswer' onclick="alert('Nice try, but give that question another go.')">b).</button>` +question.incorrect_answers[1]}</p>
            <p>${`<button id='multChoice' class='incorrectAnswer' onclick="alert('Nice try, but give that question another go.')">c).</button>`+question.incorrect_answers[2]}</p>
            <p>${`<button id='multChoice' class='correctAnswer' onclick="alert('Good work, you got it! Try out another question!')">d).</button>`+question.correct_answer}</p>
        </article>        
        `;
    });
    $questions.append(html);
}


