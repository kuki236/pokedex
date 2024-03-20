import { mostrarPagina } from './interfaz/interfazPagina.js'
import { crearPaginador } from './paginador-inicio/paginador-inicio.js'
import { logicaPaginaAnteriorSiguiente } from './paginador/paginador.js'
await crearPaginador()
await mostrarPagina()
await logicaPaginaAnteriorSiguiente()
