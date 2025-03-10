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
    let clickables = Array.from(document.querySelectorAll(".container > div"));
    let heading = document.querySelector(".heading");
    let turn = "Player 1";
    clickables.forEach((element) => {
        element.addEventListener("click", () => {
            let styles = window.getComputedStyle(element);
            let class_value = element.getAttribute("class");
            let [row, column] = class_value.split("_");
            if(element.textContent === ""){
                if(turn == "Player 1"){
                    element.textContent = player1.marker;
                    state[row][column] = player1.marker;
                    turn = "Player 2";
                    result = checkWin();
                    if(result !== null){
                        if(result == "draw"){
                            heading.textContent = "Draw!";
                        }
                        else{
                            let winner = ""
                            if(result == "X"){
                                winner = player1.name;
                            }
                            else{
                                winner = player2.name;
                            }
                            heading.textContent = `${winner} wins!`
                        }
                    }
                }
                else{
                    element.textContent = player2.marker;
                    state[row][column] = player2.marker;
                    turn = "Player 1";
                    result = checkWin();
                    if(result !== null){
                        if(result == "draw"){
                            heading.textContent = "Draw!";
                        }
                        else{
                            let winner = ""
                            if(result == "X"){
                                winner = player1.name;
                            }
                            else{
                                winner = player2.name;
                            }
                            heading.textContent = `${winner} wins!`
                        }
                    }
                }
            }
        });
    })
}

