const winAudio = new Audio("win.wav")
const clickAudio = new Audio("click.wav")
let notification = document.querySelector(".notification")

//User Defined Sign
var player1_opt = 'X'
var player2_opt = 'O'
let turn = player1_opt
document.querySelector("#player-data-submit").addEventListener("click", () => {
    player1_opt = document.getElementById("player1-sign").value
    player2_opt = document.getElementById("player2-sign").value
    turn = player1_opt
}
)


var b = 0;


//Handling Player Turn
const changeTurn = () => {
      if(b == 0){
       if (turn == player1_opt) {
        notification.innerHTML = `${player2_opt} Turn`
        return turn = player2_opt
    }
    else {
        notification.innerHTML = `${player1_opt} Turn`
        return turn = player1_opt
    }

    }

    else{
          notification.innerHTML = "Play again";


    }





}

let boxesfilled = 0;

//Handling Input
let boxElements = document.querySelectorAll(".box")
boxElements.forEach(boxelement => {
    boxelement.addEventListener("click", () => {
        if (boxelement.innerHTML == '' && b == 0) {
            clickAudio.play();
            boxelement.innerHTML = turn;
            boxesfilled += 1;
            checkwin();
            checkdraw();
            changeTurn();
        }
    }
    )
});


//Checking Winner
function checkwin() {
    if(b == 0){
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if (boxElements[e[0]].innerHTML != '' && boxElements[e[0]].innerHTML == boxElements[e[1]].innerHTML && boxElements[e[1]].innerHTML == boxElements[e[2]].innerHTML) {
            document.querySelector(".winnerboard").innerHTML = (`${boxElements[e[0]].innerHTML} won`).toUpperCase()
            winAudio.play()

            b = 1;



        }
    })}

}

//Check Draw
function checkdraw() {
      if(b == 0){
          if (boxesfilled == 9) {

         checkwin();
         if(b == 0){
         document.querySelector(".winnerboard").innerHTML = ("draw").toUpperCase()
         winAudio.play()
         b = 1;
         }

         else{
               b = 1;


         }


    }




      }






}

