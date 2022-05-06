const fs = require("fs");
const is_number = require("is-number");
const readline = require("readline");

function playAgain(query) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	return new Promise((resolve) =>
		rl.question(query, (ans) => {
			rl.close();
			resolve(ans);
		})
	);
}

let compNum;
let playerNum; 
let playerScore;
let goAgain;
async function guesser(){
    for (i= 0; i != 1;){
    compNum = Math.floor(Math.random() * 5) + 1;
    for (j = 0; j != 1; ) {
    playerNum = Math.floor(await playAgain("Give me a number: "));
    if (is_number(playerNum) && playerNum > 0 && playerNum < 7) {
        j =1
    }
}
if(fs.existsSync('./PlayersScore.txt')){
    playerScore = parseInt(fs.readFileSync('./PlayerScore.txt', {encoding:'utf8', flag:'r'}));}
    else { playerScore = 0;}

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
}

fs.writeFileSync('./PlayerScore.txt', "" + playerScore + "");
console.log(`Computer Number: ${compNum}`);
console.log(`Players Number ${playerNum}`);
console.log(`Players Score ${playerScore}`);
for (j = 0; j != 1;) {
    goAgain = await playAgain("Continue? (y/n)");
    if (goAgain === "n"){
        i = 1;
        j = 1;
    } else if (goAgain === "y") {
        i = 0
        j = 1;
    } else {
        goAgain = null;
    }
}
}
} 
guesser();