const form = document.querySelector('form')
const input = document.querySelectorAll('input')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  // removed old messages
  form.classList.add('validate')
})
