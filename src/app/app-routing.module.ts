import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./teammembers/teammembers.module').then(m => m.TeammembersModule) },
  { path: 'addmember', loadChildren: () => import('./teammembers/addmember/addmember.module').then(m => m.AddmemberModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
