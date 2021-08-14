let player = "null"

//================================

function winPlay(){
    let winAudio = new Audio("sound bytes/winsound.wav");
    winAudio.play();
}

function playClick() {
    let click = new Audio("sound bytes/click.wav");
    click.play();
}

//=========================================


//=====    O   =====

const buttonPlayer1 = document.querySelector("#playero")

function playerOne () {
    playClick();
    player = "O"
    let playerDisplay = document.getElementById("player-display");
playerDisplay.innerHTML = `It is now Player O's turn`
    console.log(player)

}

buttonPlayer1.addEventListener("click", playerOne)


//==========X


const buttonPlayer2 = document.querySelector("#playerx")

function playerTwo () {
    playClick();
    player = "X"
    let playerDisplay = document.getElementById("player-display");
playerDisplay.innerHTML = `It is now Player X's turn`
    console.log(player)

}

buttonPlayer2.addEventListener("click", playerTwo)



//=============Row1================

const buttonR1C1 = document.querySelector("#row1-col1")

function clickButtonR1C1() {
    // console.log('clickR1C1')
    console.log("#row1-col1")
    buttonR1C1.style.color = 'black'
    playClick();


    if (player == "X") {
    document.getElementById("row1-col1").innerHTML = "X"
    }
    else if (player == "O") {
        document.getElementById("row1-col1").innerHTML = "O"
    }
}    


buttonR1C1.addEventListener("click",clickButtonR1C1)

//=============================

const buttonR1C2 = document.querySelector("#row1-col2")

function clickButtonR1C2() {
    // console.log('clickR1C2')
    console.log("#row1-col2")
    document.querySelector('#row1-col2').style.color = 'black'
    playClick();

    if (player == "X") {
    document.getElementById("row1-col2").innerHTML = "X" }
    else if (player == "O") {
        document.getElementById("row1-col2").innerHTML = "O"
    }
}

buttonR1C2.addEventListener("click", clickButtonR1C2)

//=============================

const buttonR1C3 = document.querySelector("#row1-col3")

function clickButtonR1C3() {
    //console.log('clickR1C3')
    console.log("#row1-col3")
    document.querySelector('#row1-col3').style.color = 'black'
    playClick();

    if (player == "X") {
    document.getElementById("row1-col3").innerHTML = "X"
    }
    else if (player == "O") {
        document.getElementById("row1-col3").innerHTML = "O"
    }
}

buttonR1C3.addEventListener("click", clickButtonR1C3)

//=============Row2================

const buttonR2C1 = document.querySelector("#row2-col1")

function clickButtonR2C1() {
    //console.log('clickR2C1')
    console.log("#row2-col1")
    document.querySelector('#row2-col1').style.color = 'black'
    playClick();

    if (player == "X") {
        document.getElementById("row2-col1").innerHTML = "X"
        }
    else if (player == "O") {
        document.getElementById("row2-col1").innerHTML = "O"
    }
}

buttonR2C1.addEventListener("click", clickButtonR2C1)

//=============================

const buttonR2C2 = document.querySelector("#row2-col2")

function clickButtonR2C2() {
    //console.log('clickR2C2')
    console.log("#row2-col2")
    document.querySelector('#row2-col2').style.color = 'black'
    playClick();

    if (player == "X") {
        document.getElementById("row2-col2").innerHTML = "X"
        }
    else if (player == "O") {
        document.getElementById("row2-col2").innerHTML = "O"
    }
}

buttonR2C2.addEventListener("click", clickButtonR2C2)

//=============================

const buttonR2C3 = document.querySelector("#row2-col3")

function clickButtonR2C3() {
    //console.log('clickR2C3')
    console.log("#row2-col3")
    document.querySelector('#row2-col3').style.color = 'black'
    playClick();

    if (player == "X") {
        document.getElementById("row2-col3").innerHTML = "X"
        }
    else if (player == "O") {
        document.getElementById("row2-col3").innerHTML = "O"
    }
}

buttonR2C3.addEventListener("click", clickButtonR2C3)

//=============Row3================

const buttonR3C1 = document.querySelector("#row3-col1")

function clickButtonR3C1() {
    //console.log('clickR3C1')
    console.log("#row3-col1")
    document.querySelector('#row3-col1').style.color = 'black'
    playClick();


    if (player == "X") {
        document.getElementById("row3-col1").innerHTML = "X"
        }
    else if (player == "O") {
        document.getElementById("row3-col1").innerHTML = "O"
    }
}

buttonR3C1.addEventListener("click", clickButtonR3C1)

//=============================

const buttonR3C2 = document.querySelector("#row3-col2")

function clickButtonR3C2() {
    //console.log('clickR3C2')
    console.log("#row3-col2")
    document.querySelector('#row3-col2').style.color = 'black'
    playClick(); 

    if (player == "X") {
        document.getElementById("row3-col2").innerHTML = "X"
        }
    else if (player == "O") {
        document.getElementById("row3-col2").innerHTML = "O"
    }
}

buttonR3C2.addEventListener("click", clickButtonR3C2)

//=============================

const buttonR3C3 = document.querySelector("#row3-col3")

function clickButtonR3C3() {
    //console.log('clickR3C3')
    console.log("#row3-col3")
    document.querySelector('#row3-col3').style.color = 'black'
    playClick();

    if (player == "X") {
        document.getElementById("row3-col3").innerHTML = "X"
        }
    else if (player == "O") {
        document.getElementById("row3-col3").innerHTML = "O"
    }
}

buttonR3C3.addEventListener("click", clickButtonR3C3)
//========================================



//======Page Reload=====================

function reload() {
    playClick()
    location.reload();
    return false;
}
//============ win Function ===============


//====Check for Win condition?====================

const checkWin = window.setInterval(function(){
    //row 1 for X
    if (document.getElementById("row1-col1").innerHTML == "X" && document.getElementById("row1-col2").innerHTML  == "X" && document.getElementById("row1-col3").innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        //change colors to indicate where win occurred
        document.querySelector('#row1-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row1-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row1-col3').style.backgroundColor = 'yellow'
        
        
    }

    //row 2 for X
    else if (document.getElementById("row2-col1").innerHTML  == "X" && document.getElementById("row2-col2").innerHTML == "X" && document.getElementById("row2-col3").innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row2-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col3').style.backgroundColor = 'yellow'

    }

    //row 3 for X
    else if (document.getElementById("row3-col1").innerHTML == "X" && document.getElementById("row3-col2").innerHTML == "X" && document.getElementById("row3-col3").innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row3-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col3').style.backgroundColor = 'yellow'

    }

    //column 1 for X
    else if (document.getElementById("row1-col1").innerHTML == "X" && document.getElementById("row2-col1").innerHTML == "X" && document.getElementById("row3-col1").innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row1-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col1').style.backgroundColor = 'yellow'

    }

    //column 2 for x
    else if (document.getElementById("row1-col2").innerHTML == "X" && document.getElementById("row2-col2").innerHTML == "X" && document.getElementById("row3-col2").innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row1-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col2').style.backgroundColor = 'yellow'

    }

    //column 3 for x
    else if (document.getElementById("row1-col3").innerHTML == "X" && document.getElementById("row2-col3").innerHTML == "X" && document.getElementById("row3-col3").innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row1-col3').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col3').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col3').style.backgroundColor = 'yellow'

    }

    //diagnol 1 for x
    else if (document.getElementById("row1-col1").innerHTML == "X" && document.getElementById("row2-col2").innerHTML == "X" && document.getElementById("row3-col3").innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row1-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col3').style.backgroundColor = 'yellow'

    }

    //diagnol 2 for X
    else if (document.getElementById("row1-col3").innerHTML == "X" && document.getElementById("row2-col2").innerHTML == "X" && document.getElementById("row3-col1").innerHTML == "X") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player X Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row1-col3').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col1').style.backgroundColor = 'yellow'
    }

    //row 1 for O
    if (document.getElementById("row1-col1").innerHTML == "O" && document.getElementById("row1-col2").innerHTML == "O" && document.getElementById("row1-col3").innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row1-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row1-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row1-col3').style.backgroundColor = 'yellow'

    }

    //row 2 for O
    else if (document.getElementById("row2-col1").innerHTML == "O" && document.getElementById("row2-col2").innerHTML == "O" && document.getElementById("row2-col3").innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row2-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col3').style.backgroundColor = 'yellow'

    }

    //row 3 for O
    else if (document.getElementById("row3-col1").innerHTML == "O" && document.getElementById("row3-col2").innerHTML == "O" && document.getElementById("row3-col3").innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row3-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col3').style.backgroundColor = 'yellow'
    }

    //column 1 for O
    else if (document.getElementById("row1-col1").innerHTML == "O" && document.getElementById("row2-col1").innerHTML == "O" && document.getElementById("row3-col1").innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row1-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col1').style.backgroundColor = 'yellow'

    }

    //column 2 for O
    else if (document.getElementById("row1-col2").innerHTML == "O" && document.getElementById("row2-col2").innerHTML == "O" && document.getElementById("row3-col2").innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row1-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col2').style.backgroundColor = 'yellow'

    }

    //column 3 for O
    else if (document.getElementById("row1-col3").innerHTML == "O" && document.getElementById("row2-col3").innerHTML == "O" && document.getElementById("row3-col3").innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row1-col3').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col3').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col3').style.backgroundColor = 'yellow'

    }

    //diagnol 1 for O
    else if (document.getElementById("row1-col1").innerHTML == "O" && document.getElementById("row2-col2").innerHTML == "O" && document.getElementById("row3-col3").innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row1-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row3-col3').style.backgroundColor = 'yellow'

    }

    //diagnol 2 for O
    else if (document.getElementById("row1-col3").innerHTML == "O" && document.getElementById("row2-col2").innerHTML == "O" && document.getElementById("row3-col1").innerHTML == "O") {
        winPlay();
        document.getElementById("directions").innerHTML = "Player O Wins!" 
        window.clearInterval(checkWin)
        document.querySelector('#row3-col1').style.backgroundColor = 'yellow'
        document.querySelector('#row2-col2').style.backgroundColor = 'yellow'
        document.querySelector('#row1-col3').style.backgroundColor = 'yellow'
    }

   
}, 250)




