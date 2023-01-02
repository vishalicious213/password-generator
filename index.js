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

let pw1 = document.getElementById("pw1")
let pw2 = document.getElementById("pw2")

// pick character sets to include in full set of characters to generate passwords
options.addEventListener("change", () => {
    if (checkUppercase.checked) {
        characterSet.push("uppercase")
    } else {
        while (characterSet.includes("uppercase")) {
            characterSet.pop("uppercase")
        }
    }
    
    if (checkLowercase.checked) {
        characterSet.push("lowercase")
    } else {
        while (characterSet.includes("lowercase")) {
            characterSet.pop("lowercase")
        }
    }

    if (checkNumbers.checked) {
        characterSet.push("numbers")
    } else {
        while (characterSet.includes("numbers")) {
            characterSet.pop("numbers")
        }
    }

    if (checkSymbols.checked) {
        characterSet.push("symbols")
    } else {
        while (characterSet.includes("symbols")) {
            characterSet.pop("symbols")
        }
    }

    generateCharacterSet()
})

// assemble characters from selected character subsets
function generateCharacterSet() {
    // empty existing characters array
    while (characters.length > 0) {
        characters.pop()
    }
    
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
}

function generatePasswords() {
    let index = 0
    let password = ""

    // if character sets are unchecked, check lowercase
    if (characterSet.length === 0) {
        characterSet.push("lowercase")
        characterSet.push("numbers")
        checkLowercase.checked = true
        checkNumbers.checked = true
        generateCharacterSet()
    }

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