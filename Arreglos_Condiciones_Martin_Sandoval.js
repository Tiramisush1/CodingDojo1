function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

/*
Variable              Datos
authContactInfo       ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]
*/

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}

/*
variables         datos
produce      =    ["manzanas", "naranjas"]
frozen       =    ["brocoli", "helado"]
                      ["brocoli", "helado", "croqueta de papa"]
*/

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

/*
variable           datos
movieLibrary      ["Bambi", "E.T.", "Toy Story"]
                  ["Bambi", "E.T.", "Toy Story", "Zoro"]
                  ["Bambi", "Beetlejuice", "Toy Story", "Zoro"]
*/