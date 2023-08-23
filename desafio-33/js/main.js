const input = document.querySelector('input')
const button = document.querySelector('button')
const nameElement = document.querySelector('#name')
const photoElement = document.querySelector('#photo')
const errorElement = document.querySelector('#error')

// Função para lidar com a ação
async function handleSearch() {
    const username = input.value
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    const name = data.name
    const photo = data.avatar_url

    if (data.message === 'Not Found' && input.value === '') {
        errorElement.style.display = 'block'
        nameElement.style.display = 'none'
        photoElement.style.display = 'none'
    } else {
        errorElement.style.display = 'none'
        nameElement.style.display = 'block'
        photoElement.style.display = 'block'
        nameElement.innerHTML = name
        photoElement.setAttribute('src', photo)
    }
}

// Adiciona o evento de clique no botão
button.addEventListener('click', handleSearch)

// Adiciona o evento de tecla no input
input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        handleSearch()
    }
});
