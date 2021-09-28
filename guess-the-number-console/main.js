
console.log('Hello user!')
console.log('Try to guess the mystery number.')
console.log('Use "submit(x)" to submit a number.')
const mysteryNumber = Math.round(Math.random() * 100)

const submit = (x) => {
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
}