const form = document.querySelector('form')

form.addEventListener('submit', event => {
    alert('Formulário enviado com sucesso')
    // Não envia o formulário para não dar reload no navegador.
    event.preventDefault()
})