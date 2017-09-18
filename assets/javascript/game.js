//crystals collector game

//pseudocode

//on page load, randomNumber between 19-120 will be generated
//random number between 1-12 will be assigned to each crystal

//on clicking any of the 4 gems, that gem's assigned value will be pushed
//to totalScore, click again and that value is added to whatever current 
//totalScore is (+=)

//if totalScore > randomNumber, loss++ and generate new randomNumber and new gem values
//if totalScore = randomNumber, win++ and generate new randomNumber and new gem values

//id
$(document).ready(function(){

//range from 19-120
var randomNumber = Math.floor(Math.random() * 102) + 19;
var gemRandom = Math.floor(Math.random() * 12) + 1;

var totalScore = 

render();


function assignValue() {
  
}

function render() {
  document.getElementById("random-number").innerHTML = randomNumber;
  console.log(randomNumber);

  document.getElementById("total-score").innerHTML = totalScore;
  console.log(totalScore);

// document.getElementById("win").innerHTML = win;
// document.getElementById("loss").innerHTML = loss;
}

$(".gem-img").on("click", function() {
        var gem = $(".gem-img");
        gem.text($(this).attr(gemRandom));
        $("#gems").append(gem);
      });


});