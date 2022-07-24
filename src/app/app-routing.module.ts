import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './modules/home/home.component';
// import { DeveloperComponent } from './modules/developer/developer.component';
// import { LoginComponent } from './modules/login/login.component';
// import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "", loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  // { path: "developer", component: DeveloperComponent },
  { path: "developer", loadChildren: () => import('./modules/developer/developer.module').then(m => m.DeveloperModule) },
  // { path: "login", component: LoginComponent },
  { path: "login", loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  // { path: "register", component: RegisterComponent}
  { path: "register", loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)}
  // { path: ":username", }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
