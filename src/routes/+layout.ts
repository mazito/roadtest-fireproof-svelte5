import "../app.css";

//Desactivar Prerrenderización
/*Se debe deshabilitar el enrutamiento y el pre rendere del lado del servidor,
 así como habilitar el enrutamiento del lado del cliente */
export const ssr = false;
export const csr = true;
export const prerender = true; 
//export const trailingSlash = 'ignore';
