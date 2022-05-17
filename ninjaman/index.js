function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 0, 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];
var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi',
    3: 'onigiri',

}
var score = 0;
console.log("score= " + score);

function drawWorld() {
    var output = "";
    for (var row = 0; row < world.length; row++) {
        output += "<div class = 'row'>"
        for (var x = 0; x < world[row].length; x++) {
            output += "<div class = '" + worldDict[world[row][x]] + "'></div>"
        }
        output += "</div>"
    }

    document.getElementById('world').innerHTML = output;

}
drawWorld();

var ninjaman = {
    x: 1,
    y: 1,

}

function drawNinjaman() {
    document.getElementById('NinjaMan').style.top = ninjaman.y * 40 + 'px'
    document.getElementById('NinjaMan').style.left = ninjaman.x * 40 + 'px'
}
drawNinjaman();

var ghost = {
    x: 8,
    y: 6,
}

function drawghost() {
    document.getElementById('ghost').style.top = ghost.y * 40 + 'px'
    document.getElementById('ghost').style.left = ghost.x * 40 + 'px'
}
drawghost();

function moveghost() {
    var move = random(-1, 4);
    if (move === 0 && (world[ghost.y][ghost.x - 1] !== 1)) { //0 = left
        ghost.x--;
    } else if (move === 1 && (world[ghost.y][ghost.x + 1] !== 1)) { //1 = right
        ghost.x++;
    } else if (move === 2 && (world[ghost.y - 1][ghost.x] !== 1)) { //2 = up
        ghost.y--;
    } else if (move === 3 && (world[ghost.y + 1][ghost.x] !== 1)) { //3 = down
        ghost.y++;
    }
}

document.onkeydown = function (e) {
    if (e.keyCode === 37) { //derecha
        if (world[ninjaman.y][ninjaman.x - 1] !== 1) {
            ninjaman.x--;
        }
    }
    if (e.keyCode === 38) { //arriba
        if (world[ninjaman.y - 1][ninjaman.x] !== 1) {
            ninjaman.y--;
        }
    }
    if (e.keyCode === 39) { //izquierda
        if (world[ninjaman.y][ninjaman.x + 1] !== 1) {
            ninjaman.x++;
        }
    }
    if (e.keyCode === 40) { //abajo
        if (world[ninjaman.y + 1][ninjaman.x] !== 1) {
            ninjaman.y++;
        }
    }

    drawNinjaman()
    drawWorld()
}
*
function gameLoop() {
    drawNinjaman();
    drawghost();
    moveghost();
    drawghost();

    setTimeout(gameLoop, 750)
}
gameLoop();
a