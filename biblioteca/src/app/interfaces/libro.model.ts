export interface Book {   /* export para importarla al app Component ts */
  titulo: string;
  precio: number;
  imgurl: string; /* image es igual a la interfaz productImage */
  category?: string;  /* signo de pregunta, es para indicar que puede ir o no */
}

interface ProductImage {
  src: string;
  ancho: number;
}
/* ----------------------- */




