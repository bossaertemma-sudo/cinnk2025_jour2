console.log("✅script.js chargé")

let nombre1 = document.getElementById("nombre1")

let nombre2 = document.getElementById("nombre2")

let boutonAdd = document.getElementById("add")

let divResultat = document.getElementById("resultat");

boutonAdd.addEventListener("click", function () {
    let resultat = Number(nombre1.value) + Number(nombre2.value);
    divResultat.innerText = "Le resultat est " + resultat;
}) ;


let nombre1x = document.getElementById("nombre1x")

let nombre2x = document.getElementById("nombre2x")

let boutonMultiply = document.getElementById("multiply")

let divResultatx = document.getElementById("resultatx");

boutonMultiply.addEventListener("click", function () {
    let resultatx = Number(nombre1x.value) * Number(nombre2x.value);
    divResultatx.innerText = "Le resultat est " + resultatx;
}) ;

let nombre1d = document.getElementById("nombre1d")

let nombre2d = document.getElementById("nombre2d")

let boutonDivide = document.getElementById("divide")

let divResultatd = document.getElementById("resultatd");

boutonDivide.addEventListener("click", function () {
    let resultatd = Number(nombre1d.value) / Number(nombre2d.value);
    divResultatd.innerText = "Le resultat est " + resultatd;
}) ;

boutonDivide.addEventListener("click", function () {
const valuenb1d = Number(nombre1d.value) ;
const valuenb2d = Number(nombre2d.value) ;



    if  (valuenb1d === 0 || valuenb2d === 0 ) {
    divResultatd.innerText = "Error (division par 0)";

     } else {
    const resultatd = valuenb1d  / valuenb2d;
    divResultatd.innerText = "Le resultat est " + resultatd;
}

});