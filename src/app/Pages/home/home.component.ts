import { Component, inject, OnInit } from '@angular/core';
import { Proyecto } from '../../Models/proyecto';
import { ProyectoService } from '../../Service/Proyecto/proyecto.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  proyectos: Proyecto[] = []

  constructor(private service: ProyectoService) { }

  ngOnInit() {
    this.service.listAll().subscribe({
      next: (data => {
        console.log(data)
        this.proyectos = data
      }),
      error: (err => {
        console.error(err)
      })
    });


  }

}
