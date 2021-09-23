import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddmemberRoutingModule } from './addmember-routing.module';
import { AddmemberComponent } from './addmember.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddmemberComponent
  ],
  imports: [
    CommonModule,
    AddmemberRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class AddmemberModule { }
