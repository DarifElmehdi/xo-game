const gameContainer = document.getElementById("game");
const winner = document.getElementById("winner");
const restart = document.getElementById("restart");
const congratsPopUp = document.getElementById("popup");
const cases = gameContainer.children;
let activePlayer = "X";
const matrix = ["", "", "", "", "", "", "", "", ""];

restart.addEventListener("click", () => {
    congratsPopUp.close();
    prepareGame(matrix, cases);
});
// Functions
const prepareGame = (matrix, cases) => {
    for (let index = 0; index < matrix.length; index++) {
        matrix[index] = "";
        cases[index].innerHTML = "";
        cases[index].disabled = false;
    }
};

const move = async (index) => {
    cases[index].innerHTML = activePlayer;
    matrix[index] = activePlayer;
    cases[index].disabled = true;
    checkWinner();
    switchPlayer();
};

const switchPlayer = () => {
    switch (activePlayer) {
        case "X":
            activePlayer = "O";
            break;
        case "O":
            activePlayer = "X";
            break;
        default:
            break;
    }
};

const compare = (i, j, k, str) => {
    return (
        matrix[i] != "" &&
        matrix[j] != "" &&
        matrix[k] != "" &&
        matrix[i] == matrix[j] &&
        matrix[j] == matrix[k]
    );
};

const congrats = (player) => {
    winner.innerHTML = player;
    congratsPopUp.showModal();
    console.log("we got a winner : " + player);
};

const checkWinner = () => {
    if (compare(0, 3, 6, activePlayer)) {
        congrats(activePlayer);
    } else if (compare(1, 4, 7, activePlayer)) {
        congrats(activePlayer);
    } else if (compare(2, 5, 8, activePlayer)) {
        congrats(activePlayer);
    } else if (compare(0, 1, 2, activePlayer)) {
        congrats(activePlayer);
    } else if (compare(3, 4, 5, activePlayer)) {
        congrats(activePlayer);
    } else if (compare(6, 7, 8, activePlayer)) {
        congrats(activePlayer);
    } else if (compare(0, 4, 8, activePlayer)) {
        congrats(activePlayer);
    } else if (compare(2, 4, 6, activePlayer)) {
        congrats(activePlayer);
    }
};

for (let index = 0; index < cases.length; index++) {
    cases[index].addEventListener("click", () => {
        move(index);
    });
}
