const startGame =() =>{
    enterName()
    showBtn()
}

const showBtn =() =>{
    document.getElementById('endgameBtn').classList.remove('hidden')
    document.getElementById('rolldiceBtn').classList.remove('hidden')
    document.getElementById('startgameBtn').classList.add('hidden')

}
const Play =() =>{
    var playerScore = genRadomNo()
    var compScore = genCompNo()
    playerScore
    compScore
    winner(playerScore, compScore)
}

const enterName=()=>{
    let name = prompt("enter Name Player")
    let player = document.getElementById('player_name')
    player.innerHTML = name +   `<hr>`
    console.log(name)
}

const endGame = ()=>{
    location.reload()
}

const genRadomNo =() =>{
    let playerNo = Math.floor(Math.random() * 6)
    console.log("player score : " + playerNo)
    document.getElementById('player_dice_no').innerHTML=playerNo
    return playerNo
}

const genCompNo =() =>{
    let compNo = Math.floor(Math.random() * 6)
    console.log("comp score : " + compNo)
    document.getElementById('comp_dice_no').innerHTML=compNo
}

const winner =(playerScore, compScore) =>{
    if (playerScore > compScore){
        console.log("Player Wins!")
    }
    else if(compScore> playerScore) {
        console.log("Comp Wins!")
    }
    else {
        console.log("Draw")
    }
}