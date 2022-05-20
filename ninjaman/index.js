var world = document.querySelector("#world")
function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var NinjaMan = 450, NinjaMan = 100, direction = 'down', step = 1;

var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, 0, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4),random(-1, 4), 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi',
    3: 'onigiri'
}

function drawWorld() {
    output = "";
    for (var row = 0; row < world.length; row++) {
        output += " <div class = 'row' >"
        for (var x = 0; x < world[row].length; x++) {
            output += "<div class = '" + worldDict[
                world[row][x]] + "'></div>"
        }
        output += "</div>"
    }
    document.getElementById('world').innerHTML =
        output;
}

drawWorld();

var NinjaMan = {
    x: 1,
    y: 1
}
var Pinky = {
    x: 7,
    y: 7
}

var Red = {
    x: 8,
    y: 8
}
var Pumpky = {
    x: 9,
    y: 3
}
var Bluey = {
    x: 12,
    y: 12
}
var Puntaje = 0;

var Vidas = 3;

function drawNinjaMan() {

    document.getElementById('NinjaMan').style.top =
        NinjaMan.y * 40 + 'px'
    document.getElementById('NinjaMan').style.left =
        NinjaMan.x * 40 + 'px'
}
drawNinjaMan();
function drawPumpky() {
    document.getElementById("Pumpky").style.top = Pumpky.y * 40 + 'px'
    document.getElementById("Pumpky").style.left = Pumpky.x * 40 + 'px'
}
drawPumpky()

function drawBluey() {
    document.getElementById("Bluey").style.top = Bluey.y * 40 + 'px'
    document.getElementById("Bluey").style.left = Bluey.x * 40 + 'px'
}
drawBluey()

function drawPinky() {
    document.getElementById("Pinky").style.top = Pinky.y * 40 + 'px'
    document.getElementById("Pinky").style.left = Pinky.x * 40 + 'px'
}
drawPinky()

function drawRed() {
    document.getElementById("Red").style.top = Red.y * 40 + 'px'
    document.getElementById("Red").style.left = Red.x * 40 + 'px'
}
drawRed()


document.onkeydown = function (e) {
    if (e.keyCode == 37) {
        if (world[NinjaMan.y][NinjaMan.x - 1] != 1) {
            NinjaMan.x--;
        }
    }

    if (e.keyCode == 38) {
        if (world[NinjaMan.y - 1][NinjaMan.x] != 1) {
            NinjaMan.y--;
        }
    }

    if (e.keyCode == 39) {
        if (world[NinjaMan.y][NinjaMan.x + 1] != 1) {
            NinjaMan.x++;
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

drawWorld();
drawBluey();
drawPinky();
drawPumpky();
drawRed();
