import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private http:HttpClient) { 
  }

  LoginUser(Parametros){
    let body= Parametros
   return this.http.post('http://localhost:80/login',body).pipe(
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


}


