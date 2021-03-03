const text = document.querySelector('.hp__container___description span')

window.addEventListener('resize', () => { // Quando a resolução for alterada de alguma forma, ele aciona esse evento
    // Verifica se a largura é menor ou igual a 768px, se for ele adiciona um break no <span> contido na classe armazenada
    // na variável acima, se não ele mantem o textContent.
    screen.width <= 768 ? text.innerHTML = `<br>${text.textContent}<br>` : text.innerHTML = text.textContent

    if (screen.width >= 768) {
        navMenu.classList.remove('move')
        navMenu.classList.remove('move-2')
        btnMenu.classList.remove('open')
        arrowServices.classList.remove('display-visible')
        arrowDifferentials.classList.remove('display-visible')
    }
})