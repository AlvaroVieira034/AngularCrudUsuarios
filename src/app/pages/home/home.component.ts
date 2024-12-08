import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../Models/Usuarios';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  usuarios : UsuarioListar[] = [];
  usuariosGeral : UsuarioListar[] = [];

  constructor(private serviceUsuario : UsuarioService) {}

  ngOnInit(): void {
    this.serviceUsuario.GetUsuarios().subscribe(response => {
        this.usuarios = response.dados;
        this.usuariosGeral = response.dados;
        console.log(response);
    })
  }

}
