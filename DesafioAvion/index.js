var player = {
    left: 10,
    top: 620
}

var enemies = [
    {left: 700, top: 10},
    {left: 300, top: 30},
    {left: 120, top: 100},
    {left: 100, top: 290}
]

var missiles = []

    function drawPlayer(){
        content = "<div class='player' style='left:"+player.left+"px; top:"+player.top+"px'></div>";
        document.getElementById("player").innerHTML = content;
}

function drawEnemies() {
    content = "";
    for(var i=0; i<enemies.length; i++) {
        content += "<div class='enemy' style='left: "+enemies[i].left+"px; top: "+enemies[i].top+"px'></div>";
    }
    document.getElementById("enemies").innerHTML = content;
}
function drawMissiles() {
    content = "";
    for(var i=0; i<missiles.length; i++) {
        content += "<div class='missiles' style='left: "+missiles[i].left+"px; top: "+missiles[i].top+"px'></div>";
    }
    document.getElementById("missiles").innerHTML = content;
}

function moveEnemies() {
    for(var i=0; i<enemies.length; i++) {
        enemies[i].top += 1;
    }
}

function moveMissiles() {
    for(var i=0; i<missiles.length; i++) {
        missiles[i].top -= 1;
    }
}


///mov
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
    if(e.keyCode == 32){ //disparo
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
