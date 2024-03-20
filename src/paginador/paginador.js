import { mostrarPagina } from '../interfaz/interfazPagina.js'
export function logicaPaginaAnteriorSiguiente () {
  manejarClicPagina()
  manejarClicAnterior()
  manejarClicSiguiente()
}

function manejarClicPagina () {
  const paginasPokemones = document.querySelectorAll('.paginaPokemon')
  paginasPokemones.forEach(pagina => {
    pagina.addEventListener('click', function () {
      const namePagina = pagina.getAttribute('name')
      paginasPokemones.forEach(pagina => {
        pagina.classList.remove('paginaActual')
      })
      pagina.classList.add('paginaActual')
      mostrarPagina(namePagina)
    })
  })
}
function manejarClicAnterior () {
  const paginaPokemonAnterior = document.querySelector('.anterior')
  paginaPokemonAnterior.classList.remove('disabled')
  paginaPokemonAnterior.addEventListener('click', function () {
    const paginaActual = document.querySelector('.paginaActual')
    const numeroPaginaActual = paginaActual.getAttribute('name')
    const numeroPaginaAnterior = Number(numeroPaginaActual) - 1
    const $paginaAnterior = asignarActualPagina(numeroPaginaAnterior)
    $paginaAnterior.classList.add('paginaActual')
    mostrarPagina(numeroPaginaAnterior)
    paginaActual.classList.remove('paginaActual')
  })
}
function manejarClicSiguiente () {
  const paginaPokemonSiguiente = document.querySelector('.siguiente')
  paginaPokemonSiguiente.addEventListener('click', function () {
    const paginaActual = document.querySelector('.paginaActual')
    const numeroPaginaActual = paginaActual.getAttribute('name')
    const numeroPaginaSiguiente = Number(numeroPaginaActual) + 1
    const $paginaSiguiente = asignarActualPagina(numeroPaginaSiguiente)
    $paginaSiguiente.classList.add('paginaActual')
    mostrarPagina(numeroPaginaSiguiente)
    paginaActual.classList.remove('paginaActual')
  })
}

function asignarActualPagina (namePaginaPendiente) {
  let paginaEncontrada = null
  document.querySelectorAll('.paginaPokemon').forEach(pagina => {
    const numeroPaginaPendiente = pagina.getAttribute('name')
    if (numeroPaginaPendiente == namePaginaPendiente) {
      paginaEncontrada = pagina
    }
  })
  return paginaEncontrada
}
