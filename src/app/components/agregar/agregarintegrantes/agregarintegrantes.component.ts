import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-agregarintegrantes',
  templateUrl: './agregarintegrantes.component.html',
  styleUrls: ['./agregarintegrantes.component.css']
})
export class AgregarintegrantesComponent implements OnInit {

  constructor() { }

  public Formulario:FormGroup

  ngOnInit() {
    this.Formulario=new FormGroup({

      'nombreEquipo': new FormControl(null,[Validators.required]),
      'jugadores':new FormArray([
        new FormControl (null,[Validators.required])

      ])

    })

    console.log(this.Formulario.controls['jugadores']['controls']);
    
  }

  public agregarJugador(){
    (<FormArray> this.Formulario.controls['jugadores']).push(
      new FormControl (null,[Validators.required])
    )
  }

  public removerJugador(index){
    (<FormArray> this.Formulario.controls['jugadores']).removeAt(index)

  }

  public guardarEquipo(){
    console.log(this.Formulario);
    

  }

}
