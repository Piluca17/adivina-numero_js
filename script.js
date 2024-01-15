//Configurar la aplicación (constantes y variables)

const mensajeInicial = 'Empieza a adivinar...'
let score = 20
let highScore = 0
const secretNumber = Math.trunc(Math.random() * 20) + 1
//Ejemplo 2
//const numMinimo = 10
//const numMaximo = 200
//const secretNumber = Math.trunc(Math.random() * numMaximo) + numMinimo

//Seleccionar elementos del DOM
//queryselector busca por una clase y querySelectorAll, coge todos los elementos que tiene la clase.
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')

//Inicializar la aplicación
messageField.textContent = mensajeInicial
scoreField.textContent = score
highScoreField.textContent = highScore

//Funcionalidad de la aplicación

//addEventListener es una función que recibe
//como argumento otra función

//En javascript, podemos definir la función dentro de un parámetro y, dentro del parámetro puede haber una función anónima.
//function mostrarMensaje() {
// console.log('me han pulsado!')
//}

checkButton.addEventListener(
  'click',
  () => {
    //obtener el valor del input
    const guessNumber = Number(guessNumberField.value)
    if (guessNumber > secretNumber) {
      //actualizar el mensaje
      //actualizar el score
      score--
      scoreField.textContent = score
      //scoreField.textContent =Number(scoreField.textContent) - 1

      messageField.textContent = 'Te has pasado'
    } else if (guessNumber < secretNumber) {
      //actualizar el mensaje
      //actualizar el score
      score--
      scoreField.textContent = score

      messageField.textContent = 'Te has quedado corto'
    } else {
      //ha ganado...
      //cambiar fondo de pantalla
      document.body.style.backgroundColor = 'green'
      messageField.textContent = '¡Has acertado!'
      checkButton.disabled = 'true'
      //mostrar el número secreto
      secretNumberField.textContent = secretNumber

      //actualizar el highScore
      if (score > highScore) {
        highScore = score
        highScoreField.textContent = highScore
      }
    }
  },

  //compararlo con el secretNumber
  //actualizar el mensaje
  //actualizar el score
  //actualizar el highScore
)
againButton.addEventListener (
  'click',
  () => {
  messageField.textContent = mensajeInicial
  scoreField.textContent = 20
  document.body.style.backgroundColor = 'blue'
  
  }
)
