"use strict";
window.onload = function addCname(){
    let squares = document.querySelectorAll("#board div");
    let currentP = "X";
    let stateofGame = ["", "", "", "", "", "", "", "", ""];
    
    
    
    
    for (let i = 0 ; i < squares.length; i++){
        squares[i].classList.add("square")
        squares[i].addEventListener("click",function() {
            console.log("square" + i + "clicked")
            
            squares[i].addEventListener("mouseover", mousecheck)
            squares[i].addEventListener("mouseout", MouseOcheck)
            function mousecheck(){
                squares[i].classList.add("hover")
                squares[i].classList.remove("hover.O")
                console.log("square" + i + "hovered")
            }
            function MouseOcheck(){
                squares[i].classList.add("hover.O")
                squares[i].classList.remove("hover")
                console.log("square" + i + "Off")
            }

            var container = document.getElementById("board")
            var DisplayStatus = document.querySelector("#status")
        
            
            
            
               
                                       
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
 
   
}    
    


    

