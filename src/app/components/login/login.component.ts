import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServicesService } from '../../services/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {


 public Formulario:FormGroup
 constructor(  private _LoginService:LoginServicesService   ) { }

  ngOnInit() {
    this.Formulario= new FormGroup({
      email: new FormControl(null,[Validators.required]),
      password: new FormControl (null,[Validators.required])
    })
  }


  public SendPost(){

    this._LoginService.agregarTornero();

    
    // this._LoginService.LoginUser(this.Formulario.value).subscribe(data=>{
      
    //   localStorage.setItem('token',data['token']);
    //   localStorage.setItem('usuario',data['usuario'])
     
    // },
    //   (err)=>console.log(err.error.errmsg))
    
  }






}
