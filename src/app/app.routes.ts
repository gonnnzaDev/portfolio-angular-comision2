import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { MisProyectosComponent } from './Pages/mis-proyectos/mis-proyectos.component';
import { ProyectoComponent } from './Pages/proyecto/proyecto.component';
import { ContactameFormComponent } from './Pages/contactame-form/contactame-form.component';
import { SolicitudesComponent } from './Pages/solicitudes/solicitudes.component';
import { SolicitudEspecificoComponent } from './Pages/solicitud-especifico/solicitud-especifico.component';

export const routes: Routes = [

    { path: "", component: HomeComponent },
    { path: "mis-proyectos", component: MisProyectosComponent },
    { path: "proyecto/:id", component: ProyectoComponent },
    { path: "contactame-form", component: ContactameFormComponent },
    { path: "contactame-form/:id", component: ContactameFormComponent },
    { path: "solicitudes", component: SolicitudesComponent },
    { path: "solicitud/:id", component: SolicitudEspecificoComponent},
];
