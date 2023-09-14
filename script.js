const DICCIONARIO = ["APPLE", "HOUSE", "CLOWN", "ROBOT"];
let random = Math.floor(Math.random() * DICCIONARIO.length);
const PALABRA = DICCIONARIO[random];

const API = "https://random-word-api.vercel.app/api?words=1&length=5";

fetch (API)
    .then((response)=> response.json())
    .then((response) => {
        PALABRA = response[0].toUpperCase;
    })
let cantIntentos = 6;

const BUTTON = document.getElementById("guess-button");

BUTTON.addEventListener("click", () => {
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
     let row = document.createElement("div");
     row.className = "row";
    if (INTENTO === PALABRA){
        terminar("GANASTE");
    }
    for ( let i in PALABRA) {
        if (PALABRA[i] === INTENTO[i]) {
            let cuadroLetra = armarLetra(INTENTO[i], "green");
            row.appendChild(cuadroLetra);
        }else if (PALABRA.includes(INTENTO[i])) {
            let cuadroLetra = armarLetra(INTENTO[i], "yellow");
            row.appendChild(cuadroLetra);
        } else{
            let cuadroLetra = armarLetra(INTENTO[i], "gray");
            row.appendChild(cuadroLetra);
        }
        cantIntentos--;
        }
    GRID.appendChild(row);
    if (cantIntentos == 0){
        terminar("PERDISTE");
    }
});
function leerIntento(){
        let intento = document.getElementById("guess-input");
        intento = intento.value;
        intento = intento.toUpperCase(); 
        return intento;
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
function armarLetra(Letra, color){
    let span = document.createElement("span");
    span.className = "letter";
    span.innerHTML = Letra 
    span.style.backgroundColor = color;
    return span;
}
