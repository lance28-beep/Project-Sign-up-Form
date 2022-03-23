const form = document.querySelector('form')
const input = document.querySelectorAll('input')
const button = document.querySelector('button')
const error = document.querySelectorAll('.error')

button.addEventListener('click', () => {
  const valid = form.querySelectorAll('input:valid')
  const invalid = form.querySelectorAll('input:invalid')

  //validate all inputs
  form.classList.add('validate')

  //if valid
  valid.forEach((input) => {
    let nextSibling = input.nextElementSibling
    nextSibling.classList.add('undisplay-error')
  })

  invalid.forEach((input) => {
    let nextSibling = input.nextElementSibling
    nextSibling.classList.remove('undisplay-error')
  })
})
