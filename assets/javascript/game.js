//crystals collector game

//on clicking any of the 4 gems, that gem's assigned value will be pushed
//to totalScore, click again and that value is added to whatever current 
//totalScore is (+=)

//if totalScore > randomNumber, loss++ and generate new randomNumber and new gem values
//if totalScore = randomNumber, win++ and generate new randomNumber and new gem values

$(document).ready(function(){

  var gemone;
  var gemtwo;
  var gemthree;
  var gemfour;

  var boo;

//click events -- puts total in id total-score
var clicko = function() {
  boo = 0;
      $("#gem1").on("click", function() {
        gemone = ($(this).attr("gem-value1"));
        gemone = parseInt(gemone);
        boo += gemone;
        $("#total-score").text(boo);
        gems.winLoss();
      })
      $("#gem2").on("click", function() {
        gemtwo = ($(this).attr("gem-value2"));
        gemtwo = parseInt(gemtwo);
        boo += gemtwo;
        $("#total-score").text(boo);
        gems.winLoss();
      })
      $("#gem3").on("click", function() {
        gemthree = ($(this).attr("gem-value3"));
        gemthree = parseInt(gemthree);
        boo += gemthree;
        $("#total-score").text(boo);
        gems.winLoss();
      })
      $("#gem4").on("click", function() {
        gemfour = ($(this).attr("gem-value4"));
        gemfour = parseInt(gemfour);
        boo += gemfour;
        $("#total-score").text(boo);
        gems.winLoss();
      })
    }

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

    reset: function() {
      gameOver = false;
      boo = 0;
      $("#total-score").empty();
    },

    //generates random number AND assigns random value to all gems
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

//function where total score has gemRandom added to it needs to be somewhere

//runs when you win or lose
    winLoss: function() {
      if (boo === randomNumber) {
        gameOver = true;
        gems.win++;
        $("#win").text(gems.win);
        console.log("winner");
        $("#status").text("WINNER!");
        gems.reset();
        gems.render();
      }
      if (boo > randomNumber) {
        gameOver = true;
        gems.loss++;
        $("#loss").text(gems.loss);
        console.log("loser");
        $("#status").text("LOSER!");
        gems.reset();
        gems.render();
      }
    },

    add: function() {
      totalScore = parseInt($("#total-score"));
    }

} //end gems object

  gems.render();
  gems.reset();
  // gems.add();
  clicko();
  gems.winLoss();

});
