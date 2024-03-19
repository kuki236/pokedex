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