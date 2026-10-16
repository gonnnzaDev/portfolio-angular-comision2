import { HttpClient } from "@angular/common/http"
import { inject, Injectable } from "@angular/core"
import { Proyecto } from "../../Models/proyecto"

@Injectable({
  providedIn: 'root'

})
export class ProyectoService {

  private url = "http://localhost:3000/proyectos"
  
  constructor(private http : HttpClient){}

  listAll() {
    return this.http.get<Proyecto[]>(this.url)
  }

  findById(id: number) {
    return this.http.get<Proyecto>(`${this.url}/${id}`)

  }

  save(p: Proyecto) {
    return this.http.post<Proyecto>(this.url, p)
  }

  updateById(p: Proyecto, id: number) {
    return this.http.put<Proyecto>(`${this.url}/${id}`, p)

  }

  deleteById(id: number) {
    return this.http.delete<Proyecto>(`${this.url}/${id}`)

  }
}
