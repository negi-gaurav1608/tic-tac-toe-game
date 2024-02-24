let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");

let newgame=document.querySelector("#new_game");
let msgcontainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");

let turnO = false;


const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];


boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        //console.log("click");
        
        if(turnO){
            box.innerText="O";
            
        }
        else{
            box.innerText="X";
            
        }
        turnO=!turnO;
        box.disabled=true;

        checkWinner();
    });
});

const disable_button=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};


const showwinner=(winner)=>{
    msg.innerText=`congratulation , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable_button();
};

const checkWinner=()=>{
    for(let pattern of winpattern){
        
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        /*console.log(boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText);*/
        
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                //alert(`player ${pos1} won the game`);
                showwinner(pos1);
            }
        }
    }
};

const enable_button=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

/*
const reset=()=>{
    turnO=false;
    enable_button();
    msgcontainer.classList.add("hide");
};
*/

newgame.addEventListener("click",()=>{
    turnO=false;
    enable_button();
    msgcontainer.classList.add("hide");
});
resetbtn.addEventListener("click",()=>{
    turnO=false;
    enable_button();
    msgcontainer.classList.add("hide");
});