
function start() {

    while(true) {
        var charSelect = prompt('Select your class (Only numbers) : \n 1 - Human \n 2 - Elf \n 3 - Dwarf' )
        var pathSelect = prompt('Select your path. : \n 1 - caminho 1 \n 2 - caminho 2 \n 3 - caminho 3')

        if (pathSelect == 1) {
            caminhoUmA()
        }

        else if (pathSelect == 2) {
            caminhoDoisA()
        }

        else if (pathSelect == 3) {
            caminhoTresA()
        }

        else {
            alert ('Incorrect option, try again !')
        }
    }
}
function caminhoUmA() {
    alert('Game Over')
}
function caminhoDoisA() {
    var pathSelect = prompt('Select your path. : \n 1 - caminho 2.1 \n 2 - caminho 2.2 ')

    if (pathSelect == 1) {
        caminhoUmB()
    }

    else if (pathSelect == 2) {
        caminhoDoisBUmC()
    }
}
function caminhoTresA() {
    var pathSelect = prompt('Select your path. : \n 1 - caminho C1 \n 2 - caminho C2 ')

    if (pathSelect == 1) {
        caminhoDoisBUmC()
    }

    else if (pathSelect == 2) {
        caminhoDoisC()
    }
}
function caminhoUmB() {
    alert('Game Over! Try Again.')
}
function caminhoDoisBUmC() {
    alert('Winner !')
}
function caminhoDoisC() {
    alert('Game Over! Try Again.')
}
