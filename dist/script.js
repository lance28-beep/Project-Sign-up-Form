const form = document.querySelector('form')
const input = document.querySelectorAll('input')
const button = document.querySelector('button')
const error = document.querySelectorAll('.error')
const passwordOne = document.getElementById('password')
const passwordTwo = document.getElementById('cpassword')

button.addEventListener('click', () => {
  const valid = form.querySelectorAll('input:valid')
  const invalid = form.querySelectorAll('input:invalid')

  //validate all inputs
  form.classList.add('validate')

  //if valid
  valid.forEach((input) => {
    let nextSibling = input.nextElementSibling
    input.classList.remove('border-error')
    nextSibling.classList.add('undisplay-error')
  })

  invalid.forEach((input) => {
    let nextSibling = input.nextElementSibling
    input.classList.add('border-error')
    nextSibling.classList.remove('undisplay-error')
  })

  // Match Passwords
  if (passwordOne.value !== passwordTwo.value) {
    passwordOne.classList.add('border-error')
    passwordTwo.classList.add('border-error')
    error[0].classList.remove('undisplay-error')
  }
})
