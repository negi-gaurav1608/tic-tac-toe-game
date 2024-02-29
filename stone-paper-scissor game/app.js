let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msgpara=document.querySelector("#msg");

const getcomp=()=>{
    const options=["rock","paper","scissor"];
    const ind=Math.floor(Math.random()*3);
    return options[ind];
};

const user=document.querySelector("#user");
const comp=document.querySelector("#computer");

const Draw=(userChoice)=>{
    //console.log("game was draw");
    msgpara.innerText=`Game Draw both chooses ${userChoice}`;
    msgpara.style.backgroundColor="blue";
};

const showwinner=(userwin,userChoice,computerchoice)=>{
    if(userwin){
        //console.log("YOU WIN");
        msgpara.innerText=`YOU WIN ${userChoice} beats computer's ${computerchoice}`;
        msgpara.style.backgroundColor="green";
        userscore++;
        user.innerText=userscore;
    }
    else{
        //console.log("Computer Won");
        msgpara.innerText=`Computer won ${computerchoice} beats your ${userChoice}`;
        msgpara.style.backgroundColor="red";
        computerscore++;
        comp.innerText=computerscore;
    }
};

const play=(userChoice)=>{
    console.log("user choice is = ",userChoice);
    //generate computer choice  --> modulation
    const computerchoice=getcomp();
    //console.log("computer choice =",computerchoice);
    
    if(userChoice==computerchoice){
        Draw(userChoice);
    }
    else{
        let userwin=true;
        if(userChoice=="rock"){
            userwin=computerchoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userwin=computerchoice=="scissor"?false:true;
        }
        else{
            userwin=computerchoice=="rock"?false:true;
        }
        showwinner(userwin,userChoice,computerchoice);
    }
};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice clicked",userChoice);
        play(userChoice);
    });
});

const re=document.querySelector(".reset");
re.addEventListener("click",()=>{
    userscore=0;
    computerscore=0;
    user.innerText=0;
    comp.innerText=0;
    msgpara.innerText="Play your move";
    msgpara.style.backgroundColor="#081b31"
});

