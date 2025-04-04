import { Component } from '@angular/core';
import { Producto } from '../productos/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService){
    
  }
  agregarProducto(evento: Event){
    evento.preventDefault();
    //Validar que sean valores correctos
    if(this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0){
      console.log('Debe imgreasar una descripcion y un precio valido');
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput)

    //Agregar producto
    this.productoService.agregarProducto(producto)


    //limpiamos los campos del formulario

    this.descripcionInput = '';
    this.precioInput = null
  }
}
