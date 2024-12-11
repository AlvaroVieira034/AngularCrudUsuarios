import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../Models/ApiResponse';
import { UsuarioListar } from '../Models/Usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ApiUrl = environment.UrlApi;

  constructor(private http : HttpClient ) { }

  GetUsuarios(): Observable<ApiResponse<UsuarioListar[]>>{
    return this.http.get<ApiResponse<UsuarioListar[]>>(this.ApiUrl);

  }

  DeletarUsuario(id: number | undefined) : Observable<ApiResponse<UsuarioListar[]>>{
    return this.http.delete<ApiResponse<UsuarioListar[]>>(`${this.ApiUrl}?usuarioId=${id}`);

  }

  CriarUsuario(usuario: UsuarioListar) : Observable<ApiResponse<UsuarioListar[]>>{
    return this.http.post<ApiResponse<UsuarioListar[]>>(this.ApiUrl, usuario);
    
  }

  GetUsuarioId(id: number): Observable<ApiResponse<UsuarioListar>>{
    return this.http.get<ApiResponse<UsuarioListar>>(`${this.ApiUrl}/${id}`);

  }

  EditarUsuario(usuario: UsuarioListar): Observable<ApiResponse<UsuarioListar[]>>{
    return this.http.put<ApiResponse<UsuarioListar[]>>(this.ApiUrl, usuario);

  }

}


