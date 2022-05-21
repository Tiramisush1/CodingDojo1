var player = {
    left: 10,
    top: 620
}

var enemies = [
    {left: 700, top: 10},
    {left: 300, top: 30},
    {left: 120, top: 100},
]

var missiles = []

    function drawPlayer(){
        content = "<div class='player' style='left:"+player.left+"px; top:"+player.top+"px'></div>";
        document.getElementById("player").innerHTML = content;
}

function drawEnemies(){
    content = "";
    for(var idx=0; idx<enemies.length; idx++){
        content += "<div class='enemy' style='left:"+enemies[idx].left+"px; top:"+enemies[idx].top+"px'></div>";
    }
    document.getElementById("enemies").innerHTML = content;
}

function drawMissiles(){
    content = "";
    for(var idx=0; idx<missiles.length; idx++){
        content += "<div class='missiles' style='left:"+missiles[idx].left+"px; top:"+missiles[idx].top+"px'></div>"
    }
    document.getElementById("missiles").innerHTML = content;
}

function moveEnemies(){
    for(var idx=0; idx < enemies.length; idx++){
        enemies[idx].top = enemies[idx++].top + 1;
    }
}

function moveMissiles(){
    for(var idx=0; idx<missiles.length; idx++){
        missiles[idx].top = missiles[idx].top - 2;
    }
}

document.onkeydown = function(e) {
    console.log(e);
    if(e.keyCode == 37 && player.left > 10){ // left
        player.left = player.left - 10;
    }
    if(e.keyCode == 39 && player.left < 839){ // right
        player.left = player.left + 10;
    }
    if(e.keyCode == 38 && player.top > 500){ // UP
        player.top = player.top - 10;
    }
    if(e.keyCode == 40 && player.top < 625){ // DOWN
        player.top = player.top + 10;
    }
    if(e.keyCode == 32){
        missiles.push({left: player.left + 34, top: player.top - 8})
        drawMissiles();
    }
    drawPlayer();
}
function gameLoop(){
    console.log('gameLoop funciona')
    drawPlayer();
    
    moveEnemies();
    drawEnemies();
    moveMissiles();
    drawMissiles();

    setTimeout(gameLoop, 10)
}
gameLoop();
