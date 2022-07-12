import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from '../home/home.component';
// import { DeveloperComponent } from '../developer/developer.component';
// import { LoginComponent } from '../login/login.component';
// import { RegisterComponent } from '../register/register.component';
import { TopBarComponent } from './top-bar.component';

const routes: Routes = [
    { path: "", component: TopBarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopBarRoutingModule { }
