// function to get the random number as dice roll
const rollDice = () => {

    let dice = []; // array to store the dice values
    dice[0] = Math.floor(Math.random() * 6) + 1; // first dice roll
    dice[1] = Math.floor(Math.random() * 6) + 1; // second dice roll

    dice[0] = "images/dice_" + dice[0] + ".png";
    dice[1] = "images/dice_" + dice[1] + ".png";
    console.log(dice);
    return dice; // return the image src according to the dice values
}

let gameRule = (dice) => {

    if (dice[0] === dice[1]) {
        return true;
    }
    else {
        return false;
    }
}

let scoreRule = (dice) => {

        if (dice[0] === 1 && dice[1] === 1) {
            return 0;
        } else {
            return dice[0] + dice[1];
        }
}

export { rollDice, gameRule, scoreRule };