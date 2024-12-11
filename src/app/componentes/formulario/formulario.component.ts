import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuarioListar } from '../../Models/Usuarios';
import { response } from 'express';

@Component({
  selector: 'app-formulario',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<UsuarioListar>();

  usuarioForm!: FormGroup;

  ngOnInit(): void {
    this.usuarioForm = new FormGroup( {
      id: new FormControl(0),
      nomeCompleto: new FormControl(''),
      email: new FormControl(''),
      cargo: new FormControl(''),
      salario: new FormControl(0),
      cpf: new FormControl(''),
      situacao: new FormControl(true),
      senha: new FormControl('')

    });
  }


  submit(){
    //console.log(this.usuarioForm.value)
    this.onSubmit.emit(this.usuarioForm.value)

  }
}
