import "../app.css";

//Desactivar Prerrenderización
/*Se debe deshabilitar el enrutamiento y el prerrendamiento del lado del servidor,
 así como habilitar el enrutamiento del lado del cliente */
export const ssr = false;
export const csr = true;
//export const prerender = false;
export const trailingSlash = 'always';
export const prerender = true;
