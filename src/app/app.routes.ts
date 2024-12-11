import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'editar/:id', component: EditarComponent},
];
