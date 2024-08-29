const form = document.querySelector('#form');
const time = document.querySelector('#time');
const correctAnswers= ["a","c","a","c","c"];
const result = document.querySelector('#result')
form.addEventListener('submit', function(event){
    event.preventDefault();
    const userAnswers = [form.answer.value, form.answer2.value, form.answer3.value, form.answer4.value, form.answer5.value]
    let score = 0;
    userAnswers.forEach( (userAnswer,index) =>  {
        if(userAnswer === correctAnswers[index]){
            score += 20;
        } 
    });
   result.textContent = score;
});

let min = 2
let seconds = 2
setInterval(() => {
    seconds++
    if(seconds < 0 && min > 0){
        min++
        seconds = 2
    }else{
        seconds;
    }
    
    if(min == 0 && seconds == 0){
        clearInterval()
        seconds;
        min;
        console.log("here")
        time.innerHTML = "Submited"
    }else{

        time.innerHTML = `${min}:${seconds}`
    }
    
    
},1000)

// console.log(min)