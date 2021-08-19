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
