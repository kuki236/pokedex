/*
cargarApiLista1
*/
/*
function inicializar () {
  const urlApiPokemon = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
  fetch(urlApiPokemon)
    .then(respuesta => respuesta.json())
    .then(respuestaJson => {
      respuestaJson.results.forEach((objetoRespuesta, index) => {
        const listaPokemon = document.querySelector('.listaPokemonFila')
        const nombrePokemon = objetoRespuesta.name
        const pNombrePokemon = document.createElement('p')
        const espacioDivPokemon = document.createElement('div')
        const numeroPokemon = index + 1
        const urlImagenPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroPokemon}.png`
        const imagenPokemon = document.createElement('img')
        imagenPokemon.src = urlImagenPokemon
        imagenPokemon.classList.add('imagenPokemonLista')
        espacioDivPokemon.appendChild(imagenPokemon)
        espacioDivPokemon.classList.add('espacioPokemon')
        pNombrePokemon.textContent = nombrePokemon
        pNombrePokemon.classList.add('textoPokemonLista')
        espacioDivPokemon.setAttribute('name', nombrePokemon)
        espacioDivPokemon.appendChild(pNombrePokemon)
        listaPokemon.appendChild(espacioDivPokemon)
      })
    })
}
*/
function mostrarPagina(numeroPagina){
  const offset = (numeroPagina-1)*20
  const urlApiPokemon = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
  const listaPokemon = document.querySelector('.listaPokemonFila')
  let numeroUrlPokemon =  (numeroPagina-1)*20
  listaPokemon.innerHTML = '';
  fetch(urlApiPokemon)
    .then(respuesta => respuesta.json())
    .then(respuestaJson => {
      respuestaJson.results.forEach((objetoRespuesta) => {
        const listaPokemon = document.querySelector('.listaPokemonFila')
        const nombrePokemon = objetoRespuesta.name
        const pNombrePokemon = document.createElement('p')
        const espacioDivPokemon = document.createElement('div')
        numeroUrlPokemon++
        const urlImagenPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroUrlPokemon}.png`
        const imagenPokemon = document.createElement('img')
        imagenPokemon.src = urlImagenPokemon
        imagenPokemon.classList.add('imagenPokemonLista')
        espacioDivPokemon.appendChild(imagenPokemon)
        espacioDivPokemon.classList.add('espacioPokemon')
        pNombrePokemon.textContent = nombrePokemon
        pNombrePokemon.classList.add('textoPokemonLista')
        espacioDivPokemon.setAttribute('name', nombrePokemon)
        espacioDivPokemon.appendChild(pNombrePokemon)
        listaPokemon.appendChild(espacioDivPokemon)
      })
    })
}
mostrarPagina(28)
function crearPaginador(){
  crearPaginaAnterior()
  crearListaPaginas()
  crearPaginaSiguiente()
}
crearPaginador();
function crearPaginaAnterior(){
  const $paginadorUl = document.querySelector('.paginadorPokemonUl')
  const $anteriorLi = document.createElement('li')
  $anteriorLi.classList.add('page-item')
  $anteriorLi.classList.add('disabled')
  const $anteriorA = document.createElement('a')
  $anteriorA.classList.add('page-link')
  $anteriorA.textContent = 'Anterior'
  $anteriorA.setAttribute('href','#')
  $anteriorLi.appendChild($anteriorA)
  $paginadorUl.appendChild($anteriorLi)
}
function crearListaPaginas(){
  const pokemonesCantidadTotal = 1302;
  const pokemonesPorPagina = 20;
  const numeroPaginasTotal = Math.ceil(pokemonesCantidadTotal / pokemonesPorPagina);
  const $paginadorUl = document.querySelector('.paginadorPokemonUl')
  for (let i=1; i<=numeroPaginasTotal; i++){
     const $pokemonLi = document.createElement('li') 
     $pokemonLi.classList.add('page-item')
     const $pokemonA = document.createElement('a')
      $pokemonA.classList.add('page-link')
      $pokemonA.textContent = i
      $pokemonA.setAttribute('href','#')
      $pokemonLi.appendChild($pokemonA)
      $paginadorUl.appendChild($pokemonLi)
  }
}
function crearPaginaSiguiente(){
  const $paginadorUl = document.querySelector('.paginadorPokemonUl')
  const $siguienteLi = document.createElement('li')
  $siguienteLi.classList.add('page-item')
  const $siguienteA = document.createElement('a')
  $siguienteA.classList.add('page-link')
  $siguienteA.textContent = 'Siguiente'
  $siguienteA.setAttribute('href','#')
  $siguienteLi.appendChild($siguienteA)
  $paginadorUl.appendChild($siguienteLi)
}