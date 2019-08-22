import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './component/homepage/homepage.component';
import {LoginComponent} from './component/login/login.component';
import {HouseDetailComponent} from './component/house-detail/house-detail.component';
import {RegisterComponent} from './component/register/register.component';
import {RegisterHostComponent} from './component/register-host/register-host.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomepageComponent},
  {path: 'houses/:id', component: HouseDetailComponent},
  {path: 'registerUser', component: RegisterComponent},
  {path: 'registerHost', component: RegisterHostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
