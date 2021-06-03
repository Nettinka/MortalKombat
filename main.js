console.log('Hi');

const $arenas1 = document.querySelector('.arenas');

const $root = document.querySelector('.root');

const player1 = {
    name: 'Cobra',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Gun', 'knife', 'bazuka'],
    attack: function(){
        console.log(`${player1.name} Fight...`);
    }
}
const player2 = {
    name: 'Immortal',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Gun', 'knife', 'bazuka'],
    attack: function(){
        console.log(`${player2.name} Fight...`);
    }
}

function createPlayer(playerClass, player){
    const $player1 = document.createElement('div');
    $player1.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    
    $life.style.width = player.hp + '%';
    $progressbar.appendChild($life);
    
    $player1.appendChild($progressbar);
    const $name = document.createElement('div');
    $name.innerText = player.name;
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');
    const $img = document.createElement('img');
    $img.src = player.img;
    $character.appendChild($img);
    
    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    
    $arenas1.appendChild($player1);

    $root.appendChild($arenas1);
}
createPlayer('player1', player1);
createPlayer('player2', player2);
console.log(player1.attack());