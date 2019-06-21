import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private http:HttpClient) { 
    this.agregarTornero();
  }

  LoginUser(Parametros){
    let body= Parametros
   return this.http.post('http://10.2.47.4:80/login',body).pipe(
     map( data=>{
         
      let dataFilter={
        token:'',
        usuario:''
      }

      dataFilter.token=data['token'];
      dataFilter.usuario=JSON.stringify(data['usuario'])


      return dataFilter
      


     })
     
   )
  }



  public agregarTornero(){
    let headers:HttpHeaders= new  HttpHeaders({
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImVzdGFkbyI6dHJ1ZSwicm9sZSI6IkFETUlOX1JPTEUiLCJjcmVhdGVkRGF0ZSI6IjIwMTktMDYtMTlUMjA6NDY6NDEuMTkwWiIsImxhc3RVcGRhdGVEYXRlIjoiMjAxOS0wNi0xOVQyMDo0Njo0MS4xOTBaIiwiX2lkIjoiNWQwYWEwMTJlMmIwOWEzMDQwMDE1NjNhIiwibm9tYnJlIjoidGVzdGluZyIsImVtYWlsIjoidGVzdDFAb3V0bG9vay5lcyIsInBhc3N3b3JkIjoiJDJiJDEwJFVzcklkcXZlMWdPWlRCeFhlbHI4TC5pQWVmbFRMRWRtZVFxZjF6N2lzajdlYko0THhvRHgyIiwiX192IjowfSwiaWF0IjoxNTYxMDUzNTg5LCJleHAiOjE1NjEwNzE1ODl9.jX6T8ZBf6MAyCJb4oDIlJ3FYPowHFRvwuxGnLlpLT1w'
    })


    let body={
      nombre:"La liguilla",
      deporte:'Futbol',
      modalidad:'KnocOut'
    }
this.http.post('http://10.2.47.4:80/torneos',body,{headers}).subscribe(data=>{console.log(data)})

  }
}
