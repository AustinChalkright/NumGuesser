const fs = require("fs");
const is_number = require("is-number");
let compNum = Math.floor(Math.random() * 5) + 1;
let playerNum = 2;
let playerScore
if(fs.existsSync('./PlayersScore.txt')){
    playerScore = parseInt(fs.readFileSync('./PlayerScore.txt', {encoding:'utf8', flag:'r'}));}
    else { playerScore = 0;};
if(is_number(playerNum)) {
    switch(playerNum){
        case compNum:
            playerScore+=2
            break;
        case compNum -1:
        case compNum +1:
            playerScore++;
            break;
        default:
            break;
};
fs.writeFileSync('./PlayerScore.txt', ""+playerScore+"");
console.log(`Computer Number: ${compNum}`);
console.log(`Players Number ${playerNum}`);
console.log(`Players Score ${playerScore}`);
};