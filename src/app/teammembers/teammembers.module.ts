import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeammembersRoutingModule } from './teammembers-routing.module';
import { TeammembersComponent } from './teammembers.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { StylePaginatorDirective } from '../directive/style-paginator.directive';

@NgModule({
  declarations: [
    TeammembersComponent,
    StylePaginatorDirective
  ],
  imports: [
    CommonModule,
    TeammembersRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ]
})
export class TeammembersModule { }
