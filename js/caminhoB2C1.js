function caminhoB2C1() {
        // caminhoDoisA()

var pathSelect = prompt('Select your path. : \n 1 - You see some orcs front of you, you will facing them ? \n 2 - You see some orcs front of you, you will change your path ? \n 3- Wait your friends come to face the enemy .')

if (pathSelect == 1) {
    caminhoB()
    // caminhoUmB()
}

else if (pathSelect == 2) {
    caminhoB1()
     // caminhoDoisBUmC()
}

else if (pathSelect == 3) {
    caminhoB1()
     // caminhoDoisBUmC()
}
return window.location.assign('index.html')
}
