//Configurar la aplicación (constantes y variables)

const mensajeInicial = 'Empieza a adivinar...'
const INIT_SCORE = 20
const INIT_HIGH_SCORE = 0

//variables de la aplicación
let score
let highScore
let secretNumber
//let score, highscore,secretNumber

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
initApp()

//Funcionalidad de la aplicación

//addEventListener es una función que recibe
//como argumento otra función

//En javascript, podemos definir la función dentro de un parámetro y, dentro del parámetro puede haber una función anónima.
//function mostrarMensaje() {
// console.log('me han pulsado!')
//}

console.log(checkButton)

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
      secretNumberField.style.backgroundColor = 'yellow'
      secretNumberField.style.width = '300px'

      //actualizar el highScore
      if (score > highScore) {
        highScore = score
        localStorage.setItem('highscore', highScore)
        highScoreField.textContent = highScore
      }
    }
  },

  //compararlo con el secretNumber
  //actualizar el mensaje
  //actualizar el score
  //actualizar el highScore
)
function initApp() {
  //Inicializamos score
  score = INIT_SCORE
  scoreField.textContent = score

  //leer highScore del localstorage y
  //si no está inicializarlo con INIT_HIGH_SCORE

  //pendiente añadir excepciones try-catch?????
  highScore = Number(localStorage.getItem('highscore')) ?? INIT_HIGH_SCORE

  // mostrarlo en pantalla
  highScoreField.textContent = highScore

  //Inicializar el texto de inicio
  messageField.textContent = mensajeInicial

  //Inicializar el número secreto
  secretNumber = Math.trunc(Math.random() * 20) + 1
  secretNumberField.textContent = '?'

  //Inicializar el aspecto visual de los elementos
  document.body.style.backgroundColor = '#222'
  secretNumberField.style.backgroundColor = '#fff'
  secretNumberField.style.width = '150px'
  checkButton.disabled = false
}
againButton.addEventListener('click', initApp)



