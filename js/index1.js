'use strict';

function bearType() {
  var bear = prompt("Please enter the bear name you want to ask about");
  
  if(bear != null){
    document.write("please reload the page and type the bear you want ");
  }


  var bearType;
  var asian = "asian";
  var russian  = "russian";
  if (bear === asian) {
    bearType = 'Correct answer ';
  } else if (bear === russian) {
    bearType = 'worng answer! ';
  }
  document.write('<h3>' + bearType + '</h3>');
}

bearType();



