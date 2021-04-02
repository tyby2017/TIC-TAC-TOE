const cells = [...document.querySelectorAll('.cell')];
let xTurn = true;
const X = 'X';
const O = 'O';

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, {once:true});
});

function handleClick(e) {
    const cell = e.target;
    xTurn ? cell.innerHTML = X : cell.innerHTML = O;
    xTurn = !xTurn;
}