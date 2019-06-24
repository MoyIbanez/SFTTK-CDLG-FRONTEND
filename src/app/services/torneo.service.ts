import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  constructor(private http:HttpClient) { }

  public PostTorneos(body){

    let headers:HttpHeaders=new HttpHeaders({
      'Token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Im5vbWJyZSI6InRlc3RpbmciLCJwYXNzd29yZCI6IiQyYiQxMCRVc3JJZHF2ZTFnT1pUQnhYZWxyOEwuaUFlZmxUTEVkbWVRcWYxejdpc2o3ZWJKNEx4b0R4MiIsImVzdGFkbyI6dHJ1ZSwicm9sZSI6IkFETUlOX1JPTEUiLCJjcmVhdGVkRGF0ZSI6IjIwMTktMDYtMTlUMjA6NDY6NDEuMTkwWiIsImxhc3RVcGRhdGVEYXRlIjoiMjAxOS0wNi0xOVQyMDo0Njo0MS4xOTBaIiwiX2lkIjoiNWQwYWEwMTJlMmIwOWEzMDQwMDE1NjNhIiwiZW1haWwiOiJ0ZXN0MUBvdXRsb29rLmVzIiwiX192IjowfSwiaWF0IjoxNTYxMzE2MzY1LCJleHAiOjE1NjEzMzQzNjV9.K8oM5MlG3gqEnnWhE9djyGbvcvzx7nfiOE4Ql4fFDxM'
    })

    return this.http.post('http://localhost:80',body,{headers})
  }




}
