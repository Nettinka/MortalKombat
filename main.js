console.log('Let\'s start!');

const $arenas1 = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

function createElement(tag, className){
    const $tag = document.createElement(tag);
    if(className){
    $tag.classList.add(className);
    }
    return $tag;
}

const player1 = {
    player: 1,
    name: 'Cobra',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Gun', 'knife', 'bazuka'],
    attack: function(){
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    player: 2,
    name: 'Immortal',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Gun', 'knife', 'bazuka'],
    attack: function(){
        console.log(`${player2.name} Fight...`);
    }
}

function createPlayer(playerObj){
    const $player1 = createElement('div', 'player'+playerObj.player);

    const $progressbar = createElement('div', 'progressbar');
    
    const $life = createElement('div', 'life');
    
    $life.style.width = playerObj.hp + '%';
    $progressbar.appendChild($life);
    
    $player1.appendChild($progressbar);
    const $name = createElement('div', 'name');
    $name.innerText = playerObj.name;
    $progressbar.appendChild($name);

    const $character = createElement('div', 'character')

    const $img = createElement('img');
    $img.src = playerObj.img;
    $character.appendChild($img);
    
    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    return $player1;

}

$arenas1.appendChild(createPlayer(player1));
$arenas1.appendChild(createPlayer(player2));


function randomazer(){
    const i = Math.ceil(Math.random() * 20);
    return i;
}
function changeHP(player){
    const $playerLife = document.querySelector('.player' + player.player +' .life');
    player.hp -= randomazer();
    $playerLife.style.width = player.hp + '%';

    if(player.hp < 0){
        player.hp = 0;
        $randomButton.disabled = true;
        if(player1.hp > 0){
        $arenas1.appendChild(playerWin(player1.name));
        console.log(player1.name + '')
        } else if (player2.hp > 0){
            $arenas1.appendChild(playerWin(player2.name));
        }
    }
}

$randomButton.addEventListener('click', function(){
    console.log('Attack!');
    changeHP(player1);
    changeHP(player2);
    console.log(player1.hp);
});

function playerWin(namePlayer){
    const $winTitle = createElement('div', 'winTitle');
    $winTitle.innerText = namePlayer + ' WIN!';

    return $winTitle;
}

function playerLose(namePlayer){
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = namePlayer + ' lose';

    return $loseTitle;
}