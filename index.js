const chars_upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const chars_lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const chars_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const chars_symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let characterSet = []
let characters = []

const options = document.getElementById("options")
const checkUppercase = document.getElementById("uppercase")
const checkLowercase = document.getElementById("lowercase")
const checkNumbers = document.getElementById("numbers")
const checkSymbols = document.getElementById("symbols")

// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let pw1 = document.getElementById("pw1")
let pw2 = document.getElementById("pw2")

// pick character sets to include in full set of characters to generate passwords
options.addEventListener("change", () => {
    if (checkUppercase.checked) {
        console.log("uppercase")
        characterSet.push("uppercase")
    } else {
        console.log("no uppercase")
        while (characterSet.includes("uppercase")) {
            characterSet.pop("uppercase")
        }
    }
    
    if (checkLowercase.checked) {
        console.log("lowercase")
        characterSet.push("lowercase")
    } else {
        console.log("no lowercase")
        while (characterSet.includes("lowercase")) {
            characterSet.pop("lowercase")
        }
    }

    if (checkNumbers.checked) {
        console.log("numbers")
        characterSet.push("numbers")
    } else {
        console.log("no numbers")
        while (characterSet.includes("numbers")) {
            characterSet.pop("numbers")
        }
    }

    if (checkSymbols.checked) {
        console.log("symbols")
        characterSet.push("symbols")
    } else {
        console.log("no symbols")
        while (characterSet.includes("symbols")) {
            characterSet.pop("symbols")
        }
    }

    generateCharacterSet()
})

function generateCharacterSet() {
    console.log(characterSet)
    while (characters.length > 0) {
        characters.pop()
    }
    console.log("starting", characters)
    
    if (characterSet.includes("uppercase")) {
        characters = characters.concat(chars_upper)
    }
    
    if (characterSet.includes("lowercase")) {
        characters = characters.concat(chars_lower)
    }
    
    if (characterSet.includes("numbers")) {
        characters = characters.concat(chars_numbers)
    }
    
    if (characterSet.includes("symbols")) {
        characters = characters.concat(chars_symbols)
    }

    console.log("ending", characters)
}

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