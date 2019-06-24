import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http:HttpClient) { }

  /**
   * agregarUsuarios
   */
  public agregarUsuarios(body) {
    let headers:HttpHeaders=new HttpHeaders({
      'Token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Im5vbWJyZSI6IiIsImVzdGFkbyI6dHJ1ZSwicm9sZSI6IkFETUlOX1JPTEUiLCJjcmVhdGVkRGF0ZSI6IjIwMTktMDYtMjRUMDA6MDg6NTIuMzUzWiIsImxhc3RVcGRhdGVEYXRlIjoiMjAxOS0wNi0yNFQwMDowODo1Mi4zNTNaIiwiX2lkIjoiNWQxMDE0YTI4ZWUxYmMwNzA0NWY5M2Y3IiwicGFzc3dvcmQiOiIkMmIkMTAkWEdFSVlTcE1OSkZjOWtWL2JRZ3BvZVFYZ2JFSVBCMm9ZcXZjWE5sOXZ2ZDJlSW1JWnhsLkciLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSJ9LCJpYXQiOjE1NjEzMzUwNDYsImV4cCI6MTU2MTM1MzA0Nn0.m5RLCs_rSiObJQzUx3tLq9ER9hq-61K-rXsir2VqDDg'
    })


      
      return this.http.post('http://localhost:80/usuarios',body,{headers}).pipe(
        map( (data:any)=>{
          let ids:Array<string>=[];

          for (const key in data.usuario.insertedIds) {
            ids.push(data.usuario.insertedIds[key])           
          }

          return ids

        } )
      )  
  }

  /**
   * agregarEquipo
   */


  public agregarEquipos(body) {

    let headers:HttpHeaders=new HttpHeaders({
      'Token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Im5vbWJyZSI6IiIsImVzdGFkbyI6dHJ1ZSwicm9sZSI6IkFETUlOX1JPTEUiLCJjcmVhdGVkRGF0ZSI6IjIwMTktMDYtMjRUMDA6MDg6NTIuMzUzWiIsImxhc3RVcGRhdGVEYXRlIjoiMjAxOS0wNi0yNFQwMDowODo1Mi4zNTNaIiwiX2lkIjoiNWQxMDE0YTI4ZWUxYmMwNzA0NWY5M2Y3IiwicGFzc3dvcmQiOiIkMmIkMTAkWEdFSVlTcE1OSkZjOWtWL2JRZ3BvZVFYZ2JFSVBCMm9ZcXZjWE5sOXZ2ZDJlSW1JWnhsLkciLCJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSJ9LCJpYXQiOjE1NjEzMzUwNDYsImV4cCI6MTU2MTM1MzA0Nn0.m5RLCs_rSiObJQzUx3tLq9ER9hq-61K-rXsir2VqDDg'
    })


      
      return this.http.post('http://localhost:80/equipos',body,{headers})  
  }
 



  /**
   * obtenerEquipos
   */
  public obtenerEquipos() {

    
  }





}
