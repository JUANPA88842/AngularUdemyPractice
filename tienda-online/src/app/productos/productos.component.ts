import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  @Input() producto!: Producto;

  constructor(private productoService: ProductoService){}


    emitirDetalleProducto(){
      this.productoService.detalleProductoEmitter.emit(this.producto )
    }
  
}
