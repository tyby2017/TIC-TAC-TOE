const Gameboard = (() => {
    let gameboard = [['x','0','x'],['x','0','x'],['x','0','x']];
    function renderGameboard() {
        const container = document.querySelector('#container');
        let counter = 0;
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                let p = document.createElement('p');
                p.innerHTML = gameboard[i][j];
                container.appendChild(p);
            }
            const br = document.createElement('br');
            container.appendChild(br);
        }        
    }
    return {
        renderGameboard,
    }
    
})();

const PlayerFactory = name => {

}

const DisplayController = () => {

}

Gameboard.renderGameboard();