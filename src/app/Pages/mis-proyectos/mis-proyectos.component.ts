import { Component, inject, OnInit } from '@angular/core';
import { Proyecto } from '../../Models/proyecto';
import { ProyectoService } from '../../Service/Proyecto/proyecto.service';
import { vistaDeTecnologias, Tecnologia } from '../../Utils/iconos-tecnologia';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mis-proyectos',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './mis-proyectos.component.html',
  styleUrl: './mis-proyectos.component.css'
})
export class MisProyectosComponent implements OnInit {
  mis_proyectos: Proyecto[] = []
  service = inject(ProyectoService)

  tecnologiasDe(p: Proyecto): Tecnologia[] {
    return vistaDeTecnologias(p.tecnologias_utilizadas);
  }

  ngOnInit(){
    this.service.listAll().subscribe({
      next: data => {
        console.log(data)
        this.mis_proyectos = data
      },
      error: err => {
        console.error(err)
      }
    })

  }




}
