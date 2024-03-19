
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
  export function mostrarModalPokemon(){
    let espacioPokemonModal = document.querySelectorAll('.espacioPokemon')
    espacioPokemonModal.forEach(pokemonModal =>{
      pokemonModal.addEventListener('click',function(){
        let namePokemon = pokemonModal.getAttribute('name')
        crearModal(namePokemon)
      })
    })
  }
  
  
  
  
  export function asignarModalPokemon(){
    let $pokemonesDisponibles= document.querySelectorAll('.espacioPokemon')
    $pokemonesDisponibles.forEach(pokemonSeleccionado =>{
      pokemonSeleccionado.setAttribute('data-bs-toggle','modal')
      pokemonSeleccionado.setAttribute('data-bs-target','#pokemonSeleccionado')
    })
  }
  