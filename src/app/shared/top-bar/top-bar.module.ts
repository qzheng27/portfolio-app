import { NgModule } from '@angular/core';
// import { ModuleWithProviders, NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { TopBarComponent } from './top-bar.component';
import { TopBarRoutingModule } from './top-bar-routing.module';

@NgModule({
  imports: [
    TopBarRoutingModule
  ],
  exports: [
    TopBarComponent
  ],
  declarations: [
    TopBarComponent
  ],
  providers: []
})
export class TopBarModule {}