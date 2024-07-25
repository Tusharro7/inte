console.log("Wellcome !");
let turn = "X";
let gameover = false;
// const txt = document.getElementsByClassName("txt");
var changeTurn = () => {
    return turn === "X" ? "O" : "X";
}
const checkWin = () => {
    let txt = document.getElementsByClassName("txt");
    let win =
        [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
    win.forEach(t => {
        if ((txt[t[0]].innerText === txt[t[1]].innerText) && (txt[t[2]].innerText === txt[t[1]].innerText) && (txt[t[0]].innerText !== "")) {

            document.querySelector('.info').innerText = txt[t[0]].innerText + "  IS WINNER ";
            gameover = true;

        }
    })
}





let box = document.getElementsByClassName("box");
Array.from(box).forEach(element => {
    let txt = element.querySelector(".txt");
    element.querySelector('.txt');
    element.addEventListener('click', () => {
        if (txt.innerText === '') {
            txt.innerText = turn;
            turn = changeTurn();
            checkWin();
            console.log("clicked");
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = " turn for " + turn;
            }

        }
    })
})



let restart = document.querySelector('#restart');

restart.addEventListener('click', () => {
    let box = document.querySelectorAll(".txt");
    Array.from(box).forEach(element => {
        element.innerText = " ";

    });
    //    turn =" X" ;
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = " turn for " + turn;

})
















