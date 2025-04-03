import { Component } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { Producto } from '../productos/producto.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-listado-productos',
  imports: [ProductosComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  productos: Producto[] = [
    new Producto('Pantalón', 130.0),
    new Producto('Camisa',80.0),
    new Producto('Playera', 50.0)
  ]

  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto(){
    //Validar que sean valores correctos
    if(this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0){
      console.log('Debe imgreasar una descripcion y un precio valido');
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput)
    this.productos.push(producto)

    //limpiamos los campos del formulario

    this.descripcionInput = '';
    this.precioInput = null
  }
}
