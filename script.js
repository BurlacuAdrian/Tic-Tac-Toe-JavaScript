let btn = document.getElementsByClassName('square')

let emptySquares
let moves

function reset(){
    emptySquares=[1,1,1,1,1,1,1,1,1]//true if EMPTY
    moves=9
    for(let i =0;i<=8;i++)
        btn[i].innerText=''
        document.getElementById('popUp').classList.remove('message')
}

reset()


let buttons = [...btn]

function player(id){
    if(emptySquares[id.charAt(1)]==1)
        playerMove(id)
        
}

function playerMove(id){
    let currentItem=document.getElementById(id)
    currentItem.innerHTML='X'
    emptySquares[currentItem.id.charAt(1)]=0;
    moves--;

    if(moves>0)
        opponentMove();
}

function opponentMove(){
    let random = Math.floor(Math.random()*9)
    if(emptySquares[random]==0)
        opponentMove()
    else{
        document.getElementById('s'+random).innerText='0'
        emptySquares[random]=0
        moves--
        testWin()
    }
    
    
}

function testWin(){
    let popUp=document.getElementById('popUp')
    //horizontal
    let i
    for(i=0;i<=2;i+=3)
        if(btn[i].innerText!=''&&btn[i].innerText==btn[i+1].innerText&&btn[i].innerText==btn[i+2].innerText){
            
            popUp.classList.add('message')
            popUp.innerText=btn[i].innerText+' won!'
 
            return
        }

    //vertical
    for(i=0;i<=2;i++)
    if(btn[i].innerText!=''&&btn[i].innerText==btn[i+3].innerText&&btn[i].innerText==btn[i+6].innerText){
        popUp.classList.add('message')
        popUp.innerText=btn[i].innerText+' won!'


            return
    }

    //diagonal
    if(btn[2].innerText!=''&&btn[2].innerText==btn[4].innerText&&btn[4].innerText==btn[6].innerText){
        
        popUp.classList.add('message')
        popUp.innerText=btn[2].innerText+' won!'


            return

    }

    if(btn[0].innerText!=''&&btn[0].innerText==btn[4].innerText&&btn[4].innerText==btn[8].innerText){
        
        popUp.classList.add('message')
        popUp.innerText=btn[0].innerText+' won!'

            return
    }

    
    
}

