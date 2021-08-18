// Escolha de personagens
function start() {

        var charSelect = prompt('Select your class (Only numbers) : \n 1 - Human \n 2 - Elf \n 3 - Dwarf' )
        var pathSelect = prompt('Select your Initial Bundle. : \n 1 - No Weapons ( I believe in my karate skills, i watched Daniel San) \n 2 - Sword & shield ( wow so original.. ) \n 3 - A Bow and some arrows (dont ask me where he/she gets them)')

        if (pathSelect == 1) {
            caminhoA()
        }

        else if (pathSelect == 2) {
            caminhoB2C1()
        }

        else if (pathSelect == 3) {
            caminhoC1()
        }

        else {
            alert ('Incorrect option, try again !')
        }

        return window.location.assign('index.html')
}
// Escolha de personagens


// // Primeiro caminho
// function caminhoDoisA() {

//     var pathSelect = prompt('Select your path. : \n 1 - You see some orcs front of you, you will facing them ? \n 2 - You see some orcs front of you, you will change your path ? ')


//     if (pathSelect == 1) {
//         caminhoUmB()
//     }

//     else if (pathSelect == 2) {
//         caminhoDoisBUmC()
//     }
// }
// // Primeiro caminho

// // Segundo caminho
// function caminhoTresA() {

//     var pathSelect = prompt('Select your path. : \n 1 - You facing an group of smaller orcs, do you prefer catch them stealth ?  \n 2 - You facing an group of smaller orcs, do you have to have a really good aim-shot to defeat them like that')

//     if (pathSelect == 1) {
//         caminhoDoisBUmC()
//     }

//     else if (pathSelect == 2) {
//         caminhoDoisC()
//     }
// }
// // Segundo caminho

// //  Game over e Vitória
// function caminhoUmA() {

//     alert('Game Over!  ಠ_ಠ   Cmon, you even have cloths, get back and choose something.')

// }
// function caminhoUmB() {

//     alert('Nice Try ! I think Orcs is too much to you my friend. (x_x)')

// }
// function caminhoDoisBUmC() {

//     alert('Congratulations ! Well well, we have a Cherlock Holmes ヾ(⌐■_■)ノ♪')
// }

// function caminhoDoisC() {

//     alert('Too Close ! Yeah, aparently the smaller Orcs are fasters then the bigger Orcs... (´。＿。｀)')

// }
// //  Game over e Vitória