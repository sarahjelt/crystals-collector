//crystals collector game

//random number between 1-12 will be assigned to each crystal

//on clicking any of the 4 gems, that gem's assigned value will be pushed
//to totalScore, click again and that value is added to whatever current 
//totalScore is (+=)

//if totalScore > randomNumber, loss++ and generate new randomNumber and new gem values
//if totalScore = randomNumber, win++ and generate new randomNumber and new gem values

$(document).ready(function(){

//click events
window.onload = function () {
  $(".gem-img").on("click", gems.add);
}

var randomNumber;
var gemRandom;

var gameOver = false;

//object
var gems = {

  totalScore: 0,
  win: 0,
  loss: 0,

    //render function generates random number AND assigns random value to all elements with class gem-img
    render: function() {
    //range from 19-120
      randomNumber = Math.floor(Math.random() * 102) + 19;
      $("#random-number").html(randomNumber);
      console.log(randomNumber);
      gemRandom = Math.floor(Math.random() * 12) + 1;
/*ERROR*/      $(".gem-img").attr("gem-value", gemRandom);
      console.log(gemRandom);
    },

    winLoss: function() {
      if (totalScore === randomNumber) {
      	gameOver = true;
        gems.win++;
        $("#win").html(gems.win);
      }
      if (totalScore > randomNumber) {
      	gameOver = true;
        gems.loss++;
        $("#loss").html(gems.loss);
      }
    },

    // assign: function() {
    //   gemRandom = Math.floor(Math.random() * 12) + 1;
    //   console.log(gemRandom);
    //   $(".gem-img").attr(gemRandom);
    // },

//function where total score has gemRandom added to it needs to be somewhere

    add: function() {
      $("#total-score").html($(this).attr("gem-value"));

    }
} //end gems object

/*ERROR*/ gems.render();

});
