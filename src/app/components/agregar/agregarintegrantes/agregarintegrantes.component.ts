import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { EquipoService } from '../../../services/equipo.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-agregarintegrantes',
  templateUrl: './agregarintegrantes.component.html',
  styleUrls: ['./agregarintegrantes.component.css']
})
export class AgregarintegrantesComponent implements OnInit {

  constructor(private equipoService:EquipoService) { }

  public Formulario:FormGroup
  public idsJugadores:Array<string>=[]

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
    
    console.log(index);
    
    
    (<FormArray> this.Formulario.controls['jugadores']).removeAt(index)
    

  }

  public guardarIntegrante(){
  let correos =this.Formulario.controls['jugadores'].value;
 
    this.equipoService.agregarUsuarios(correos).pipe(
      finalize( ()=>{
        this.guardarEquipo()
        
      } )
    ).subscribe(
      (data:any)=>{
        this.idsJugadores=data;
      }
    )
    

}


/**
 * guardarEquipo
 */
public guardarEquipo() {

  let body={
    nombre:this.Formulario.controls['nombreEquipo'].value,
    jugadores:this.idsJugadores
  }

  console.log(body);
  
  this.equipoService.agregarEquipos(body).subscribe((data:any)=>{
    console.log(data);
})
  
}

}
