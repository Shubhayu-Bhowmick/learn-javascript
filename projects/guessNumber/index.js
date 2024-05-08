const randomNum = parseInt(Math.random()*10+1);
console.log(randomNum);

const inputNum = document.querySelector("#num");
const subbtn = document.querySelector("#sub-btn");
const form =  document.querySelector("#num-form");
const prevGuess = document.querySelector("#prev-num");
let check = true;
let display = document.querySelector("#display");

let tries = 5;

prevGuess.innerHTML = tries;
display.innerHTML = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let num = inputNum.value;


    if(tries>0){
        if(validNumber(num)){
           checkNum(num);
        }
    }
    else{
        display.innerHTML = 'Game Over!'
    }

})

function validNumber (num) {
    //display.innerHTML = num;
    if(isNaN(num)){
        display.innerHTML = 'Not a Number!';
        return false;
    }
    else if(num==''){
        display.innerHTML = 'Please enter a number';
        return false;
    }
    else{
        //display.innerHTML = num;
        return true;
    }
}

function checkNum(num) {
    tries -= 1;
    inputNum.value = '';
    prevGuess.innerHTML = tries;

    if(num<randomNum){
        display.innerHTML = 'Your guess is a bit low';
    }
    else if(num>randomNum){
        display.innerHTML = 'Your guess is a bit high';
    }
    else if(num==randomNum){
        display.innerHTML = 'Your guessed it right!';
    }
}
