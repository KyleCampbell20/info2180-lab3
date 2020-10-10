window.onload = function addCname(){
    let squares = document.querySelectorAll("#board div");

    for (let i = 0 ; i < squares.length; i++){
        squares[i].classList.add("square");
    }
}
