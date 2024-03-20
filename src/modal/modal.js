function crearModal (nombrePokemon) {
  return new Promise((resolve, reject) => {
    const $nombrePokemonModal = document.querySelector('.nombreModal')
    $nombrePokemonModal.textContent = nombrePokemon
    const urlDatosPokemon = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
    fetch(urlDatosPokemon)
      .then(respuesta => respuesta.json())
      .then(respuestaJson => {
        const $imagenPokemonModal = document.querySelector('.imagenPokemonModal')
        limpiarModal()
        const urlImagenPokemonModal = respuestaJson.sprites.front_default
        $imagenPokemonModal.setAttribute('src', urlImagenPokemonModal)
        const $modalTipo = document.querySelector('.tiposPokemon')
        const $tipoSaludo = document.createElement('p')
        $tipoSaludo.classList.add('datosModal')
        $tipoSaludo.textContent = 'Tipos: '
        $modalTipo.appendChild($tipoSaludo)
        respuestaJson.types.forEach(tipo => {
          const tipoPokemon = tipo.type.name
          const $tipoModal = document.createElement('p')
          $tipoModal.textContent = tipoPokemon
          $tipoModal.classList.add(tipoPokemon)
          $tipoModal.classList.add('tipoPokemonEstilo')
          $modalTipo.appendChild($tipoModal)
        })
        const $pModalHabilidad = document.querySelector('.habilidadesPokemon')
        const $habilidadSaludo = document.createElement('p')
        $habilidadSaludo.textContent = 'Habilidades: '
        $habilidadSaludo.classList.add('datosModal')
        $pModalHabilidad.appendChild($habilidadSaludo)
        respuestaJson.abilities.forEach(ability => {
          const habilidad = ability.ability.name
          const $pHabilidad = document.createElement('p')
          $pHabilidad.textContent = habilidad
          $pHabilidad.classList.add('habilidadModal')
          $pModalHabilidad.appendChild($pHabilidad)
        })
        const peso = respuestaJson.weight
        const $pesoPokemon = document.querySelector('.pesoPokemon')
        $pesoPokemon.textContent = `Peso: ${peso}`
        $pesoPokemon.classList.add('datosModal')
        const altura = respuestaJson.height
        const $alturaPokemon = document.querySelector('.tallaPokemon')
        $alturaPokemon.textContent = `Altura: ${altura}`
        $alturaPokemon.classList.add('datosModal')
        resolve()
      })
      .catch(error => {
        reject(error)
      })
  })
}
function limpiarModal () {
  document.querySelector('.tiposPokemon').innerHTML = ''
  document.querySelector('.habilidadesPokemon').innerHTML = ''
  document.querySelector('.pesoPokemon').innerHTML = ''
  document.querySelector('.tallaPokemon').innerHTML = ''
}
export function mostrarModalPokemon () {
  const espacioPokemonModal = document.querySelectorAll('.espacioPokemon')
  espacioPokemonModal.forEach(pokemonModal => {
    pokemonModal.addEventListener('click', function () {
      const namePokemon = pokemonModal.getAttribute('name')
      crearModal(namePokemon)
    })
  })
}

export function asignarModalPokemon () {
  const $pokemonesDisponibles = document.querySelectorAll('.espacioPokemon')
  $pokemonesDisponibles.forEach(pokemonSeleccionado => {
    pokemonSeleccionado.setAttribute('data-bs-toggle', 'modal')
    pokemonSeleccionado.setAttribute('data-bs-target', '#pokemonSeleccionado')
  })
}
