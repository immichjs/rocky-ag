// Armazenando elementos do DOM em variáveis constantes.
const navMenu = document.querySelector('.hd__nav')
const btnMenu = document.querySelector('.hd__btn-menu')
const menuList = document.querySelector('.hd__nav___list')
const arrowServices = document.querySelector('.hd__nav___list____services')
const arrowDifferentials = document.querySelector('.hd__nav___list____differentials')

const listItems = document.querySelectorAll('.hd__nav___list____item');
const arrows = document.querySelectorAll('.hd__nav___list____item_____arrow')

console.log(listItems)

// Executando a manipulação desses elementos.
// Quando um evento de click for acionado, ele verifica se essas classes estão contidas nos elementos a ser testados.
// Caso tenha, ele tira, caso contrário ele coloca essas classes.
btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('move')
    btnMenu.classList.toggle('open')
})

const arrowServicesFunc = () => arrowServices.classList.toggle('display-visible')
const arrowDifferentialsFunc = () => arrowDifferentials.classList.toggle('display-visible')

listItems[2].addEventListener('click', arrowServicesFunc)
listItems[3].addEventListener('click', arrowDifferentialsFunc)
arrows[0].addEventListener('click', arrowServicesFunc)
arrows[1].addEventListener('click', arrowDifferentialsFunc)