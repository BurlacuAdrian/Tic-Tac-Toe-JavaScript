let btn = document.getElementsByClassName('square')

let emptySquares
let moves

let cooldown=0

const RESTART_DELAY=1200;//miliseconds , meaning seconds*1000

let xCount=0,oCount=0

function reset(){//called by the popUp
    // document.getElementById('popUp').classList.remove('message')

    emptySquares=[1,1,1,1,1,1,1,1,1]//true if EMPTY
    moves=9
    for(let i =0;i<=8;i++)
        btn[i].innerText=''
    }


function clearGame(){
    reset()
    // document.getElementById('popUp').classList.add('hidden')
    xCount=oCount=0
    document.getElementById('xCount').innerText=0
    document.getElementById('oCount').innerText=0
}

reset()


let buttons = [...btn]

function player(id){

    if(cooldown==1)
        return
        
    if(emptySquares[id.charAt(1)]==1)
        playerMove(id)
        
}

function resetCooldown(){
    cooldown=0
}

function playerMove(id){
    let currentItem=document.getElementById(id)
    currentItem.innerHTML='X'
    emptySquares[currentItem.id.charAt(1)]=0;
    moves--;
    // console.log("player calls")
    if(testWin()!=1)
        if(moves>0)
            opponentMove()
        else{
            popUp.classList.add('message')
            popUp.innerText='Nobody won.'
            cooldown=1;//prevents player from marking while win message is being displayed
         setTimeout( ()=>{reset();resetCooldown();
            document.getElementById('popUp').classList.remove('message')
            }, RESTART_DELAY);
        }
    
}

function findSquare(){
    let random = Math.floor(Math.random()*9)
    while(emptySquares[random]==0)
        random = Math.floor(Math.random()*9);
    return random

}

function opponentMove(){
    let random = findSquare()
        document.getElementById('s'+random).innerText='0'
        emptySquares[random]=0
        moves--
        
    
    // console.log("AI calls")
    testWin()
    
}

function testWin(){
    //horizontal
    let i
    for(i=0;i<=6;i+=3)
        if(btn[i].innerText!=''&&btn[i].innerText==btn[i+1].innerText&&btn[i].innerText==btn[i+2].innerText){
            
            whoWon(i)
 
            return 1
        }

    //vertical
    for(i=0;i<=2;i++)
    if(btn[i].innerText!=''&&btn[i].innerText==btn[i+3].innerText&&
        btn[i].innerText==btn[i+6].innerText){
        whoWon(i)
            return 1
    }

    //diagonal
    if(btn[2].innerText!=''&&btn[2].innerText==btn[4].innerText&&btn[4].innerText==btn[6].innerText){
        
        whoWon(2)


            return 1

    }

    if(btn[0].innerText!=''&&btn[0].innerText==btn[4].innerText&&btn[4].innerText==btn[8].innerText){
        
        whoWon(0)

            return 1
    }

    
    
}

function whoWon(winner){
    let popUp=document.getElementById('popUp')
    popUp.classList.add('message')
            popUp.innerText=btn[winner].innerText+' won !'

    if ( btn[winner].innerText=='X'){
        xCount++ 
        document.getElementById('xCount').innerText=xCount
    }  
    else
        if(btn[winner].innerText=='0'){
        oCount++
        document.getElementById('oCount').innerText=oCount
        }

    cooldown=1;//prevents player from marking while win message is being displayed
    setTimeout( ()=>{reset();resetCooldown();
        document.getElementById('popUp').classList.remove('message')
    }, RESTART_DELAY);

}

