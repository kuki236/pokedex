export function crearPaginador(){
    crearPaginaAnterior()
    crearListaPaginas()
    crearPaginaSiguiente()
  }
  
  function crearPaginaAnterior(){
    const $paginadorUl = document.querySelector('.paginadorPokemonUl')
    const $anteriorLi = document.createElement('li')
    $anteriorLi.classList.add('page-item')
    $anteriorLi.classList.add('disabled')
    $anteriorLi.classList.add('anterior')
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
    $siguienteLi.classList.add('siguiente')
    const $siguienteA = document.createElement('a')
    $siguienteA.classList.add('page-link')
    $siguienteA.textContent = 'Siguiente'
    $siguienteA.setAttribute('href','#')
    $siguienteLi.appendChild($siguienteA)
    $paginadorUl.appendChild($siguienteLi)
  }
  