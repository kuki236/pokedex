/*
cargarApiLista1
*/
function cargarApi(){
    const urlApiPokemon= 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
    fetch(urlApiPokemon)
    .then(response => respuesta.json())
}