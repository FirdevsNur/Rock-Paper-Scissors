let rockOption = document.getElementById("rockOption");
let paperOption = document.getElementById("paperOption");
let scissorsOption = document.getElementById("scissorsOption");
let finalChoice;
let playerChoice = document.getElementById("playerChoice");
let pcChoice = document.getElementById("pcChoice");
let paperimg = "paper.jpg";
let scissorsimg = "scissors.jpg";
let rockimg = "rock.png";
let playerimg = document.getElementById("playerimg");
let pcimg = document.getElementById("pcimg");
let finalResult = document.getElementById("result");
let pcOptions= ["Rock", "Paper", "Scissors"];
let randomNumber;
let finalPcChoice;
let playerScore=0;
let pcScore=0;
let score=document.getElementById("score");
let you=document.getElementById("you");
let pc=document.getElementById("pc");
let i;
function scoree(){
    you.innerHTML="You: "+playerScore;
    pc.innerHTML="Computer: "+pcScore;
}
function animation(){
    pcimg.src= rockimg;
    playerimg.src = rockimg;
    playerChoice.classList.add("active");
    pcChoice.classList.add("active");
        setTimeout (function(){
            playerChoice.classList.remove("active");
            pcChoice.classList.remove("active");
        },600)
        setTimeout (function(){
            playerChoice.classList.add("active");
            pcChoice.classList.add("active");
        },1200)
        setTimeout (function(){
            playerChoice.classList.remove("active");
            pcChoice.classList.remove("active");
        },1800)
        setTimeout (function(){
            playerChoice.classList.add("active");
            pcChoice.classList.add("active");
        },2400)
        setTimeout (function(){
            playerChoice.classList.remove("active");
            pcChoice.classList.remove("active");
        },3000)
}
function pcOption(index){
    switch(index){
        case "Rock":
            pcimg.src= rockimg;
        break;
        case "Paper":
            pcimg.src= paperimg;
        break;
        case "Scissors":
            pcimg.src = scissorsimg;
        break;
    }   
}
function result(a,b){
    if(a===b){
        finalResult.innerHTML="It's a Tie!";
        finalResult.style.color="Black";
    }else if(a==="Paper" && b==="Rock" || a==="Rock" && b==="Scissors" || a==="Scissors" && b==="Paper"){
        finalResult.style.color="Green";
        finalResult.innerHTML="You Win!!";
        playerScore++;
    }else{
        finalResult.style.color="Red";
        finalResult.innerHTML="You Lose!!";
        pcScore++;
    }
}
function pcRandom(){
    randomNumber = Number(Math.floor(Math.random() * 3));
}
function optionClick(option,imgSrc){
    rockOption.classList.remove("active");
    paperOption.classList.remove("active");
    scissorsOption.classList.remove("active");
    option.classList.add("active");
    setTimeout(function(){
       playerimg.src = imgSrc; 
    },3000)
}
rockOption.addEventListener("click", () => {
    animation();
    optionClick(rockOption, "rock.png");
    setTimeout(function(){
        finalChoice = "Rock";
        pcRandom();
        finalPcChoice=pcOptions[randomNumber]
        pcOption(finalPcChoice);
        result(finalChoice,finalPcChoice);
        scoree();
        scoreColor()
    },3000)
    
})
paperOption.addEventListener("click", () => {
    animation()
    optionClick(paperOption, "paper.jpg");
    setTimeout(function(){
        finalChoice = "Paper";
        pcRandom();
        finalPcChoice=pcOptions[randomNumber]
        pcOption(finalPcChoice);
        result(finalChoice,finalPcChoice);
        scoree();
        scoreColor()
    },3000)   
})
scissorsOption.addEventListener("click", () => {
    animation()
    optionClick(scissorsOption, "scissors.jpg");
    setTimeout(function(){
        playerimg.src = scissorsimg;
        finalChoice = "Scissors";
        pcRandom();
        finalPcChoice=pcOptions[randomNumber]
        pcOption(finalPcChoice);
        result(finalChoice,finalPcChoice);
        scoree();
        scoreColor()
    },3000)
})
function scoreColor(){
    if(playerScore>pcScore){
        you.style.color="Green";
        pc.style.color="Red";
    }else if(playerScore<pcScore){
        you.style.color="Red";
        pc.style.color="Green";
    }else{
        you.style.color="Yellow";
        pc.style.color="Yellow";
    }
}


