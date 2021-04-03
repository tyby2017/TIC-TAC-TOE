const cells = [...document.querySelectorAll('.cell')];
let xTurn = true;
const X = 'X';
const O = 'O';
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


cells.forEach(cell => {
    cell.addEventListener('click', handleClick, {once:true});
});

function handleClick(e) {
    const cell = e.target;
    const currentMark = xTurn ? X : O;
    cell.innerHTML = currentMark;
    const currentMarks = [];
    cells.forEach(cell => {
        if(cell.innerHTML === currentMark)
        {
            currentMarks.push(Number(cell.getAttribute('id')));
        }
    });

    if(checkWin(currentMarks)) {
        const winner = currentMark;
        displayResult(`Winner is ${winner}`);
        
    }
    else if(checkFullBoard()) {
        displayResult('Draw');
    }
    changeTurn();
}

function checkWin(currentMarks) {
        for(let i=0;i<WINNING_COMBINATIONS.length;i++) {
            let winner = true;
            for(let j=0;j<WINNING_COMBINATIONS[i].length;j++)
            {
                if(!currentMarks.includes(WINNING_COMBINATIONS[i][j]))
                {
                    winner = false;
                }
            }
            if(winner){
                return true;
            }            
        }        
}

function changeTurn() {
    xTurn = !xTurn;
}

function checkFullBoard() {
    return cells.every(cell => {
        return cell.innerHTML != '';
    });
}

function displayResult(string) {
    const reveal = document.querySelector('.hidden');
    const h2 = document.createElement('h1');
    h2.textContent = string;
    const restart = document.querySelector('#restart');    
    reveal.insertBefore(h2,restart);
    reveal.classList.add('result');
    setRestart(restart);
}

function setRestart(restart) {
    restart.addEventListener('click',() => location.reload())
}





