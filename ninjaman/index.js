function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var NinjaMan = 450, NinjaMan = 100, direction = 'down', step = 1;

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

var NinjaMan = {
    x: 1,
    y: 1,

}
function drawNinjaMan() {
    document.getElementById("NinjaMan").style.top = NinjaMan.y * 40 + "px";
    document.getElementById("NinjaMan").style.left = NinjaMan.x * 40 + "px";
}
drawNinjaMan()

    document.onkeydown = function (e) {
        if (e.keyCode == 37) {
            if (world[NinjaMan.y][NinjaMan.x - 1] != 1) {
                NinjaMan.x--;
            }
        }
        if (e.keyCode == 39) {
            if (world[NinjaMan.y][NinjaMan.x + 1] != 1) {
                NinjaMan.x++;
            }
        }
        if (e.keyCode == 38) {
            if (world[NinjaMan.y - 1][NinjaMan.x] != 1) {
                NinjaMan.y--;
            }
        }
        if (e.keyCode == 40) {
            if (world[NinjaMan.y + 1][NinjaMan.x] != 1) {
                NinjaMan.y++;
            }
        }
        world[NinjaMan.y][NinjaMan.x] = 0;
        drawNinjaMan()
        drawWorld()
    }
        *
        function gameLoop() {
            drawNinjaMan();

        }
    setTimeout(gameLoop, 750)

gameLoop();
drawNinjaMan();
drawWorld();