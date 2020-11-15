import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharDetComponent } from './char-det/char-det.component';
import { CharListComponent } from './char-list/char-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CharDetComponent,
    CharListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CharDetComponent,
    CharListComponent
  ]
})
export class CharactersModule { }
