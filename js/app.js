//-------------------------Variables-------------------------\\
let slots = ["", "", "", "", "", "", "", "", ""]

turnoCirculos = 1
turnoEquis = 0

let circulos = [document.getElementById("circulo1"), document.getElementById("circulo2"), document.getElementById("circulo3"), document.getElementById("circulo4"), document.getElementById("circulo5"), document.getElementById("circulo6"), document.getElementById("circulo7"), document.getElementById("circulo8"), document.getElementById("circulo9")]
let equis = [document.getElementById("equis1"), document.getElementById("equis2"), document.getElementById("equis3"), document.getElementById("equis4"), document.getElementById("equis5"), document.getElementById("equis6"), document.getElementById("equis7"), document.getElementById("equis8"), document.getElementById("equis9")]

let victoria = document.getElementById("victoria")
let textoVictoria = document.getElementById("titulo")
let playAgain = document.getElementById("playAgain")

let cuadrados = [document.getElementById("cuadro1"), document.getElementById("cuadro2"), document.getElementById("cuadro3"), document.getElementById("cuadro4"), document.getElementById("cuadro5"), document.getElementById("cuadro6"), document.getElementById("cuadro7"), document.getElementById("cuadro8"), document.getElementById("cuadro9")]


function ganoX(){
    textoVictoria.textContent = 'Exs Wins'
    victoria.style.top = '0rem'
    victoria.style.transition = '.5s'
}

function ganoO(){
    textoVictoria.textContent = 'Os Wins'
    victoria.style.top = '0rem'
    victoria.style.transition = '.5s'
}

function draw(){
    textoVictoria.textContent = 'Draw!'
    victoria.style.top = '0rem'
    victoria.style.transition = '.5s'
}

function comprobaciones(){
    let timer = setInterval(() => {
        switch(true){

            case victoria.style.top === "0rem":
                clearInterval(timer)
                break;
            case slots[0] === "o" && slots[1] === "o" && slots[2] === "o":
                ganoO()
                console.log(slots[0], slots[1], slots[2])
                break;
            case slots[3] === "o" && slots[4] === "o" && slots[5] === "o":
                ganoO()
                console.log(slots[3], slots[4], slots[5])
                break;
            case slots[6] === "o" && slots[7] === "o" && slots[8] === "o":
                ganoO()
                console.log(slots[6], slots[7], slots[8])
                break;

            case slots[0] === "o" && slots[3] === "o" && slots[6] === "o":
                ganoO()
                console.log(slots[0], slots[3], slots[6])
                break;
            case slots[1] === "o" && slots[4] === "o" && slots[7] === "o":
                ganoO()
                console.log(slots[1], slots[4], slots[7])
                break;
            case slots[6] === "o" && slots[7] === "o" && slots[8] === "o":
                ganoO()
                console.log(slots[2], slots[5], slots[8])
                break;
            
            case slots[0] === "o" && slots[4] === "o" && slots[8] === "o":
                ganoO()
                console.log(slots[0], slots[4], slots[8])
                break;
            case slots[2] === "o" && slots[4] === "o" && slots[6] === "o":
                ganoO()
                console.log(slots[2], slots[4], slots[8])
                break;
            

            
            case slots[0] === "x" && slots[1] === "x" && slots[2] === "x":
                ganoX()
                console.log(slots[0], slots[1], slots[2])
                break;
            case slots[3] === "x" && slots[4] === "x" && slots[5] === "x":
                ganoX()
                console.log(slots[3], slots[4], slots[5])
                break;
            case slots[6] === "x" && slots[7] === "x" && slots[8] === "x":
                ganoX()
                console.log(slots[6], slots[7], slots[8])
                break;

            case slots[0] === "x" && slots[3] === "x" && slots[6] === "x":
                ganoX()
                console.log(slots[0], slots[3], slots[6])
                break;
            case slots[1] === "x" && slots[4] === "x" && slots[7] === "x":
                ganoX()
                console.log(slots[1], slots[4], slots[7])
                break;
            case slots[6] === "x" && slots[7] === "x" && slots[8] === "x":
                ganoX()
                console.log(slots[2], slots[5], slots[8])
                break;
            
            case slots[0] === "x" && slots[4] === "x" && slots[8] === "x":
                ganoX()
                console.log(slots[0], slots[4], slots[8])
                break;
            case slots[2] === "x" && slots[4] === "x" && slots[6] === "x":
                ganoX()
                break;

            case slots[0].length === 1 && slots[1].length === 1 && slots[2].length === 1 && slots[3].length === 1 && 
            slots[4].length === 1 && slots[5].length === 1 && slots[6].length === 1 && slots[7].length === 1 && slots[8].length === 1:
                draw()
                break;
        }
    }, 100);
}

comprobaciones()

for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].addEventListener("mouseenter", () => {
        switch(true){
            case turnoCirculos > turnoEquis && slots[i].length === 0:
                circulos[i].style.opacity = "0.4"
                break;
            case turnoCirculos === turnoEquis && slots[i].length === 0:
                equis[i].style.opacity = "0.4"
                break;
        }
    })

    cuadrados[i].addEventListener("mouseleave", () => {
        switch(true){
            case turnoCirculos > turnoEquis && slots[i].length === 0:
                circulos[i].style.opacity = "0"
                break;
            case turnoCirculos === turnoEquis && slots[i].length === 0:
                equis[i].style.opacity = "0"
                break;
        }
    })

    cuadrados[i].addEventListener("click", () => {
        switch(true){
            case turnoCirculos > turnoEquis && slots[i].length === 0:
                circulos[i].style.opacity = "1"
                slots[i] = "o"
                turnoEquis += 1
                break;
        }
        switch(true){
            case turnoCirculos === turnoEquis && slots[i].length === 0:
                equis[i].style.opacity = "1"
                slots[i] = "x"
                turnoCirculos += 1
                break;
        }
    })
}

playAgain.addEventListener("click", () => {
    victoria.style.top = "100rem"
    slots = ["", "", "", "", "", "", "", "", ""]

    circulos[0].style.opacity = "0"
    circulos[1].style.opacity = "0"
    circulos[2].style.opacity = "0"
    circulos[3].style.opacity = "0"
    circulos[4].style.opacity = "0"
    circulos[5].style.opacity = "0"
    circulos[6].style.opacity = "0"
    circulos[7].style.opacity = "0"
    circulos[8].style.opacity = "0"

    equis[0].style.opacity = "0"
    equis[1].style.opacity = "0"
    equis[2].style.opacity = "0"
    equis[3].style.opacity = "0"
    equis[4].style.opacity = "0"
    equis[5].style.opacity = "0"
    equis[6].style.opacity = "0"
    equis[7].style.opacity = "0"
    equis[8].style.opacity = "0"

    turnoCirculos = 1
    turnoEquis = 0

    comprobaciones()
})