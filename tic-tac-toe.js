"use strict";
window.onload = function addCname(){
    let squares = document.querySelectorAll("#board div");
    let currentP = "X";
   
    
    
    
    for (let i = 0 ; i < squares.length; i++){
        squares[i].classList.add("square");
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
            
            
            
               
                                       
            if(container.getElementsByClassName("square")[i].innerHTML != "X" && container.getElementsByClassName("square")[i].innerHTML != "O"){
                container.getElementsByClassName("square")[i].innerHTML = currentP
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
    


    

