//crystals collector game

//on clicking any of the 4 gems, that gem's assigned value will be pushed
//to totalScore, click again and that value is added to whatever current 
//totalScore is (+=)

//if totalScore > randomNumber, loss++ and generate new randomNumber and new gem values
//if totalScore = randomNumber, win++ and generate new randomNumber and new gem values

$(document).ready(function(){

//click events
// window.onload = function () {

var randomNumber;
var gemRandom1;
var gemRandom2;
var gemRandom3;
var gemRandom4;

var gameOver = false;

//object
var gems = {

  totalScore: 0,
  win: 0,
  loss: 0,

    // reset: function() {
    //   gameOver = false;
    //   $("#totalScore").empty();
    // }

    //render function generates random number AND assigns random value to all elements with class gem-img
    render: function() {
    //range from 19-120
      randomNumber = Math.floor(Math.random() * 102) + 19;
      $("#random-number").html(randomNumber);
      console.log(randomNumber);
      gemRandom1 = Math.floor(Math.random() * 12) + 1;
      gemRandom2 = Math.floor(Math.random() * 12) + 1;
      gemRandom3 = Math.floor(Math.random() * 12) + 1;
      gemRandom4 = Math.floor(Math.random() * 12) + 1;
        $("#gem1").attr("gem-value1", gemRandom1);
        $("#gem2").attr("gem-value2", gemRandom2);
        $("#gem3").attr("gem-value3", gemRandom3);
        $("#gem4").attr("gem-value4", gemRandom4);
      console.log(gemRandom1);
      console.log(gemRandom2);
      console.log(gemRandom3);
      console.log(gemRandom4);
    },

    winLoss: function() {
      if (totalScore === randomNumber) {
      	gameOver = true;
        gems.win++;
        $("#win").html(gems.win);
        $(this).reset();
      }
      if (totalScore > randomNumber) {
      	gameOver = true;
        gems.loss++;
        $("#loss").html(gems.loss);
        $(this).reset();
      }
    },

//function where total score has gemRandom added to it needs to be somewhere

    add: function() {
      $("#gem1").on("click", function() {
        $("#total-score").text($(this).attr("gem-value1"));
      })
      $("#gem2").on("click", function() {
        $("#total-score").text($(this).attr("gem-value2"));
      })
      $("#gem3").on("click", function() {
        $("#total-score").text($(this).attr("gem-value3"));
      })
      $("#gem4").on("click", function() {
        $("#total-score").text($(this).attr("gem-value4"));
      })
    }
} //end gems object

  gems.render();
  gems.add();

});
