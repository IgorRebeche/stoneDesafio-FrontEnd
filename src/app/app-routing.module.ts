import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', redirectTo:'painel', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'painel', component: PainelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
