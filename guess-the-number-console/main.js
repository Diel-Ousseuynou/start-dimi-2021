
console.log('Hello user!')
console.log('Try to guess the mystery number.')
console.log('Use "submit(x)" to submit a number.')
const mysteryNumber = Math.round(Math.random() * 100)

/*const submit = (x) => {
  if (x < mysteryNumber) {
    console.log('Too small.')
    document.body.innerHTML = '<h1> too small </h1>'
    document.body.style.backgroundColor = '#a2c8ef'
  }
  if (x > mysteryNumber) {
    console.log('Too big.')
    document.body.innerHTML = '<h1> too big </h1>'

    document.body.style.backgroundColor = '#c6ff84'
  }
  if (x == mysteryNumber) {
    console.log('Hurrah!')
    document.body.innerHTML = '<h1> Hurrah </h1>'

    document.body.style.backgroundColor = '#f9e29f'
  }
}
const chest = () => {
  console.log(`The mystery number is ${mysteryNmber}`)
}*/
const submit = (x) => {
if (Number.isNaN(x)) {
  console.log('Wrong input, please give a number.')
  document.body.innerHTML = '<h1>⚠️</h1>'
  document.body.innerHTML = '<h1 class="bounce">⚠️</h1>'
  document.body.style.backgroundColor = 'red'

} else if (x < 0 || x > 100) {
  console.log('Number should be between 0 & 100.')
  document.body.innerHTML = '<h1>Number should be between 0 & 100.</h1>'
  document.body.innerHTML = '<h1 class="bounce">Number should be between 0 & 100.</h1>'
  document.body.style.backgroundColor = 'red'

} else if (x < mysteryNumber) {
  console.log('Too small.')
  document.body.innerHTML = '<h1>Too small.</h1>'
  document.body.innerHTML = '<h1 class="bounce">Too small.</h1>'
  document.body.style.backgroundColor = '#8e7cdb'

} else if (x > mysteryNumber) {
  console.log('Too big.')
  document.body.innerHTML = '<h1>Too big.</h1>'
  document.body.innerHTML = '<h1 class="bounce">Too big.</h1>'
  document.body.style.backgroundColor = '#db7cb5'

} else if (x == mysteryNumber) {
  console.log('Hurrah!')
  document.body.innerHTML = '<h1>Hurrah!</h1>'
  document.body.innerHTML = '<h1 class="bounce">Hurrah!</h1>'
  document.body.style.backgroundColor = '#97ffe7'
}
}