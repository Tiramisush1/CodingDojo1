var player = {
    left: 1,
    top: 620
}

var enemies = [
    {left: 350, top: 200},
    {left: 150, top: 220},
    {left: 700, top: 220}
]

function drawPlayer(){
    content = "<div class='player' style='left:"+player.left+"px; top:"+player.top+"px'></div>";
    document.getElementById("players").innerHTML = content;
}
drawPlayer();

function drawEnemies(){
    content = "";
    console.log(enemies);
    for(var idx=0; idx<enemies.length; idx++){
        content += "<div class='enemy' style='left:"+enemies[idx].left+"px; top:"+enemies[idx].top+"px'></div>";
    }
    document.getElementById("enemies").innerHTML = content;
}
drawEnemies();


document.onkeydown = function(e) {
    console.log(e);
    if(e.keyCode == 37 && player.left){ // left
        player.left = player.left - 10;
    }
    if(e.keyCode == 39 && player.left){ // right
        player.left = player.left + 10;
    }
    if(e.keyCode == 38 && player.top > 500){ // UP
        player.top = player.top - 10;
    }
    if(e.keyCode == 40 && player.top < 625){ // DOWN
        player.top = player.top + 10;
    }
    drawPlayer();
}
