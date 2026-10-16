import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Solicitud } from '../../Models/solicitud';
import { SolicitudService } from '../../Service/Solicitud/solicitud.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactame-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contactame-form.component.html',
  styleUrl: './contactame-form.component.css'
})
export class ContactameFormComponent implements OnInit {
  

  service = inject(SolicitudService)
  route = inject(ActivatedRoute)

  form = new FormGroup({
    nombre_del_solicitante: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    tipo_de_proyecto: new FormControl("", Validators.required),
    descripcion_de_la_idea_o_necesidad: new FormControl("", Validators.required),
    presupuesto_estimado: new FormControl(0, Validators.required),
    fecha_aproximada: new FormControl("", Validators.required),
  })

  ngOnInit() {
    const id = this.route.snapshot.params['id']

    if(id){
      this.service.findById(id).subscribe({
        next: data => this.form.patchValue(data) ,
        error: e => console.log(e)
      })
    }

  }

  onSubmit() {

    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
    const datos = this.form.value as Solicitud;

    const id = this.route.snapshot.params['id']

    if (id) {

      this.actualizar(datos, id)
    } else {
      this.guardar(datos)
    }

  }

  actualizar(datos: Solicitud, id: string) {

    this.service.updateById(datos, id).subscribe({
      next: data => console.log(data),
      error: e => console.error(e)
    })


  }

  guardar(datos: Solicitud) {


    this.service.save(datos).subscribe({
      next: data => console.log("Guardado con exito"),
      error: e => console.error(e)
    })

  }

}
