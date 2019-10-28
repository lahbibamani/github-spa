import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [{
  path: '',
  component: SearchComponent
},
{
  path: 'users/:username',
  component: UserDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
