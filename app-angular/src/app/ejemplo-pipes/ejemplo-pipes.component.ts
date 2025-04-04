import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {
  empleados = [
    {nombre: 'Ricardo Suarez', sueldo:12000, fechaNacimiento: new Date('2000-08-01')},
      {nombre: 'Laura Mejia', sueldo:13000, fechaNacimiento: new Date('2003-07-01')},
      {nombre: 'daniel mejia', sueldo:14000, fechaNacimiento: new Date('2002-04-05')}

    
  ]
}
