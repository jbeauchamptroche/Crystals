$( document ).ready(function(){
    var yourNumber = 0;
    var wins = 0;
    var losses = 0;
    var yourTotalScore = 0;

    var randomNumber = Math.floor(Math.random() * 36 +1);
    $('#generated').html(randomNumber);

    var restart = function () {
        wins = 0;
        losses = 0;
        yourTotalScore = 0;
        //print to screen
        $("#yourTotalScore").html(yourTotalScore);
        $('#wins').html(wins);
        $("#losses").html(losses);
        //generate another random number and print to screen.
        var randomNumber = Math.floor(Math.random() * 36 +1);
        $('#generated').html(randomNumber);
    }

    //grab the reset button with jQuery and then run the function restart on click.
    $('#reset-button').on('click', restart);

     var newYourNumber =  function yourNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
     };

    $("#crystalOne").on("click", function(){
        var randomOnClick = newYourNumber(1 , 12);
        console.log(randomOnClick);
        yourTotalScore = yourTotalScore + randomOnClick;
        $("#yourTotalScore").html(yourTotalScore);

        if (yourTotalScore == randomNumber) {
            wins++;
            $('#wins').html(wins);
        }
        if (yourTotalScore > randomNumber){
            losses++;
            $("#losses").html(losses);
        }

    });

    $("#crystalTwo").on("click", function(){
       var randomOnClick = newYourNumber(1 , 12);
        console.log(randomOnClick);
        yourTotalScore = yourTotalScore + randomOnClick;
        $("#yourTotalScore").html(yourTotalScore);

        if (yourTotalScore == randomNumber) {
            wins++;
            $('#wins').html(wins);
        }
        if (yourTotalScore > randomNumber){
            losses++;
            $("#losses").html(losses);
        }  
    });

    $("#crystalThree").on("click", function(){
      var randomOnClick = newYourNumber(1 , 12);
        console.log(randomOnClick);
        yourTotalScore = yourTotalScore + randomOnClick;
        $("#yourTotalScore").html(yourTotalScore);

        if (yourTotalScore == randomNumber) {
            wins++;
            $('#wins').html(wins);
        }
        if (yourTotalScore > randomNumber){
            losses++;
            $("#losses").html(losses);
        }  
    });

    $("#crystalFour").on("click", function(){
      var randomOnClick = newYourNumber(1 , 12);
        console.log(randomOnClick);
        yourTotalScore = yourTotalScore + randomOnClick;
        $("#yourTotalScore").html(yourTotalScore);

        if (yourTotalScore == randomNumber) {
            wins++;
            $('#wins').html(wins);
        }
        if (yourTotalScore > randomNumber){
            losses++;
            $("#losses").html(losses);
        }
    });

});