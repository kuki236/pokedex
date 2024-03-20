import { mostrarModalPokemon, asignarModalPokemon } from '../modal/modal.js'

export function mostrarPagina (numeroPagina = 1) {
  return new Promise((resolve, reject) => {
    const urlApiPokemon = crearUrlApiPokemon(numeroPagina)
    const listaPokemon = document.querySelector('.listaPokemonFila')
    let numeroUrlPokemon = (numeroPagina - 1) * 20
    listaPokemon.innerHTML = ''
    fetch(urlApiPokemon)
      .then(respuesta => respuesta.json())
      .then(respuestaJson => {
        respuestaJson.results.forEach((objetoRespuesta) => {
          const nombrePokemon = objetoRespuesta.name
          const pNombrePokemon = document.createElement('p')
          const espacioDivPokemon = document.createElement('div')
          const imagenPokemon = document.createElement('img')
          numeroUrlPokemon++
          if (numeroUrlPokemon > 1025) {
            numeroUrlPokemonAdicional = numeroUrlPokemon + 8975
            const urlImagenPokemonAdicional = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroUrlPokemonAdicional}.png`
            imagenPokemon.src = urlImagenPokemonAdicional
          } else {
            const urlImagenPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroUrlPokemon}.png`
            imagenPokemon.src = urlImagenPokemon
          }

          imagenPokemon.classList.add('imagenPokemonLista')
          espacioDivPokemon.appendChild(imagenPokemon)
          espacioDivPokemon.classList.add('espacioPokemon')
          pNombrePokemon.textContent = nombrePokemon
          pNombrePokemon.classList.add('textoPokemonLista')
          espacioDivPokemon.setAttribute('name', nombrePokemon)
          espacioDivPokemon.appendChild(pNombrePokemon)
          listaPokemon.appendChild(espacioDivPokemon)
        })
        asignarModalPokemon()
        mostrarModalPokemon()
        actualizarClasePaginaActual(numeroPagina)
        resolve()
      })
      .catch(error => {
        reject(error)
      })
  })
}
function crearUrlApiPokemon (numeroPagina) {
  const offset = (numeroPagina - 1) * 20
  return `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
}
function actualizarClasePaginaActual (numeroPagina) {
  const paginaActual = document.querySelector('.paginaActual')
  if (paginaActual) {
    paginaActual.classList.remove('paginaActual')
  }
  const paginaSeleccionada = document.querySelector(`.paginaPokemon[name="${numeroPagina}"]`)
  paginaSeleccionada.classList.add('paginaActual')
}
