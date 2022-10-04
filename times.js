const num1 =  Math.ceil(Math.random() * 12);
const num2 =  Math.ceil(Math.random() * 12);

const ask = document.getElementById("question");

let score = 0;

ask.innerText = 'What is ' + num1 + " Multiply by "  + num2 + "?";
const correctans = num1 * num2;

const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", ()=> {
    const useranswer = input.value
    if(useranswer === correctans){
        score++
        console.log(score)
    }else{
        score--
        console.log(score)
    }
})

function localStore({
    localStorage,setItem("score", JSON.stringify(score))
})