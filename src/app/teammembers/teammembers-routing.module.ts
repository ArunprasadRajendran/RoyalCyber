import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeammembersComponent } from './teammembers.component';

const routes: Routes = [{ path: '', component: TeammembersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeammembersRoutingModule { }
