import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  @Input() producto!: Producto;

  constructor(private router: Router){}

  editarProducto(id: number){
    // Pasamos el ID  en la URL
    this.router.navigate(['/editar',id ])
  }

}
