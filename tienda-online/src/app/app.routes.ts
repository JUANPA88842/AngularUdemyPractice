import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:'', component: ListadoProductosComponent},
    {path:'Listado', component: FormularioComponent},
    {path:'agregar', component: FormularioComponent},
    {path:'editar/:id', component: FormularioComponent},
    //Ruta comodin para cualquier otra ruta no reistrada
    {path: '**', component: ErrorComponent}

];
