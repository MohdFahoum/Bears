'use strict';

function bearType() {
  var bear = prompt("Please enter the bear name you want to ask about (russian or asian)");

  var bearType;
  var asian = 'asian';
  var russian = 'russian';

  while (bear !== 'asian' && bear !== 'russian') {
    bear = prompt("Please enter the bear name you want to ask about (russian or asian)");
  }


  

  var howMany = prompt('please type how many bears you want?')

  for(var i = 1; i <= howMany; i++) {

    if (bear == asian) {
      bear = 'Correct answer ';
    } else if (bear == russian) {
      bear = 'worng answer! ';
    }
    document.write('<h3>' + bear + '</h3>');
  }
}

bearType();



