let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".game-box");
let buttons = document.querySelectorAll(".button-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let choice1 = document.querySelector(".choice1")
let choice2 = document.querySelector(".choice2")
let pvp = document.querySelector(".pvp")
let pvm = document.querySelector(".pvm")
let xone = document.querySelector(".xone")
let xtwo = document.querySelector(".xtwo")
let charac1_1 = document.querySelector(".charac1-1")
let charac2_1 = document.querySelector(".charac2-1")
let charac3_1 = document.querySelector(".charac3-1")
let charac4_1 = document.querySelector(".charac4-1")
let charac5_1 = document.querySelector(".charac5-1")
let charac6_1 = document.querySelector(".charac6-1")
let charac1_2 = document.querySelector(".charac1-2")
let charac2_2 = document.querySelector(".charac2-2")
let charac3_2 = document.querySelector(".charac3-2")
let charac4_2 = document.querySelector(".charac4-2")
let charac5_2 = document.querySelector(".charac5-2")
let charac6_2 = document.querySelector(".charac6-2")
let start = document.querySelector(".start")
let reset = document.querySelector(".reset")
let easy = document.querySelector(".easy")
let medium = document.querySelector(".medium")
let hard = document.querySelector(".hard")
let modecontainer = document.querySelector(".game-mode-container")
let title = document.querySelector(".title h1")
let secondPlayer;
let game=1;
let gamemode=1;




start.addEventListener("click", function(){
    this.classList.add('hide')
    charac1_1.classList.remove('hide')
    charac2_1.classList.remove('hide')
    charac3_1.classList.remove('hide')
    charac4_1.classList.remove('hide')
    charac5_1.classList.remove('hide')
    charac6_1.classList.remove('hide')
    title.innerText = "PERSONAGENS"
    
})

reset.addEventListener("click", function(){
    location.reload()

})

easy.addEventListener("click", function(){
    gamemode=1
    this.classList.add("active-mode")
    medium.classList.remove("active-mode")
    hard.classList.remove("active-mode")

})

medium.addEventListener("click", function(){
    gamemode=1
    this.classList.add("active-mode")
    easy.classList.remove("active-mode")
    hard.classList.remove("active-mode")

})

hard.addEventListener("click", function(){
    gamemode=1
    this.classList.add("active-mode")
    medium.classList.remove("active-mode")
    easy.classList.remove("active-mode")

})

medium.addEventListener("click", function(){
    gamemode=2

})

hard.addEventListener("click", function(){
    gamemode=3

})

function characterchoice(){
    var src = document.getElementById("character-1");
    var img = document.createElement("img");

    img.classList.add("persona")
    persona=document.querySelector(".persona")
    if (src.childNodes[0]!=undefined){
        persona.remove()
    }
    charac1_2.classList.remove('hide')
    charac2_2.classList.remove('hide')
    charac3_2.classList.remove('hide')
    charac4_2.classList.remove('hide')
    charac5_2.classList.remove('hide')
    charac6_2.classList.remove('hide')
    charac1_1.classList.add('hide')
    charac2_1.classList.add('hide')
    charac3_1.classList.add('hide')
    charac4_1.classList.add('hide')
    charac5_1.classList.add('hide')
    charac6_1.classList.add('hide')
}

function hovering(name){
    var src = document.getElementById("character-1");
    var img = document.createElement("img");

    img.classList.add("persona")
    persona=document.querySelector(".persona")
    if (src.childNodes[0]!=undefined){
        persona.remove()
    }
    img.src = `images/character${(name)}.png`;
    src.appendChild(img);
}

function hovering2(name){
    var src = document.getElementById("character-2");
    var img = document.createElement("img");
    img.classList.add("persona2")
    persona2=document.querySelector(".persona2")
    if (src.childNodes[0]!=undefined){
        persona2.remove()
    }
    img.src = `images/character${(name)}.png`;
    src.appendChild(img);
}

charac1_1.addEventListener("mouseover", function(){
    
    hovering("m1")

})

charac1_1.addEventListener("click", function(){
    characterchoice()
    var src = document.getElementById("character-1");
    var img = document.createElement("img");
    img.src = "images/characterm1.png";
    src.appendChild(img);

})

charac2_1.addEventListener("mouseover", function(){
    
    hovering("m2")

})


charac2_1.addEventListener("click", function(){
    characterchoice()
    var src = document.getElementById("character-1");
    var img = document.createElement("img");
    img.src = "images/characterm2.png";
    src.appendChild(img);
})

charac3_1.addEventListener("mouseover", function(){
    
    hovering("m3")

})

charac3_1.addEventListener("click", function(){
    characterchoice()
    var src = document.getElementById("character-1");
    var img = document.createElement("img");
    img.src = "images/characterm3.png";
    src.appendChild(img);
})

charac4_1.addEventListener("mouseover", function(){
    
    hovering("f1")

})

charac4_1.addEventListener("click", function(){
    characterchoice()
    var src = document.getElementById("character-1");
    var img = document.createElement("img");
    img.src = "images/characterf1.png";
    src.appendChild(img);
})

charac5_1.addEventListener("mouseover", function(){
    
    hovering("f2")
})

charac5_1.addEventListener("click", function(){
    characterchoice()
    var src = document.getElementById("character-1");
    var img = document.createElement("img");
    img.src = "images/characterf2.png";
    src.appendChild(img);
})

charac6_1.addEventListener("mouseover", function(){
    
    hovering("f3")

})

charac6_1.addEventListener("click", function(){
    characterchoice()
    var src = document.getElementById("character-1");
    var img = document.createElement("img");
    img.src = "images/characterf3.png";
    src.appendChild(img);
})

function simbolchoice(){
    var src = document.getElementById("character-1");
    var img = document.createElement("img");

    img.classList.add("persona2")
    persona2=document.querySelector(".persona2")
    if (src.childNodes[0]!=undefined){
        persona2.remove()
    }
    choice1.classList.remove('hide')
    choice2.classList.remove('hide')
    charac1_2.classList.add('hide')
    charac2_2.classList.add('hide')
    charac3_2.classList.add('hide')
    charac4_2.classList.add('hide')
    charac5_2.classList.add('hide')
    charac6_2.classList.add('hide')
    title.innerText = "SIMBOLOS"
}

charac1_2.addEventListener("mouseover", function(){
    
    hovering2("m1")

})

charac1_2.addEventListener("click", function(){
    simbolchoice()
    var src = document.getElementById("character-2");
    var img = document.createElement("img");
    img.src = "images/characterm1.png";
    src.appendChild(img);
})

charac2_2.addEventListener("mouseover", function(){
    
    hovering2("m2")
})

charac2_2.addEventListener("click", function(){
    simbolchoice()
    var src = document.getElementById("character-2");
    var img = document.createElement("img");
    img.src = "images/characterm2.png";
    src.appendChild(img);
})

charac3_2.addEventListener("mouseover", function(){
    
    hovering2("m3")

})

charac3_2.addEventListener("click", function(){
    simbolchoice()
    var src = document.getElementById("character-2");
    var img = document.createElement("img");
    img.src = "images/characterm3.png";
    src.appendChild(img);
})

charac4_2.addEventListener("mouseover", function(){
    
    hovering2("f1")

})

charac4_2.addEventListener("click", function(){
    simbolchoice()
    var src = document.getElementById("character-2");
    var img = document.createElement("img");
    img.src = "images/characterf1.png";
    src.appendChild(img);
})

charac5_2.addEventListener("mouseover", function(){
    
    hovering2("f2")

})

charac5_2.addEventListener("click", function(){
    simbolchoice()
    var src = document.getElementById("character-2");
    var img = document.createElement("img");
    img.src = "images/characterf2.png";
    src.appendChild(img);
})

charac6_2.addEventListener("mouseover", function(){
    
    hovering2("f3")

})

charac6_2.addEventListener("click", function(){
    simbolchoice()
    var src = document.getElementById("character-2");
    var img = document.createElement("img");
    img.src = "images/characterf3.png";
    src.appendChild(img);
})

function choices(){
    choice1.classList.add("hide")
    choice2.classList.add("hide")
    pvp.classList.remove("hide")
    pvm.classList.remove("hide")
    title.innerText = "MODO DE JOGO"
}

choice1.addEventListener("click", function(){
    choices()
    x.setAttribute("id","choice_x");
    o.setAttribute("id","choice_o");
    xone.innerText = "X"
    xtwo.innerText = "O"
    
})

choice2.addEventListener("click", function(){
    choices()
    x.setAttribute("id","choice_o");
    o.setAttribute("id","choice_x");
    xone.innerText = "O"
    xtwo.innerText = "X"
    
    
})

let player1=0;
let player2=0;

for(let i = 0; i<boxes.length;i++){
    
    boxes[i].addEventListener("click", function(){
        let el = checkel(player1,player2);

        

        if (this.childNodes.length==0){

        

        let cloneEl = el.cloneNode(true);
        this.appendChild(cloneEl);
            
        if (player1==player2){
            player1++;

            if (secondPlayer == "pvm"){
                computerplay();
                player2++;
            }
        }
        else{
            player2++;
        }
        
        checkWinCondition()
    }


    

    });
}

for (let i = 0; i<buttons.length;i++){
    
    buttons[i].addEventListener("click",function(){
        title.innerText = `Partida ${(game)}`
        
        secondPlayer = this.getAttribute("class");
        if (secondPlayer == "pvp"){
            modecontainer.classList.add("hide")
            
        }
        

        for (let j=0;j<buttons.length;j++){
            buttons[j].style.display = 'none'
        }
        setTimeout(function(){
            let container = document.querySelector(".game-container");
            container.classList.remove('hide')
        },500)
    });

    
}



function checkel(player1,player2){
    if (secondPlayer=="pvp"){
        if (game%2!=0){
            if (player1==player2){
                el=x;
            }
            else{
                el=o;
            }
            return el
    
        }
        else{
            if (player1==player2){
                el=o;
            }
            else{
                el=x;
            }
            return el
        }
    }
    else{
        if (player1==player2){
            el=x;
        }
        else{
            el=o;
        }
        return el
    }
    
}



function checkWinCondition(){
    
    let b1=document.getElementById("box-1")
    let b2=document.getElementById("box-2")
    let b3=document.getElementById("box-3")
    let b4=document.getElementById("box-4")
    let b5=document.getElementById("box-5")
    let b6=document.getElementById("box-6")
    let b7=document.getElementById("box-7")
    let b8=document.getElementById("box-8")
    let b9=document.getElementById("box-9")
    

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className; 
        let b2Child = b2.childNodes[0].className; 
        let b3Child = b3.childNodes[0].className; 

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            declareWinner("x")
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            declareWinner("o")
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        let b4Child = b4.childNodes[0].className; 
        let b5Child = b5.childNodes[0].className; 
        let b6Child = b6.childNodes[0].className; 

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            declareWinner("x")
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            declareWinner("o")
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        let b7Child = b7.childNodes[0].className; 
        let b8Child = b8.childNodes[0].className; 
        let b9Child = b9.childNodes[0].className; 

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            declareWinner("x")
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            declareWinner("o")
        }
    }

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className; 
        let b7Child = b7.childNodes[0].className; 
        let b4Child = b4.childNodes[0].className; 

        if (b1Child == 'x' && b7Child == 'x' && b4Child == 'x'){
            declareWinner("x")
        } else if (b1Child == 'o' && b7Child == 'o' && b4Child == 'o'){
            declareWinner("o")
        }
    }

    if (b5.childNodes.length > 0 && b2.childNodes.length > 0 && b8.childNodes.length > 0){
        let b5Child = b5.childNodes[0].className; 
        let b2Child = b2.childNodes[0].className; 
        let b8Child = b8.childNodes[0].className; 

        if (b5Child == 'x' && b2Child == 'x' && b8Child == 'x'){
            declareWinner("x")
        } else if (b5Child == 'o' && b2Child == 'o' && b8Child == 'o'){
            declareWinner("o")
        }
    }

    if (b6.childNodes.length > 0 && b9.childNodes.length > 0 && b3.childNodes.length > 0){
        let b6Child = b6.childNodes[0].className; 
        let b9Child = b9.childNodes[0].className; 
        let b3Child = b3.childNodes[0].className; 

        if (b6Child == 'x' && b9Child == 'x' && b3Child == 'x'){
            declareWinner("x")
        } else if (b6Child == 'o' && b9Child == 'o' && b3Child == 'o'){
            declareWinner("o")
        }
    }

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className; 
        let b5Child = b5.childNodes[0].className; 
        let b9Child = b9.childNodes[0].className; 

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            declareWinner("x") 
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            declareWinner("o")
        }
    }

    if (b5.childNodes.length > 0 && b7.childNodes.length > 0 && b3.childNodes.length > 0){
        let b5Child = b5.childNodes[0].className; 
        let b7Child = b7.childNodes[0].className; 
        let b3Child = b3.childNodes[0].className; 

        if (b5Child == 'x' && b7Child == 'x' && b3Child == 'x'){
            declareWinner("x")
        } else if (b5Child == 'o' && b7Child == 'o' && b3Child == 'o'){
            declareWinner("o")
        }
    }
    
    let counter = 0;
    console.log(counter)

        for (let i=0; i<boxes.length;i++){
            if(boxes[i].childNodes[0] != undefined){
              
                counter++;
            }
            
        }

        if (counter == 9){
            declareWinner("velha")
        }
}

function declareWinner(winner){
    title.innerText = `Partida ${(game+1)}`
   
    let scoreboardX = document.querySelector(".scoreboard-1")
    let scoreboardY = document.querySelector(".scoreboard-2")
    let msg='';

    if (winner=="x"){
        scoreboardX.textContent=parseInt(scoreboardX.textContent)+1
        msg="Jogador 1 venceu"
        game++
    }
    else if (winner=="o"){
        scoreboardY.textContent=parseInt(scoreboardY.textContent)+1
        msg="Jogador 2 venceu"
        game++
    }
    else{
        msg = "Deu velha"
        game++
    }

    messageText.innerHTML = msg
    messageContainer.classList.remove('hide')

    setTimeout(function(){
        messageContainer.classList.add('hide');
    },2000)
    
    player1=0;
    player2=0;

    let boxesToRemove = document.querySelectorAll(".game-box div")

    for (let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

function computerplay(){
    
    
    let cloneO = o.cloneNode(true)
    let diagonal = [0,2,6,8]
    let rest = [1,3,5,7]
    if (gamemode==1){
        console.log("facil")
        random(cloneO) 
    }
    else if(gamemode==2){
        console.log("medio")
        count1 = counting()
    console.log("count1",count1)
   defenseAttack(cloneO, attackTactics)
    count2 = counting()
    console.log("count2",count1)
    console.log(count1==count2)
    if (count2==count1){
        defenseAttack(cloneO, defenseTactics)
        count3=counting()
        console.log(count3==count2, "count32")
        if (count3==count2){
            random(cloneO)
        } 
    }
    }
    else{
        console.log("dificil")
        count1 = counting()
    let counter=0
    for (let i = 0; i<boxes.length;i++){
        if (boxes[i].childNodes[0]!=undefined && boxes[i].childNodes[0].isEqualNode(cloneO)){
            
            counter++
        }
    }
    count1 = counting()
    console.log("count1",count1)
   defenseAttack(cloneO, attackTactics)
    count2 = counting()
    console.log("count2",count1)
    console.log(count1==count2)
    if (count2==count1){
        defenseAttack(cloneO, defenseTactics)
        count3=counting()
        
        if (count3==count2){
            defenseadv(cloneO)
            count4=counting()
        
        if (count3==count4){
            if (counter == 0){
                diagonalappend(cloneO,diagonal)
            }
            else if(counter==1){
                secoundplay(cloneO,rest,diagonal)
            }
            else if (boxes[0].childNodes[0]==undefined || boxes[2].childNodes[0]==undefined || boxes[6].childNodes[0]==undefined || boxes[8].childNodes[0]==undefined ){
                if (boxes[5].childNodes[0]==undefined){
                    boxes[5].appendChild(cloneO)
                }
                else if (boxes[1].childNodes[0]==undefined && boxes[3].childNodes[0]==undefined && boxes[5].childNodes[0]==undefined && boxes[7].childNodes[0]==undefined){
                    diagonalappend(cloneO)
                }
                else{
                    defenseadv(cloneO)
                }
            }
            else{
                random(cloneO)
            }
        }
        }
        }

    }
    
        
        
    }
   
    
               
        
    
    


   
        
    
    function random(cloneO){
            randomnumb= Math.floor(Math.random()*9)
            if (boxes[randomnumb].childNodes[0]==undefined){
                boxes[randomnumb].appendChild(cloneO)
            }  else{
                let count = 0
                for(let i = 0; i <boxes.length;i++){
                    if (boxes[i].childNodes[0]!=undefined){
                        count++
                    }
                }
                if (count < 9){
                    random(cloneO)
                }
                
            }

        
    }

    function diagonalappend(cloneO,diagonal){
        diagonalchoice = Math.floor(Math.random() * diagonal.length);
        diagonalposition = diagonal[diagonalchoice]
        if (boxes[diagonalposition].childNodes[0]==undefined){
            boxes[diagonalposition].appendChild(cloneO)
        }
        else{
            
            let count = 0
            for(let i = 0; i <diagonal.length;i++){
                if (boxes[diagonal[i]].childNodes[0]!=undefined){
                    count++
                }
            }
            if (count < 4){
                diagonalappend(cloneO,diagonal)
            }
                
        }
        
    }

function restplay(cloneO){
    randomNumber = Math.floor(Math.random()*2)
    if (boxes[0].childNodes[0]!=undefined && boxes[0].childNodes[0].isEqualNode(cloneO)){
        
        if (randomNumber==0 && boxes[5].childNodes[0]==undefined){
            boxes[5].appendChild(cloneO)
        }
        else if (randomNumber==1 && boxes[7].childNodes[0]==undefined){
            boxes[7].appendChild(cloneO)
        }
        
        
    }
    else if ( boxes[2].childNodes[0]!=undefined && boxes[2].childNodes[0].isEqualNode(cloneO)){
       
        if (randomNumber==0 && boxes[3].childNodes[0]==undefined){
            boxes[3].appendChild(cloneO)
        }
        else if (randomNumber== 1 && boxes[7].childNodes[0]==undefined){
            boxes[7].appendChild(cloneO)
        }
        
       
    }
    else if (boxes[6].childNodes[0]!=undefined && boxes[6].childNodes[0].isEqualNode(cloneO)){
        
        if (randomNumber==0 && boxes[1].childNodes[0]==undefined){
            boxes[1].appendChild(cloneO)
        }
        else if (randomNumber==1 && boxes[5].childNodes[0]==undefined){
            boxes[5].appendChild(cloneO)
        }
        
       
    }
    else if (boxes[8].childNodes[0]!=undefined && boxes[8].childNodes[0].isEqualNode(cloneO)){
       
        if (randomNumber==0 && boxes[3].childNodes==undefined){
           
            boxes[3].appendChild(cloneO)
        }
        else if (randomNumber==1 && boxes[1].childNodes==undefined){
           
            boxes[1].appendChild(cloneO)
        }
        
       
    }
    

    

}

    function secoundplay(cloneO,rest,diagonal){
        randomNumber = Math.floor(Math.random()*2)
        if (boxes[4].childNodes[0]!=undefined && boxes[4].childNodes[0].isEqualNode(cloneO)==false){
           
            diagonalappend(cloneO, diagonal)
        }else{
            restplay(cloneO)
        }
        
        

    }
            

    
   


function counting(){
    let counter = 0
    for (let i = 0; i<boxes.length;i++){
        if (boxes[i].childNodes[0]==undefined){
            counter++
        }
    }
    return counter
} 

function defenseadv(cloneO){
    let boxes1= boxes[0].childNodes[0]
    let boxes2= boxes[1].childNodes[0]
    let boxes3= boxes[2].childNodes[0]
    let boxes4= boxes[3].childNodes[0]
    let boxes5= boxes[4].childNodes[0]
    let boxes6= boxes[5].childNodes[0]
    let boxes7= boxes[6].childNodes[0]
    let boxes8= boxes[7].childNodes[0]
    let boxes9= boxes[8].childNodes[0]

    let state=[[boxes1,boxes6],[boxes1,boxes8],[boxes3,boxes4],[boxes3,boxes8],[boxes7,boxes6],[boxes7,boxes2],[boxes9,boxes4],[boxes9,boxes2],[boxes4,boxes2],[boxes6,boxes2],[boxes8,boxes4],[boxes6,boxes8],[boxes2,boxes1],[boxes2,boxes3],[boxes3,boxes6],[boxes6,boxes9],[boxes9,boxes8],[boxes7,boxes8],[boxes7,boxes4],[boxes4,boxes1]]
    
     
    if((boxes1==undefined || boxes3==undefined || boxes7==undefined || boxes9==undefined ) && boxes5==undefined){
        boxes[4].appendChild(cloneO)
    }
    else if((state[8].includes(undefined)==false || state[9].includes(undefined)==false || state[10].includes(undefined)==false || state[11].includes(undefined)==false ) && boxes5==undefined){
        boxes[4].appendChild(cloneO)
    }
    else if(( state[10].includes(undefined)==false ) && boxes3==undefined){
        boxes[2].appendChild(cloneO)
    }
    else if(( state[9].includes(undefined)==false ) && boxes1==undefined){
        boxes[0].appendChild(cloneO)
    }
    else if(( state[8].includes(undefined)==false ) && boxes3==undefined){
        boxes[2].appendChild(cloneO)
    }
    else if(( state[11].includes(undefined)==false ) && boxes9==undefined){
        boxes[8].appendChild(cloneO)
    }
    else if((state[12].includes(undefined)==false || state[13].includes(undefined)==false || state[14].includes(undefined)==false || state[15].includes(undefined)==false || state[16].includes(undefined)==false || state[17].includes(undefined)==false || state[18].includes(undefined)==false || state[19].includes(undefined)==false ) && boxes5==undefined){
        boxes[4].appendChild(cloneO)
    }
    else if((state[0].includes(undefined)==false || state[7].includes(undefined)==false ) && boxes3==undefined){
        boxes[2].appendChild(cloneO)
    }
    else if((state[1].includes(undefined)==false || state[6].includes(undefined)==false ) && boxes7==undefined){
        boxes[6].appendChild(cloneO)
    }
    else if((state[2].includes(undefined)==false || state[5].includes(undefined)==false ) && boxes1==undefined){
        boxes[0].appendChild(cloneO)
    }
    else if((state[3].includes(undefined)==false || state[4].includes(undefined)==false ) && boxes9==undefined){
        boxes[8].appendChild(cloneO)
    }
    

}


function defenseAttack(cloneO,func){
    if(func(cloneO,0,1,2)!=0){
        num = func(cloneO,0,1,2)
        if (num==1){
            boxes[0].appendChild(cloneO);
        }
        else if (num==2){
            boxes[1].appendChild(cloneO);
        }
        else if (num==3){
            boxes[2].appendChild(cloneO);
        }
       

    }
    else if(func(cloneO,3,4,5)!=0){
        num = func(cloneO,3,4,5)
        if (num==1){
            boxes[3].appendChild(cloneO);
        }
        else if (num==2){
            boxes[4].appendChild(cloneO);
        }
        else if (num==3){
            boxes[5].appendChild(cloneO);
        }
       

    }
    else if(func(cloneO,6,7,8)!=0){
        num = func(cloneO,6,7,8)
        if (num==1){
            boxes[6].appendChild(cloneO);
        }
        else if (num==2){
            boxes[7].appendChild(cloneO);
        }
        else if (num==3){
            boxes[8].appendChild(cloneO);
        }
       

    }
    else if(func(cloneO,0,3,6)!=0){
        num = func(cloneO,0,3,6)
        if (num==1){
            boxes[0].appendChild(cloneO);
        }
        else if (num==2){
            boxes[3].appendChild(cloneO);
        }
        else if (num==3){
            boxes[6].appendChild(cloneO);
        }
       

    }
    else if(func(cloneO,1,4,7)!=0){
        num = func(cloneO,1,4,7)
        if (num==1){
            boxes[1].appendChild(cloneO);
        }
        else if (num==2){
            boxes[4].appendChild(cloneO);
        }
        else if (num==3){
            boxes[7].appendChild(cloneO);
        }
       

    }
    else if(func(cloneO,2,5,8)!=0){
        num = func(cloneO,2,5,8)
        if (num==1){
            boxes[2].appendChild(cloneO);
        }
        else if (num==2){
            boxes[5].appendChild(cloneO);
        }
        else if (num==3){
            boxes[8].appendChild(cloneO);
        }
       

    }
    else if(func(cloneO,0,4,8)!=0){
        num = func(cloneO,0,4,8)
        if (num==1){
            boxes[0].appendChild(cloneO);
        }
        else if (num==2){
            boxes[4].appendChild(cloneO);
        }
        else if (num==3){
            boxes[8].appendChild(cloneO);
        }
       

    }
    else if(func(cloneO,2,4,6)!=0){
        num = func(cloneO,2,4,6)
        if (num==1){
            boxes[2].appendChild(cloneO);
        }
        else if (num==2){
            boxes[4].appendChild(cloneO);
        }
        else if (num==3){
            boxes[6].appendChild(cloneO);
        }
       
    }
    else{
        return 0
    }
}

function defenseTactics(cloneO,num1,num2,num3){
    let box1 = boxes[num1].childNodes[0]
    let box2 = boxes[num2].childNodes[0]
    let box3 = boxes[num3].childNodes[0]
    if (box1!=undefined && box1.isEqualNode(cloneO) == false && box2!=undefined && box2.isEqualNode(cloneO) == false &&  box3==undefined){
        
        return 3
    }
    else if (box1!=undefined && box1.isEqualNode(cloneO) == false && box3!=undefined && box3.isEqualNode(cloneO) == false &&  box2==undefined){
        
        return 2
    }
    else if (box2!=undefined && box2.isEqualNode(cloneO) == false && box3!=undefined && box3.isEqualNode(cloneO) == false &&  box1==undefined){
        
        return 1
    }
    else{
        return 0
    }

}



function attackTactics(cloneO,num1,num2,num3){
    let box1 = boxes[num1].childNodes[0]
    let box2 = boxes[num2].childNodes[0]
    let box3 = boxes[num3].childNodes[0]
  
    if (box1!= undefined && box2!= undefined && box1.isEqualNode(cloneO) && box2.isEqualNode(cloneO) && box3==undefined){
        
        return 3
    }
    else if ( box1!= undefined && box3!= undefined && box1.isEqualNode(cloneO) && box3.isEqualNode(cloneO) && box2==undefined){
        console.log("opa")
        return 2
    }
    else if (box3!= undefined && box2!= undefined && box2.isEqualNode(cloneO) && box3.isEqualNode(cloneO) && box1==undefined){
        
        return 1
    }
    else{
        return 0
    }

}