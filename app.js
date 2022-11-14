
const wordsToFind = [
    'cat',
    'elephant',
    'horse',
    'dinosaur',
    'bear',
    'giraffe'
] //Array collection of secrets words

let lifes = 5; //User lifes
let inputLetterUser = ''; //words joined by user
let successLetters = []; //Corrects letters array
let previouslyLetters = []; //Previously joined array - Las letras ingresadas por el usuario previamente se ingresaran acá

//HTML 
const buttonSEND = document.querySelector('#buttonShow') //Con este botón el usuario envía la letra a validar por nuestra lógica
const fieldCapture = document.querySelector('#field') //Espacio donde el usuario escribirá
const livesText = document.querySelector('#lives')
livesText.innerHTML = lifes //We show user lifes in the screen

const randomWordCatch = RandomWord() //Secret word
const randomWordCatchSplit = randomWordCatch.split('') //Secret word array - Convertimos nuestro string de la palabra secreta en un array

console.log('Palabra secreta a encontrar : ' + randomWordCatch)

buttonSEND.addEventListener('click', () => {
    if (AnLetter(fieldCapture.value)) {
        inputLetterUser = fieldCapture.value
        // let result = Search(inputLetterUser, randomWordCatchSplit)
        let result = FilterLetter(inputLetterUser, previouslyLetters) //First filter
        if (result.state) {
            console.log('La letra ah sido ingresada anteriormente, intente con otra')
        }
        if (!result.state) {
            previouslyLetters.push(inputLetterUser)
            let result = FilterLetter(inputLetterUser, randomWordCatchSplit) //Second filter
            result.state
                ? (() => {
                    successLetters.push(inputLetterUser)
                    if (successLetters.length == randomWordCatchSplit.length) {
                        console.log('SUCCESS! YOU WIN')
                    }

                    console.log(result.msg)
                    console.log(successLetters)
                }
                )()
                : (() => {
                    console.log(result.msg)
                    WrongLetter()
                    console.log(lifes)
                })()
        }
        // result.state
        //     ?
        //     (() => {
        //         //Inserto la palabra del usuario en un array de palabras correctas
        //         // Luego verifico si todas las letras fueron encontradas 
        //         successLetters.push(inputLetterUser)
        //         if (successLetters.length == randomWordCatchSplit.length) {
        //             console.log('SUCCESS! YOU WIN')
        //         }

        //         console.log(result.msg)
        //         console.log(successLetters)
        //     })()
        //     :
        //     (() => {
        //         console.log(result.msg)
        //         WrongLetter()
        //         console.log(lifes)
        //     })()

    }
    else {
        inputLetterUser = 'El contenido debe tener solo una letra'
    }

    console.log(inputLetterUser)
})

// *****GAME******

// ***************

//Random function
function RandomWord() {
    const random = wordsToFind[Math.floor(Math.random() * wordsToFind.length)]
    return random
}

//Rest live´s
function WrongLetter() {
    lifes--
    livesText.innerHTML = lifes
    if (lifes == 0) {
        console.log('Te quedaste sin vidas, perdiste')
    }
}