import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { PadreComponent } from "./padre/padre.component";
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from "./saludar/saludar.component";
import { ComponenteIfComponent } from "./componente-if/componente-if.component";
import { AgregarTareaComponent } from "./agregar-tarea/agregar-tarea.component";
import { ComponenteForComponent } from "./componente-for/componente-for.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, InterpolacionComponent, PadreComponent, MostrarMensajeComponent, ReplicadorComponent, SaludarComponent, ComponenteIfComponent, AgregarTareaComponent, ComponenteForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Local Reference';
}
