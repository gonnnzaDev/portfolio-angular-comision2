import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Proyecto } from "../../Models/proyecto"
import { Solicitud } from "../../Models/solicitud"

@Injectable({
  providedIn: 'root'

})
export class SolicitudService {

  private url = "http://localhost:3000/solicitudes"

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<Solicitud[]>(this.url)
  }

  findById(id: string) {
    return this.http.get<Solicitud>(`${this.url}/${id}`)

  }

  save(p: Solicitud) {
    return this.http.post<Solicitud>(this.url, p)
  }

  updateById(p: Solicitud, id: string) {
    return this.http.put<Solicitud>(`${this.url}/${id}`, p)

  }

  deleteById(id: number) {
    return this.http.delete<Solicitud>(`${this.url}/${id}`)

  }
}
