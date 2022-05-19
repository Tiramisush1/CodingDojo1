var world = document.querySelector("#world")
function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var NinjaMan = 450, NinjaMan = 100, direction = 'down', step = 1;

var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
    y: 9
}
var Bluey = {
    x: 11,
    y: 10
}

function drawNinjaMan() {

    document.getElementById('NinjaMan').style.top =
        NinjaMan.y * 40 + 'px'
    document.getElementById('NinjaMan').style.left =
        NinjaMan.x * 40 + 'px'


}

drawNinjaMan();
drawMovEnemigos();


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
    //add going down functionality
    world[NinjaMan.y][NinjaMan.x] = 0;
    drawNinjaMan()
    drawWorld()
}

function drawMovEnemigos() {

    //pinky
    document.getElementById('Pinky').style.top = Pinky.y * 40 + 'px'
    document.getElementById('Pinky').style.left = Pinky.x * 40 + 'px'
    //red
    document.getElementById('Red').style.top = Red.y * 40 + 'px'
    document.getElementById('Red').style.left = Red.x * 40 + 'px'
    //bluey
    document.getElementById('Bluey').style.top = Bluey.y * 40 + 'px'
    document.getElementById('Bluey').style.left = Bluey.x * 40 + 'px'
    //pump
    document.getElementById('Pumpky').style.top = Pumpky.y * 40 + 'px'
    document.getElementById('Pumpky').style.left = Pumpky.x * 40 + 'px'




}

var x = document.getElementById("red");



function MovEnemigos() {
    var x = 0;
    var direc = 37;

    while (x < 10000) {

        if (direc == 37) {
            direc = 38;
        }

        else if (direc == 38) {
            direc = 39;

        }

        else if (direc == 39) {
            direc = 40;
        }
        else {
            direc = 37;
        }

        if (direc == 37) {
            if (world[Pinky.y][Pinky.x - 1] != 1) {
                Pinky.x--;
            }
        }

        if (direc == 38) {
            if (world[Pinky.y - 1][Pinky.x] != 1) {
                Pinky.y--;
            }
        }

        if (direc == 39) {
            if (world[Pinky.y][Pinky.x + 1] != 1) {
                NinjaMan.x++;
            }
        }

        if (direc == 40) {
            if (world[Pinky.y + 1][Pinky.x] != 1) {
                Pinky.y++;
            }

        }

        console.log(Pinky.y);
        console.log(Pinky.x);


        world[Pinky.y][Pinky.x] = 0;
        drawMovEnemigos()
        drawWorld()

        x = x + 50;


    }


}