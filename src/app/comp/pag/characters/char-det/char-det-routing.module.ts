import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharDetComponent } from './char-det.component';

const routes: Routes = [{ path: '', component: CharDetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharDetRoutingModule { }
