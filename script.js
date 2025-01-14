let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uscore=document.querySelector('#uscore');
let cscore=document.querySelector('#cscore');

const genCompChoice=()=>{
let options=['rock','paper','scissor'];
const Inx=Math.floor(Math.random(options)*3);
return options[Inx];
}


const showWinner=(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    uscore.innerText=userScore;
    console.log("You Win");
    msg.innerText=`You Win! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor="Green";
  }else{
    compScore++;
    cscore.innerText=compScore;
    console.log("You lose");
    msg.innerText=`You Lose!  ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor="Red";
  }
}

const drawGame=()=>{
  console.log("game draw");
  msg.innerText='Game Draw! Play Again';
  msg.style.backgroundColor="black";
  msg.style.color="white";
}

const playGame=(userChoice)=>{
console.log("user choice=",userChoice);
const compChoice=genCompChoice();
console.log("Computer choice=",compChoice);

if(userChoice===compChoice){
drawGame();
}else{
   let userWin=true;
  if(userChoice==='rock'){
    userWin=compChoice==='paper'?false:true;
  }else if(userChoice==='paper'){
    userWin=compChoice==='rock'?true:false;
  }else if(userChoice==='scissor'){
    userWin=compChoice==='paper'?true:false;
  }
  showWinner(userWin,userChoice,compChoice);
}




  }

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click",()=>{
   const userChoice= choice.getAttribute("id");
playGame(userChoice);

  })
});