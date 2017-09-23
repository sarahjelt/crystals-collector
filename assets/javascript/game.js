//crystals collector game

$(document).ready(function(){

  var gemone;
  var gemtwo;
  var gemthree;
  var gemfour;
  var boo;

//click events -- puts total in id total-score and checks for win or loss
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

    //generates random number and assigns random value to all gems
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
    }

} //end gems object

  gems.render();
  gems.reset();
  clicko();
  gems.winLoss();

});
