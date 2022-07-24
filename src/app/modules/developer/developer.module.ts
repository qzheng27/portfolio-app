import { NgModule } from '@angular/core';

import { DeveloperComponent } from './developer.component';
import { DeveloperRoutingModule } from './developer-routing.module';

@NgModule({
  imports: [
    DeveloperRoutingModule
  ],
  declarations: [
    DeveloperComponent
  ],
  providers: []
})
export class DeveloperModule {}