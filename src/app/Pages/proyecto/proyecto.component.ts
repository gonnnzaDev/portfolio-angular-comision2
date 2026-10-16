import { Component, inject, OnInit } from '@angular/core';
import { Proyecto } from '../../Models/proyecto';
import { ProyectoService } from '../../Service/Proyecto/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { vistaDeTecnologias, Tecnologia } from '../../Utils/iconos-tecnologia';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent implements OnInit {

  service = inject(ProyectoService)
  router = inject(ActivatedRoute)
  proyecto?: Proyecto

  tecnologias(): Tecnologia[] {
    return vistaDeTecnologias(this.proyecto?.tecnologias_utilizadas ?? '');
  }

  ngOnInit(): void {

    const id = this.router.snapshot.params['id']

    this.service.findById(id).subscribe(({
      next: data => this.proyecto = data,
      error: err => console.error(err)
    }))

  }




}
