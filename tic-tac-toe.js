"use strict";
window.onload = function addCname(){
    let squares = document.querySelectorAll("#board div");
    let currentP = "X";
    
    
    
    
    for (let i = 0 ; i < squares.length; i++){
        squares[i].classList.add("square");
        squares[i].addEventListener("click",function() {
            
            console.log("square" + i + "clicked")
            var container = document.getElementById("board")
            var stateofGame = document.getElementsByClassName("square")//.innerHTML
            if(container.getElementsByClassName("square")[i].innerHTML != "X" && container.getElementsByClassName("square")[i].innerHTML != "O"){//stateofGame[i].innerHTML == null ){
                container.getElementsByClassName("square")[i].innerHTML = currentP
                if(currentP == "X"){
                    currentP = "O"
                }else if(currentP == "O"){
                    currentP = "X"
                } 
            }
            
                
            
        });
        
        
    }
    
}    
    


    

