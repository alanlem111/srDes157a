(function(){

    "using script";
    console.log('reading js');


    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const score_1 = document.querySelector('#score_1');
    const score_2 = document.querySelector('#score_2');
    const actionArea = document.querySelector('#actions');
    //sounds
    const winningSound = new Audio("sounds/winning.mp3")
    const diceSound = new Audio("sounds/diceSound.mp3");



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
        //random number
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = `<h2>The Game Has Started</h2>`;
        gameControl.innerHTML += `<button id="quit">Wanna Quit?</button>`;

        document.getElementById(`quit`).addEventListener(`click`, function(){
            location.reload();
        });
        setUpTurn();



        // function for when the turn switches
        function setUpTurn() {
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]} : </p>`;
            actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
            document.getElementById("roll").addEventListener("click", function () {
                throwDice();
            });
        }


        //throwing the dice
        function throwDice(){
            actionArea.innerHTML = ``;
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;
            game.innerHTML = `<p>Roll Dice for ${gameData.players[gameData.index]}</p>`;
            game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"><img src="${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            //dice sound
            diceSound.play();


            //checking for snake eyes
            if(gameData.rollSum === 2){
                game.innerHTML += `<p>Oh snap! Snake eyes!</p>`;
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1); //0 is false, any other num is true
                showCurrentScore();
                setTimeout(setUpTurn, 3000);
    
            } 
            // checking if one of the dice is a one
            else if(gameData.roll1 === 1 || gameData.roll2 === 1){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                game.innerHTML += `<p>You rolled a one <br> switching to ${gameData.players[gameData.index]}</p>`;
                setTimeout(setUpTurn, 3000);

            } else {
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = `<button id="rollagain">Roll again</button> <button id="pass">Pass</button>`;
                document.getElementById(`rollagain`).addEventListener(`click`, function(){
                    setUpTurn();
                    
                });

                document.getElementById(`pass`).addEventListener(`click`, function(){
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                    
                });

                checkWinningCondition();
            }
        }   //end throw dice function


        //checking for winning condition
        function checkWinningCondition(){
            if(gameData.score[gameData.index] > gameData.gameEnd){
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

                actionArea.innerHTML = ``;
                document.getElementById(`quit`).innerHTML = `Start a New Game?`;

                //play winning sound if someone wins
                winningSound.play();

                //remove the scores
                score_1.innerHTML = `0`;
                score_2.innerHTML = `0`
            

            } else{
                //show current score
                showCurrentScore();
                

            }
        }


        //show the current score of each players from score
        function showCurrentScore(){
            score_1.innerHTML = `${gameData.score[0]} `;
            score_2.innerHTML = `${gameData.score[1]}`;
        }

        


        
    

//end start game
});


    



    







//end function
})();