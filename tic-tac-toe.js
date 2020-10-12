"use strict";
window.onload = function addCname(){
    let squares = document.querySelectorAll("#board div");
    let currentP = "X";
    let stateofGame = ["", "", "", "", "", "", "", "", ""];
    let btn = document.querySelector(".btn")
    var container = document.getElementById("board")
    
    
    for (let i = 0 ; i < squares.length; i++){
        squares[i].classList.add("square")
        squares[i].addEventListener("click",function() {
            console.log("square" + i + "clicked")
            
            
            
            
           
            function mousecheck(){
                squares[i].classList.add("hover")
                console.log("square" + i + "hovered")
            }
            function MouseOcheck(){
                squares[i].classList.remove("hover")
                console.log("square" + i + "Off")
            }
            squares[i].addEventListener("mouseover", mousecheck)
            squares[i].addEventListener("mouseout", MouseOcheck)

            
            
        
            
            
            
               
                                       
            if(container.getElementsByClassName("square")[i].innerHTML != "X" && container.getElementsByClassName("square")[i].innerHTML != "O"){
                container.getElementsByClassName("square")[i].innerHTML = currentP
                stateofGame[i] = currentP
                console.log(stateofGame[i])
                
                if(stateofGame[0] == currentP && stateofGame[1] == currentP && stateofGame[2] == currentP)
                {
                    document.getElementById("status").innerHTML = "Congratulations! " + currentP + " is the Winner! "
                    document.getElementById("status").classList.add("you-won")
                    
        
                }
                if(stateofGame[0] == currentP && stateofGame[1] == currentP && stateofGame[2] == currentP){
                    document.getElementById("status").innerHTML = "Congratulations! " + currentP + " is the Winner! "
                    document.getElementById("status").classList.add("you-won")
                } 
                if(stateofGame[3] == currentP && stateofGame[4] == currentP && stateofGame[5] == currentP){
                    document.getElementById("status").innerHTML = "Congratulations! " + currentP + " is the Winner! "
                    document.getElementById("status").classList.add("you-won")
                }
                if(stateofGame[6] == currentP && stateofGame[7] == currentP && stateofGame[8] == currentP){
                    document.getElementById("status").innerHTML = "Congratulations! " + currentP + " is the Winner! "
                    document.getElementById("status").classList.add("you-won")
                }
                if(stateofGame[0] == currentP && stateofGame[3] == currentP && stateofGame[6] == currentP){
                    document.getElementById("status").innerHTML = "Congratulations! " + currentP + " is the Winner! "
                    document.getElementById("status").classList.add("you-won")
                }
                if(stateofGame[1] == currentP && stateofGame[4] == currentP && stateofGame[7] == currentP){
                    document.getElementById("status").innerHTML = "Congratulations! " + currentP + " is the Winner! "
                    document.getElementById("status").classList.add("you-won")
                }
                if(stateofGame[2] == currentP && stateofGame[5] == currentP && stateofGame[8] == currentP){
                    document.getElementById("status").innerHTML = "Congratulations! " + currentP + " is the Winner! "
                    document.getElementById("status").classList.add("you-won")
                }
                if(stateofGame[0] == currentP && stateofGame[4] == currentP && stateofGame[8] == currentP){
                    document.getElementById("status").innerHTML = "Congratulations! " + currentP + " is the Winner! "
                    document.getElementById("status").classList.add("you-won")
                }
                if(stateofGame[2] == currentP && stateofGame[4] == currentP && stateofGame[6] == currentP){
                    document.getElementById("status").innerHTML = "Congratulations! " + currentP + " is the Winner! "
                    document.getElementById("status").classList.add("you-won")
                }
                if(currentP == "X"){
                    currentP = "O"
                     
                    squares[i].classList.add("X")

                    
                }else if(currentP == "O"){
                    squares[i].classList.add("O")
                    currentP = "X"
                    
                } 
            }
                
    
                
            
            
                
            
        })
        
       
    
        
        
    }
        btn.addEventListener("click", function() {
            for (let i = 0 ; i < squares.length; i++){
                container.getElementsByClassName("square")[i].innerHTML = " "
                currentP="X"
               
                squares[i].classList.remove("X")
                squares[i].classList.remove("O")
                squares[i].classList.remove("hover")
                squares[i].classList.remove("hover.O")
            
                console.log("clicked")
            }
            document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."
            document.getElementById("status").classList.remove("you-won")
            stateofGame= ["", "", "", "", "", "", "", "", ""];

        })
 
   
}    
    


    

