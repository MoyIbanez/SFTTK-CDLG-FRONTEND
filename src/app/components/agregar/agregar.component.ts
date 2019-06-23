import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: []
 
})

export class AgregarComponent implements OnInit {

   public Formulario:FormGroup;

   public Modalidad:Array<string>=['Nocaut','Todos contra todos','Grupos y play-off'];

  constructor() { }

  ngOnInit() {
    this.Formulario= new FormGroup({
      'nombre': new FormControl(null, [Validators.required,Validators.pattern('^[ A-z]*$'),Validators.min(5)],[this.UserExist]),
      'deporte': new FormControl(null, [Validators.required,Validators.pattern('^[ A-z]*$'),Validators.min(5)]),
      'modalidad': new FormControl(null,Validators.required)

    })

  }


  UserExist(control:FormControl):Promise<any>|Observable<any>{
    return new Promise( (res,rej)=>{
      setTimeout(() => {
        if(control.value==="admin"){
          res({existe:true})
        }else{
          res(null)
        }
        
      }, 3000);

    })
  }

  public Guardar(){
    console.log(this.Formulario);    
  }

}
