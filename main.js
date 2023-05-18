
const timerEl=document.getElementById('timer');
const startBtn =document.getElementById('start');
const stopBtn =document.getElementById('stop');
const resetBtn =document.getElementById('reset');

//variables needed
let startTime = 0
let elapsedTime = 0
let timerInterval;



function startTimer(){
//console.log("start")
startTime =Date.now() - elapsedTime;

timerInterval = setInterval(() =>{
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
},10)

startBtn.disabled =true;
stopBtn.disabled =false;
}

function formatTime (elapsedTime){
    const miliseconds = Math.floor((elapsedTime % 1000)/10);
    
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 *60));

    const hours = Math.floor(elapsedTime / (1000 * 60 *60));
     return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) :"0") + " :"  +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." +
        (miliseconds > 9 ? miliseconds : "0" + miliseconds)
        );
}


function stopTimer(){
    //console.log("stop")
    clearInterval(timerInterval);
    startBtn.disabled =false;
    stopBtn.disabled =true;
}


function resetTimer(){
    //console.log("reset")
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerEl.textContent = "00:00:00" ;

    startBtn.disabled =false;
    stopBtn.disabled =true;
 }


//Adding eventlistners
 startBtn.addEventListener("click" ,startTimer)
stopBtn.addEventListener("click" ,stopTimer)
resetBtn.addEventListener("click" ,resetTimer)



