let player = "null"


const buttonPlayer1 = document.querySelector("#playero")
const buttonPlayer2 = document.querySelector("#playerx")

let playerDisplay = document.getElementById("player-display");



const c1 = document.querySelector("#row1-col1")
const c2 = document.querySelector("#row1-col2")
const c3 = document.querySelector("#row1-col3")

const c4 = document.querySelector("#row2-col1")
const c5 = document.querySelector("#row2-col2")
const c6 = document.querySelector("#row2-col3")

const c7 = document.querySelector("#row3-col1")
const c8 = document.querySelector("#row3-col2")
const c9 = document.querySelector("#row3-col3")


// document.getElementById("directions")







//================================

function winPlay(){
    let winAudio = new Audio("soundbytes/winsound.wav");
    winAudio.play();
}

function playClick() {
    let click = new Audio("soundbytes/click.wav");
    click.play();
}

//=========================================


//=====   Player O   =====



function playerOne () {
    playClick();
    player = "O"
playerDisplay.innerHTML = `It is now Player O's turn. <br> Player O select your tile.`
    console.log(player)

}

buttonPlayer1.addEventListener("click", playerOne)



//========== Player X ===============

function playerTwo () {
    playClick();
    player = "X"
playerDisplay.innerHTML = `It is now Player X's turn. <br> Player X select your tile`
    console.log(player)
}

buttonPlayer2.addEventListener("click", playerTwo)



//=============Row1================

function clickButtonR1C1() {
    console.log("#row1-col1")
    c1.style.color = 'black'
    playClick();
    // console.log(outCome)

    if (player == "X") {
        c1.innerHTML = "X"
        console.log(c1)
    }
    else if (player == "O") {
        c1.innerHTML = "O"
        console.log(c1)
    }
}    


c1.addEventListener("click",clickButtonR1C1)

//=============================



function clickButtonR1C2() {
    console.log("#row1-col2")
    c2.style.color = 'black'
    playClick();

    if (player == "X") {
    c2.innerHTML = "X" }
    else if (player == "O") {
        c2.innerHTML = "O"
    }
}

c2.addEventListener("click", clickButtonR1C2)

//=============================

function clickButtonR1C3() {
    console.log("#row1-col3")
    c3.style.color = 'black'
    playClick();

    if (player == "X") {
        c3.innerHTML = "X"
    }
    else if (player == "O") {
        c3.innerHTML = "O"
    }
}

c3.addEventListener("click", clickButtonR1C3)

//=============Row2================

function clickButtonR2C1() {
    console.log("#row2-col1")
    c4.style.color = 'black'
    playClick();

    if (player == "X") {
        c4.innerHTML = "X"
        }
    else if (player == "O") {
        c4.innerHTML = "O"
    }
}

c4.addEventListener("click", clickButtonR2C1)

//=============================



function clickButtonR2C2() {
    console.log("#row2-col2")
    c5.style.color = 'black'
    playClick();

    if (player == "X") {
        c5.innerHTML = "X"
        }
    else if (player == "O") {
        c5.innerHTML = "O"
    }
}

c5.addEventListener("click", clickButtonR2C2)

//=============================



function clickButtonR2C3() {
    console.log("#row2-col3")
    c6.style.color = 'black'
    playClick();

    if (player == "X") {
        c6.innerHTML = "X"
        }
    else if (player == "O") {
        c6.innerHTML = "O"
    }
}

c6.addEventListener("click", clickButtonR2C3)

//=============Row3================



function clickButtonR3C1() {
    console.log("#row3-col1")
    c7.style.color = 'black'
    playClick();


    if (player == "X") {
        c7.innerHTML = "X"
        }
    else if (player == "O") {
        c7.innerHTML = "O"
    }
}

c7.addEventListener("click", clickButtonR3C1)

//=============================

function clickButtonR3C2() {
    console.log("#row3-col2")
    c8.style.color = 'black'
    playClick(); 

    if (player == "X") {
        c8.innerHTML = "X"
        }
    else if (player == "O") {
        c8.innerHTML = "O"
    }
}

c8.addEventListener("click", clickButtonR3C2)

//=============================



function clickButtonR3C3() {
    console.log("#row3-col3")
    c9.style.color = 'black'
    playClick();

    if (player == "X") {
        c9.innerHTML = "X"
        }
    else if (player == "O") {
        c9.innerHTML = "O"
    }
}

c9.addEventListener("click", clickButtonR3C3)
//========================================



//======Page Reload=====================

function reload() {
    playClick()
    location.reload();
    return false;
}
//============ win Function ===============


//was trying to Dry up my code 
// const cells = document.querySelectorAll('.cell')

// // console.log(outCome)
//  const possWins = [ 
//      //rows
//     [c1.innerHTML, c2.innerHTML, c3.innerHTML],
//     [c4.innerHTML, c5.innerHTML, c6.innerHTML],
//     [c7.innerHTML, c8.innerHTML, c9.innerHTML],

//     //columns
//     [c1.innerHTML, c4.innerHTML, c6.innerHTML],
//     [c2.innerHTML, c5.innerHTML, c8.innerHTML],
//     [c3.innerHTML, c6.innerHTML, c9.innerHTML],

//     //veticals
//     [c1.innerHTML, c5.innerHTML, c9.innerHTML],
//     [c3.innerHTML, c5.innerHTML, c6.innerHTML]
//  ]


//  const checkWin2 = window.setInterval(function(){

//    possWins.some((value) =>{
//        console.log(value)
       
//          possWins[i].every((value) => {
//             return value == x
//             } )

        



//    } )


// }, 250)




//====Check for Win condition?====================

const checkWin = window.setInterval(function(){
    //row 1 for X
    if (c1.innerHTML == "X" && c2.innerHTML  == "X" && c3.innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        //change colors to indicate where win occurred
        c1.style.backgroundColor = 'yellow'
        c2.style.backgroundColor = 'yellow'
        c3.style.backgroundColor = 'yellow'
        
        
    }

    //row 2 for X
    else if (c4.innerHTML  == "X" && c5.innerHTML == "X" && c6.innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        c4.style.backgroundColor = 'yellow'
        c5.style.backgroundColor = 'yellow'
        c6.style.backgroundColor = 'yellow'

    }

    //row 3 for X
    else if (c7.innerHTML == "X" && c8.innerHTML == "X" && c9.innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        c7.style.backgroundColor = 'yellow'
        c8.style.backgroundColor = 'yellow'
        c9.style.backgroundColor = 'yellow'

    }

    //column 1 for X
    else if (c1.innerHTML == "X" && c4.innerHTML == "X" && c7.innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        c1.style.backgroundColor = 'yellow'
        c4.style.backgroundColor = 'yellow'
        c7.style.backgroundColor = 'yellow'

    }

    //column 2 for x
    else if (c2.innerHTML == "X" && c5.innerHTML == "X" && c8.innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        c2.style.backgroundColor = 'yellow'
        c5.style.backgroundColor = 'yellow'
        c8.style.backgroundColor = 'yellow'

    }

    //column 3 for x
    else if (c3.innerHTML == "X" && c6.innerHTML == "X" && c9.innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        c3.style.backgroundColor = 'yellow'
        c6.style.backgroundColor = 'yellow'
        c9.style.backgroundColor = 'yellow'

    }

    //diagnol 1 for x
    else if (c1.innerHTML == "X" && c5.innerHTML == "X" && c9.innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        c1.style.backgroundColor = 'yellow'
        c5.style.backgroundColor = 'yellow'
        c9.style.backgroundColor = 'yellow'

    }

    //diagnol 2 for X
    else if (c3.innerHTML == "X" && c5.innerHTML == "X" && c7.innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        c3.style.backgroundColor = 'yellow'
        c5.style.backgroundColor = 'yellow'
        c7.style.backgroundColor = 'yellow'
    }

    //row 1 for O
    if (c1.innerHTML == "O" && c2.innerHTML == "O" && c3.innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        c1.style.backgroundColor = 'yellow'
        c2.style.backgroundColor = 'yellow'
        c3.style.backgroundColor = 'yellow'

    }

    //row 2 for O
    else if (c4.innerHTML == "O" && c5.innerHTML == "O" && c6.innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        c4.style.backgroundColor = 'yellow'
        c5.style.backgroundColor = 'yellow'
        c6.style.backgroundColor = 'yellow'

    }

    //row 3 for O
    else if (c7.innerHTML == "O" && c8.innerHTML == "O" && c9.innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        c7.style.backgroundColor = 'yellow'
        c8.style.backgroundColor = 'yellow'
        c9.style.backgroundColor = 'yellow'
    }

    //column 1 for O
    else if (c1.innerHTML == "O" && c4.innerHTML == "O" && c7.innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        c1.style.backgroundColor = 'yellow'
        c4.style.backgroundColor = 'yellow'
        c7.style.backgroundColor = 'yellow'

    }

    //column 2 for O
    else if (c2.innerHTML == "O" && c5.innerHTML == "O" && c8.innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        c2.style.backgroundColor = 'yellow'
        c5.style.backgroundColor = 'yellow'
        c8.style.backgroundColor = 'yellow'

    }

    //column 3 for O
    else if (c3.innerHTML == "O" && c6.innerHTML == "O" && c9.innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        c3.style.backgroundColor = 'yellow'
        c6.style.backgroundColor = 'yellow'
        c9.style.backgroundColor = 'yellow'

    }

    //diagnol 1 for O
    else if (c1.innerHTML == "O" && c5.innerHTML == "O" && c9.innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        c1.style.backgroundColor = 'yellow'
        c5.style.backgroundColor = 'yellow'
        c9.style.backgroundColor = 'yellow'

    }

    //diagnol 2 for O
    else if (c3.innerHTML == "O" && c5.innerHTML == "O" && c7.innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        c3.style.backgroundColor = 'yellow'
        c5.style.backgroundColor = 'yellow'
        c7.style.backgroundColor = 'yellow'
    }

   
}, 250)




