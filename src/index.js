function mostrarPagina(numeroPagina = 1) {
  return new Promise((resolve, reject) => {
    const offset = (numeroPagina - 1) * 20;
    const urlApiPokemon = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    const listaPokemon = document.querySelector('.listaPokemonFila');
    let numeroUrlPokemon = (numeroPagina - 1) * 20;
    listaPokemon.innerHTML = '';
    fetch(urlApiPokemon)
      .then(respuesta => respuesta.json())
      .then(respuestaJson => {
        respuestaJson.results.forEach((objetoRespuesta) => {
          const nombrePokemon = objetoRespuesta.name;
          const pNombrePokemon = document.createElement('p');
          const espacioDivPokemon = document.createElement('div');
          const imagenPokemon = document.createElement('img');
          numeroUrlPokemon++;
          if (numeroUrlPokemon > 1025) {
            numeroUrlPokemonAdicional = numeroUrlPokemon + 8975;
            const urlImagenPokemonAdicional = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroUrlPokemonAdicional}.png`;
            imagenPokemon.src = urlImagenPokemonAdicional;
          } else {
            const urlImagenPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroUrlPokemon}.png`;
            imagenPokemon.src = urlImagenPokemon;
          }
          
          imagenPokemon.classList.add('imagenPokemonLista');
          espacioDivPokemon.appendChild(imagenPokemon);
          espacioDivPokemon.classList.add('espacioPokemon');
          pNombrePokemon.textContent = nombrePokemon;
          pNombrePokemon.classList.add('textoPokemonLista');
          espacioDivPokemon.setAttribute('name', nombrePokemon);
          espacioDivPokemon.appendChild(pNombrePokemon);
          listaPokemon.appendChild(espacioDivPokemon);
        });
        asignarModalPokemon();
        mostrarModalPokemon();
        let paginaActual = document.querySelector('.paginaActual');
        if (paginaActual) {
          paginaActual.classList.remove('paginaActual');
        }
        let paginaSeleccionada = document.querySelector(`.paginaPokemon[name="${numeroPagina}"]`);
        paginaSeleccionada.classList.add('paginaActual');

        resolve();
      
      })
      .catch(error => {
        reject(error);
      });
  });
}
mostrarPagina();

crearPaginador();
let paginasPokemones = document.querySelectorAll('.paginaPokemon')
let paginaPokemonSiguiente = document.querySelector('.siguiente')
let paginaPokemonAnterior = document.querySelector('.anterior')
paginaPokemonAnterior.classList.remove('disabled')

paginasPokemones.forEach(pagina =>{
    pagina.addEventListener('click',function(){
      let namePagina = pagina.getAttribute('name')
      paginasPokemones.forEach(pagina => {
        pagina.classList.remove('paginaActual');
      });
      pagina.classList.add('paginaActual')
      mostrarPagina(namePagina)
    })
  })
paginaPokemonAnterior.addEventListener('click',function(){
  let paginaActual = document.querySelector('.paginaActual')
  let numeroPaginaActual = paginaActual.getAttribute('name')
  let numeroPaginaAnterior = Number(numeroPaginaActual)-1
  let $paginaAnterior = asignarActualPagina(numeroPaginaAnterior)
  console.log($paginaAnterior)
  $paginaAnterior.classList.add('paginaActual')
  mostrarPagina(numeroPaginaAnterior)
  paginaActual.classList.remove('paginaActual')
})
paginaPokemonSiguiente.addEventListener('click',function(){
  let paginaActual = document.querySelector('.paginaActual')
  let numeroPaginaActual = paginaActual.getAttribute('name')
  let numeroPaginaSiguiente = Number(numeroPaginaActual)+1
  let $paginaSiguiente = asignarActualPagina(numeroPaginaSiguiente)
  $paginaSiguiente.classList.add('paginaActual')
  mostrarPagina(numeroPaginaSiguiente)
  paginaActual.classList.remove('paginaActual')
})





function asignarActualPagina(namePaginaPendiente){
  let paginaEncontrada = null;
  document.querySelectorAll('.paginaPokemon').forEach(pagina =>{
    let numeroPaginaPendiente = pagina.getAttribute('name')
    if(numeroPaginaPendiente == namePaginaPendiente){
      paginaEncontrada = pagina
    }
  })
  return paginaEncontrada
}
function crearModal(nombrePokemon){
  return new Promise((resolve,reject)=>{
    let $nombrePokemonModal = document.querySelector('.nombreModal')
    $nombrePokemonModal.textContent = nombrePokemon
    let urlDatosPokemon = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
    fetch(urlDatosPokemon)
      .then(respuesta => respuesta.json())
      .then(respuestaJson =>{
        let $imagenPokemonModal = document.querySelector('.imagenPokemonModal')
        limpiarModal()
        let urlImagenPokemonModal = respuestaJson.sprites.front_default
        $imagenPokemonModal.setAttribute('src',urlImagenPokemonModal)
        let $modalTipo = document.querySelector('.tiposPokemon')
        let $tipoSaludo = document.createElement('p')
        $tipoSaludo.classList.add('datosModal')
        $tipoSaludo.textContent = 'Tipos: '
        $modalTipo.appendChild($tipoSaludo)
        respuestaJson.types.forEach(tipo =>{
          let tipoPokemon = tipo.type.name
          let $tipoModal = document.createElement('p')
          $tipoModal.textContent = tipoPokemon
          $tipoModal.classList.add(tipoPokemon)
          $tipoModal.classList.add('tipoPokemonEstilo')
          $modalTipo.appendChild($tipoModal)
        })
        let $pModalHabilidad = document.querySelector('.habilidadesPokemon')
        let $habilidadSaludo = document.createElement('p')
        $habilidadSaludo.textContent = 'Habilidades: '
        $habilidadSaludo.classList.add('datosModal')
        $pModalHabilidad.appendChild($habilidadSaludo)
        respuestaJson.abilities.forEach(ability =>{
          let habilidad = ability.ability.name
          let $pHabilidad = document.createElement('p')
          $pHabilidad.textContent = habilidad
          $pHabilidad.classList.add('habilidadModal')
          $pModalHabilidad.appendChild($pHabilidad)
        })
        let peso = respuestaJson.weight
        let $pesoPokemon = document.querySelector('.pesoPokemon')
        $pesoPokemon.textContent = `Peso: ${peso}`
        $pesoPokemon.classList.add('datosModal')
        let altura = respuestaJson.height
        let $alturaPokemon = document.querySelector('.tallaPokemon')
        $alturaPokemon.textContent = `Altura: ${altura}`
        $alturaPokemon.classList.add('datosModal')
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  }) 
}
function limpiarModal(){
  document.querySelector('.tiposPokemon').innerHTML = ''
  document.querySelector('.habilidadesPokemon').innerHTML = ''
  document.querySelector('.pesoPokemon').innerHTML = ''
  document.querySelector('.tallaPokemon').innerHTML = ''
}
function mostrarModalPokemon(){
  let espacioPokemonModal = document.querySelectorAll('.espacioPokemon')
  espacioPokemonModal.forEach(pokemonModal =>{
    pokemonModal.addEventListener('click',function(){
      let namePokemon = pokemonModal.getAttribute('name')
      crearModal(namePokemon)
    })
  })
}

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



function asignarModalPokemon(){
  let $pokemonesDisponibles= document.querySelectorAll('.espacioPokemon')
  $pokemonesDisponibles.forEach(pokemonSeleccionado =>{
    pokemonSeleccionado.setAttribute('data-bs-toggle','modal')
    pokemonSeleccionado.setAttribute('data-bs-target','#pokemonSeleccionado')
  })
}
