import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() titulo: string = 'Acá va el título';

  @Input()
  imgurl: string = '';

  @Input()
  precio: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


}
