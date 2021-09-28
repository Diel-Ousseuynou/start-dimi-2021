
console.log('Hello user!')
console.log('Try to guess the mystery number.')
console.log('Use "submit(x)" to submit a number.')
const mysteryNumber = Math.round(Math.random() * 100)

const submit = (x) => {
  if (x < mysteryNumber) {
    console.log('Too small.')
  }
  if (x > mysteryNumber) {
    console.log('Too big.')
  }
  if (x == mysteryNumber) {
    console.log('Hurrah!')
  }
}
const chest () => {
  console.log(`The mystery number is ${mysteryNmber}`)
}