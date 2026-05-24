let userScore=0;
let compScore=0;

// modular way of programming 
// we make small function for each small work 
const choices=document.querySelectorAll(".choise");
const msg =document.querySelector("#msg");
const userPoint=document.querySelector("#user-score");
const compPoint=document.querySelector("#comp-score");



choices.forEach((choise)=> {

    choise.addEventListener("click",()=>{
        const userChoice = choise.getAttribute("id");
    // console.dir("choice was clicked ", userChoice);
    playGame(userChoice);

     
    });
}); 


//generate computer choice
 const genComputerChoice=()=>{
        // we have to randomly generate rock , paper , scissors 
        const options=["rock" , "paper" ,"scissors"];
        const randNo= Math.floor(Math.random()*3);
        return options[randNo];
    }


  const drawGame=()=>{
    console.dir("game was draw");
    msg.innerText=" !! It's a Draw !! Both made same move";
     msg.style.backgroundColor="#081b31";
  }

  const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userPoint.innerText=userScore;
        console.dir("you win");
        msg.innerText =`YOU WIN!  ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor ="green";

    } else{
        compScore++;
        compPoint.innerText=compScore;
        console.dir("computer win");
        msg.innerText=`COMPUTER WINS!! ${compChoice} beats your ${userChoice}  `;
        msg.style.backgroundColor="red";
    }
  }

const playGame=(userChoice) => {
    console.dir(  userChoice);               //"user Choice = "
    // ab computer choice ko bulao
    const compChoice = genComputerChoice();
    console.dir(compChoice);          //"comp choice =" ,
    
   // logic for kon jitega game ko

   if(userChoice=== compChoice) {
    drawGame();
   } else{
    let userWin=true;

    if(userChoice==="rock"){

        //computer ki choice scissors ya paper ho sakti agar rock hogi to draw ho jaega
        userWin= compChoice==="paper"?false:true;  // matlb agar computer choice paper hai to userWin ko false karo agar nhi hai to true 


    }else if(userChoice==="paper") {
        //computer ki choice hogi ya to rock nhi to scissors 
      userWin = compChoice==="scissors"?false:true;
    }else{
        // else me tum condition nhi likh sakte but you know user ke pass scissors hai
        // computer ke pass hai rock ya paper 
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin , userChoice, compChoice );
   }
}

