
function mostrarPagina(numeroPagina=1){
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
        const imagenPokemon = document.createElement('img')
        numeroUrlPokemon++
        if (numeroUrlPokemon > 1025){
          numeroUrlPokemonAdicional = numeroUrlPokemon+8975
          const urlImagenPokemonAdicional = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroUrlPokemonAdicional}.png`
          imagenPokemon.src = urlImagenPokemonAdicional
        }else{
          const urlImagenPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroUrlPokemon}.png`
          imagenPokemon.src=urlImagenPokemon
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
    })
}
crearPaginador();
let paginasPokemones = document.querySelectorAll('.paginaPokemon')
paginasPokemones.forEach(pagina =>{
    pagina.addEventListener('click',function(){
      let namePagina = pagina.getAttribute('name')
      console.log(namePagina)
      mostrarPagina(namePagina)
    })
  })



function crearPaginador(){
  crearPaginaAnterior()
  crearListaPaginas()
  crearPaginaSiguiente()
}

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
      $pokemonA.classList.add('paginaPokemon')
      $pokemonA.textContent = i
      $pokemonA.setAttribute('name',i)
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

mostrarPagina();

