console.log('Hi');
const box = document.getElementById('box');
const $arenas = document.createElement('div');
$arenas.classList.add('arenas');
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

function createPlayer(player1){
    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.innerText = player1.hp;
    $life.style.width = '100%';
    $progressbar.appendChild($life);
    
    $player1.appendChild($progressbar);
    const $name = document.createElement('div');
    $name.innerText = player1.name;
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');
    const $img = document.createElement('img');
    $img.src = player1.img;
    $character.appendChild($img);
    
    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    
    $arenas.appendChild($player1);

    
    $root.appendChild($arenas);
}
createPlayer(player1);
createPlayer(player2);
console.log(player1.attack());