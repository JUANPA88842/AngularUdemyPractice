import { Component } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { Producto } from '../productos/producto.model';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario/formulario.component';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductosComponent, FormsModule, FormularioComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  productos: Producto[] = []

  constructor(private productoService: ProductoService, private router:Router ){
    
  }

  ngOnInit(){
    this.productos = this.productoService.productos


  }

  agregarProducto(){
    this.router.navigate(['agregar'])
  }
}
