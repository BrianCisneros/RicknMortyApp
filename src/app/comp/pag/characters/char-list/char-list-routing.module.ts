import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharListComponent } from './char-list.component';

const routes: Routes = [{ path: '', component: CharListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharListRoutingModule { }
