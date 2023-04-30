
const button = document.getElementById("button");

let Dice1 = 1;
let Dice2 = 1;
let DiceTotal = (Dice1 + Dice2);

button.onclick = function(){
    Dice1 = Math.floor(Math.random() * 6) + 1;
    Dice2 = Math.floor(Math.random() * 6) + 1;
    DiceTotal = Dice1 + Dice2;

    document.getElementById("Dice1").innerHTML = ("Dice 1: " + Dice1);
    document.getElementById("Dice2").innerHTML = ("Dice 2: " + Dice2);
    document.getElementById("DiceTotal").innerHTML = ("Total: " + DiceTotal);
}