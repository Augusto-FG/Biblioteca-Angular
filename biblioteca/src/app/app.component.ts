import { Component } from '@angular/core';
import { Book } from './interfaces/libro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteca';

  books: Book[] = [  /* interfaz de .products.model.ts */
    {
      titulo: 'EL mejor juguete',
      precio: 565,
      imgurl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201800/mejores-libros-Don-Quijote-sf.jpg',
      category: 'all',

    },
    {
      titulo: 'Bicicleta casi nueva',
      precio: 356,
      imgurl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201756/mejores-libros-La-Iliada-SF.jpg',

    },
    {
      titulo: 'Colleción de albumnes',
      precio: 34,
      imgurl: 'https://www.infobae.com/new-resizer/dhr2UyjseaAtZMBcPSG7tg5ciTo=/992x1488/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201754/mejores-libros-hamlet-sf.jpg',

    },
    {
      titulo: 'Mis libros',
      precio: 23,
      imgurl: 'https://www.infobae.com/new-resizer/7VsZLFo55ikFc8IDJjFw4HrGREY=/992x1488/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201751/mejores-libros-La-divina-comedia.jpg',

    },
    {
      titulo: 'Casa para perro',
      precio: 34,
      imgurl: 'https://www.infobae.com/new-resizer/p9LFNV8Agn7GvMibhLtjYcWx2Ng=/992x1488/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201742/mejores-libros-el-aleph-sf.jpg',
    },
    {
      titulo: 'Gafas',
      precio: 3434,
      imgurl: 'https://www.prensalibre.com/wp-content/uploads/2019/06/El-principito-Antoine-de-Saint-Exup%C3%A9ry.jpg?quality=82&w=709',
    },

    {
      titulo: 'Gafas',
      precio: 3434,
      imgurl: 'https://jackmoreno.files.wordpress.com/2014/04/cantar-del-mc3ado-cid.jpg',
    },

    {
      titulo: 'Gafas',
      precio: 3434,
      imgurl: 'https://www.infobae.com/new-resizer/GoPis510MTqh8tddBq2AfCOIJR4=/992x1488/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201747/mejores-libros-Guerra-y-Paz-sf.jpg',
    }
  ]

}
