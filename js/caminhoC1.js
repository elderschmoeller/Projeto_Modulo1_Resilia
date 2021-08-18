function caminhoC1() {
    // caminhoTresA() 

var pathSelect = prompt('Select your path. : \n 1 - You facing an group of smaller orcs, do you prefer catch them stealth ?  \n 2 - You facing an group of smaller orcs, do you have to have a really good aim-shot to defeat them like that \n 3 - Or would you prefer the Orcs to leave the location and you have no problems ?')

if (pathSelect == 1) {
    caminhoB1()
    // caminhoDoisBUmC()
}

else if (pathSelect == 2) {
    caminhoC();
}

if (pathSelect == 3) {
    caminhoB1()
    // caminhoDoisBUmC()
}

return window.location.assign('index.html')

}

