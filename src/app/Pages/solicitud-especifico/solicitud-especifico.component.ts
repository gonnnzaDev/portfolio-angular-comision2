import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SolicitudService } from '../../Service/Solicitud/solicitud.service';
import { Solicitud } from '../../Models/solicitud';

@Component({
  selector: 'app-solicitud-especifico',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './solicitud-especifico.component.html',
  styleUrl: './solicitud-especifico.component.css'
})
export class SolicitudEspecificoComponent implements OnInit {


  route = inject(ActivatedRoute)
  userouter = inject(Router)
  service = inject(SolicitudService)
  solicitud?: Solicitud;

  ngOnInit(): void {

    const id = this.route.snapshot.params['id']

    if (id) {
      this.service.findById(id).subscribe({
        next: data => this.solicitud = data,
        error: err => {

          console.error(err)
          this.userouter.navigate(["/"])
        }
      })

    }


  }

  eliminar() {

    const omg = confirm("Seguro? Que queres eliminarlo?");

    if (!omg) { return }

    const id = this.route.snapshot.params['id']
    if (id) {
      this.service.deleteById(id).subscribe({
        next: data => {
          alert("eliminado con exito")
          this.userouter.navigate(['/solicitudes'])
        },
        error: err => console.error(err)
      })
    }
  }

}
