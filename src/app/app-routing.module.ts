import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeveloperComponent } from './developer/developer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  // { path: "developer", component: DeveloperComponent },
  { path: "developer", loadChildren: () => import('./developer/developer.module').then(m => m.DeveloperModule) },
  // { path: "login", component: LoginComponent },
  { path: "login", loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // { path: "register", component: RegisterComponent}
  { path: "register", loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
