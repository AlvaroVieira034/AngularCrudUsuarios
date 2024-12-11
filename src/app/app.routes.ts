import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: 'cadastro', component: CadastroComponent},
    {path: '', component: HomeComponent}

];
