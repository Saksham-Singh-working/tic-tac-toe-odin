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
    if((state[0][0] == state[1][1] && state[2][2] == state[1][1]) && state[1][1] != '-'){
        return state[1][1];;
    }
    
    if((state[0][2] == state[1][1] && state[2][0] == state[1][1]) && state[1][1] != '-'){
        return state[1][1];
    }
    let draw = true;
    let flat_state = state.flat()
    flat_state.forEach((element) => {
        if(element == "-"){
            draw = false;
        }
    });
    if(draw){
        return "draw";
    }

    return null;
}

function game(){
    while(true){
        let [row1, column1] = prompt(`${player1.name}, enter your choice (row column)`).split(" ");
        if (!isValidMove(row1, column1)) {
            alert("Invalid move. Try again.");
            continue;
        }
        player1.count++;
        state[+row1][+column1] = player1.marker;

        let result = checkWin();
        if (result !== null) {
            if (result === "draw") {
                alert("The game is a draw!");
            } else {
                alert(`${result} won the game!`);
            }
            break;
        }

        let [row2, column2] = prompt(`${player2.name}, enter your choice (row column)`).split(" ");
        if (!isValidMove(row2, column2)) {
            alert("Invalid move. Try again.");
            continue;
        }
        player2.count++;
        state[+row2][+column2] = player2.marker;

        result = checkWin();
        if (result !== null) {
            if (result === "draw") {
                alert("The game is a draw!");
            } else {
                alert(`${result} won the game!`);
            }
            break;
        }
    }
}

function isValidMove(row, column) {
    return row >= 0 && row < 3 && column >= 0 && column < 3 && state[row][column] === "-";
}

game()

