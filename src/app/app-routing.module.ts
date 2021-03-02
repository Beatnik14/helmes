import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './userComponents/user-detail/user-detail.component';
import { UsersManagmentComponent } from './users-managment/users-managment.component';

const routes: Routes = [
  {
    path: '',
    component: UsersManagmentComponent,
    pathMatch: 'full',
  },
  {
    path: 'user/:username',
    component: UserDetailComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
