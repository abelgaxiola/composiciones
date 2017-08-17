import { ContactoComponent } from './contacto/contacto.component';
import { CancionesComponent } from './canciones/canciones.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'canciones', component: CancionesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: '**', redirectTo: 'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
