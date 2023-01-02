const chars_upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const chars_lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const chars_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const chars_symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const options = document.getElementById("options")
const checkUppercase = document.getElementById("uppercase")
const checkLowercase = document.getElementById("lowercase")
const checkNumbers = document.getElementById("numbers")
const checkSymbols = document.getElementById("symbols")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let pw1 = document.getElementById("pw1")
let pw2 = document.getElementById("pw2")

options.addEventListener("change", () => {
    if (checkUppercase.checked) {
        console.log("uppercase")
    }
    if (checkLowercase.checked) {
        console.log("lowercase")
    }
    if (checkNumbers.checked) {
        console.log("numbers")
    }
    if (checkSymbols.checked) {
        console.log("symbols")
    }
})

function generatePasswords() {
    let index = 0
    let password = ""

    for (let i=0; i < 15; i++) {
        index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }

    return password
}

function generate() {
    pw1.textContent = generatePasswords()
    pw2.textContent = generatePasswords()
}