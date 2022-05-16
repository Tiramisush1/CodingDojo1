var world = [
    [1, 1, 1, 1, 1],
    [1, 0, 2, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
];
var worldDict = {
    0: "blank",
    1: "wall",
    2: "sushi",
    3: "onigiri"
}

function drawWorld() {
    var output = "";

    for (var row = 0; row < world.length; row++) {
        output += "<div class = 'row'></div>"
        for (var x = 0; x < world[row].length; x++) {
            output += "<div class = '" + worldDict[
                world[row][x]] + "'></div>"
        }
        output += "</div>"
    }
    document.getElementById("world").innerHTML = output;
}
drawWorld(); {
    var ninjaman = {
        x: 1,
        y: 1
    }

    function drawNinjaman() {
        document.getElementById('NinjaMan').style.top =
            ninjaman.y * 40 + 'px'
        document.getElementById('NinjaMan').style.left =
            ninjaman.x * 40 + 'px'
    }
}

drawNinjaman();
switch (e.keyCode){
    case 37:
    if(map[ninjaman.top] [ninjaman.left - 1] != 0){
        ninjaman.left--;
    }
    break;
case 39:
    if (map[ninjaman.top] [ninjaman.left + 1] !== 0){
        ninjaman.left++;
    }
    break;
case 38:
        if (map[ninjaman.top - 1] [ninjaman.left] !== 0){
            ninjaman.top++;
        }
    break;
case 40:
    if (map[ninjaman.top + 1] [ninjaman.left] !== 0){
        ninjaman.top++;
    }
}
    world[ninjaman.y] [ninjaman.x] = 0;
    drawNinjaman();
    drawWorld();