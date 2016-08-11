'use strict';
var counter,
    guessedNum = [],
    secretNum;

$(document).ready(function(){

  function generateNum() {
    secretNum = Math.floor((Math.random() * 100) + 1);
    counter = 0;
  }

  function newGame() {
    generateNum();
    $('#feedback').text('Make your Guess!');
    $('#count').text(counter);
    $('#userGuess').val('');
    $('#guessList li').remove();
    guessedNum = []
  }

  generateNum();

  /*--- Display information modal box ---*/
  $('.what').click(function(){
  $('.overlay').fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $('a.close').click(function(){
  $('.overlay').fadeOut(1000);
  });
  
  $('.new').click(function(){
    newGame();
  })

  $('#guessButton').on('click',function() {
    function incorrectGuessedNumOperation() {
      counter++;
      $('#guessList').append('<li>' + enteredNum + '</li>');
      $('#count').text(counter);
      guessedNum.push(enteredNum);
  }

    event.preventDefault();
    var enteredNum = $('#userGuess').val(),
    enteredNum = +enteredNum;
    if (isNaN(parseInt(enteredNum)) || enteredNum % 1 != 0 || enteredNum > 100 || enteredNum <= 0) {
      $('#feedback').text('Please guess a number from 1-100');
    } else if (guessedNum.indexOf(enteredNum) >= 0) {
	$('#feedback').text('That number was already guess before.');
    } else if (enteredNum === secretNum) {
	$('#feedback').text('Correct!');
    } else if (enteredNum >= secretNum - 10 && enteredNum <= secretNum + 10) {
	$('#feedback').text('Very Hot!');
	incorrectGuessedNumOperation();
    } else if (enteredNum >= secretNum - 20 && enteredNum <= secretNum + 20) {
	$('#feedback').text('Hot!');
	incorrectGuessedNumOperation();
    } else if (enteredNum >= secretNum - 30 && enteredNum <= secretNum + 30) {
	$('#feedback').text('Getting Warm!');
	incorrectGuessedNumOperation();
    } else {
	$('#feedback').text('Cold!');
	incorrectGuessedNumOperation();
    }
  });
});
