function togglePassword() {
  document.querySelectorAll('.eye').forEach((eye) => eye.classList.toggle('hide'))

  const type = password.getAttribute('type') == 'password' ? 'text' : 'password'
  password.setAttributte('type', type)
}

