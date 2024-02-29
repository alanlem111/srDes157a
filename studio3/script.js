(function(){

    "using script";
    console.log('reading js');


    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const dice = document.getElementById("dice");



    let gameData = {
        dice: [
            "images/dice1.png",
            "images/dice2.png",
            "images/dice3.png",
            "images/dice4.png",
            "images/dice5.png",
            "images/dice6.png",
        ],
        players: ["player 1", "player 2"],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29,
    };



    startGame.addEventListener(`click`, function(){
        gameData.index = Math.round(Math.random());
        //console.log(gameData.index);

        gameControl.innerHTML = `<h2>The Game Has Started</h2>`;
        gameControl.innerHTML += `<button id="quit">Wanna Quit?</button>`;

        document.getElementById(`quit`).addEventListener(`click`, function(){
            location.reload();
        });
        setUpTurn();



        // function for when the turn switches
        function setUpTurn() {
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
            document.getElementById("roll").addEventListener("click", function () {
                throwDice();
            });
        }


        //throwing the dice
        function throwDice() {
            actionArea.innerHTML = "";

            // roll the dice
            actionArea.innerHTML = ``;
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;

            game.innerHTML = `<p>Roll the Dice for ${gameData.players[gameData.index]}</p>`;
            game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"><img src="${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;




            //game function
            
        }




        




//end start game
});


    



    







//end function
})();