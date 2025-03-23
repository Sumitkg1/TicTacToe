let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgamebtn=document.querySelector('#newbtn'); 
let msgcontainer=document.querySelector('.msgcont');
let msg= document.querySelector('#msg');

let turn0 = true; // player X player O

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame= () =>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){//player0
            box.innerText="O";
            turn0=false;
        }
        else{//player X
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });

});
const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (Winner) =>{
    msg.innerText=`Congratulations,Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner= ()=>{
    for(let pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val!= "" && pos3val !=""){
            if(pos1val ===pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};
const resetGame =()=>{
    turn0=true;
    
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

