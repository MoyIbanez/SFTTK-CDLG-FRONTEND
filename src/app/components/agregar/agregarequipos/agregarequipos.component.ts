import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router'


@Component({
  selector: 'app-agregarequipos',
  templateUrl: './agregarequipos.component.html',
  styleUrls: ['./agregarequipos.component.css']
})
export class AgregarequiposComponent implements OnInit {

    public Formulario:FormGroup

  

  constructor(private router:Router) { }

  ngOnInit() {
    this.Formulario=new FormGroup({

      'equipos': new FormArray([
      
    ])
    
    })


  }


  public anadirJugadores(){
    // (<FormArray>this.Formulario.controls['Equipos']).push(
    //   new FormControl(null,Validators.required)
    // )

    this.router.navigate(['/agregarIntegrantes'])
  }

  public eliminarEquipo(index:number){
    console.log(index);
    
    (<FormArray>this.Formulario.controls['equipos']).removeAt(index)
  }

  


}
