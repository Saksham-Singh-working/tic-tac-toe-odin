let state = [
    ["-","-","-"],
    ["-","-","-"],
    ["-","-","-"]
];


function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.count = 0;
}
let player1 = new Player("Saksham", "X");
let player2 = new Player("Sakshi", "O");


function checkWin(){
    for(let i = 0;i < 3;i++){
        if((state[i][0] == state[i][1] && state[i][1] == state[i][2]) && state[i][0] != '-'){
            return state[i][0];
        }
    }
    for(let i = 0;i < 3;i++){
        if((state[0][i] == state[1][i] && state[1][i] == state[2][i]) && state[0][i] != '-'){
            return state[0][i];
        }
    }
    if((state[0][0] == state[1,1] && state[2,2] == state[1][1]) && state[1][1] != '-'){
        return state[1][1];;
    }
    
    if((state[0][2] == state[1,1] && state[2,0] == state[1][1]) && state[1][1] != '-'){
        return state[1][1];
    }
    if(player1.count == player2.count){
        return "draw";
    }
    return null;
}

function game(){
    while(true){
        let {row1, column1} = prompt(`${player1.name}, enter your choice`).split(" ");
        player1.count++;
        let {row2, column2} = prompt(`${player2.name}, enter your choice`).split(" ");
        player2.count++;
        state[row1][column1] = player1.marker;
        state[row2][column2] = player2.marker;
        let result = checkWin();
        if(result === null){
            continue
        }
        else if(result == "draw"){
            alert("The game is a draw!");
            break;
        }
        else{
            alert(`${result} won the game!`);
            break;
        }
    }
}