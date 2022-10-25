let btn = document.getElementsByClassName('square')

let emptySquares=[1,1,1,1,1,1,1,1]

// console.log(buttons[1].innerHTML)

let buttons = [...btn]//LOOK INTO THIS collection of html or whatever to array

// buttons.forEach(element => {
//     console.log(element.innerHTML)
//     element.addEventListener('click', playerMove())
//     console.log(element.id)
// })

function playerMove(id){
    let currentItem=document.getElementById(id)
    currentItem.innerHTML='X'
    emptySquares[currentItem.id.charAt(1)]=0;

    // let test=''
    // emptySquares.forEach(element => {
    //         test+=element;
    // })
    // console.log(test)

    opponentMove();
}

function opponentMove(){
    let random = Math.floor(Math.random()*9)
    if(emptySquares[random]==0)
        opponentMove()
    else{
        document.getElementById('s'+random).innerText='0'
        emptySquares[random]=0
    }
    
}

