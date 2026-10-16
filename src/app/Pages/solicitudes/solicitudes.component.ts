import { Component, inject, OnInit } from '@angular/core';
import { Solicitud } from '../../Models/solicitud';
import { SolicitudService } from '../../Service/Solicitud/solicitud.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent implements OnInit {

  solicitudes: Solicitud[] = []
  service = inject(SolicitudService)

  ngOnInit(): void {

    this.service.listAll().subscribe({
      next: data => this.solicitudes = data,
      error: err => console.error(err)
    })

  }

}
