import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './component/homepage/homepage.component';
import {LoginComponent} from './component/login/login.component';
import {HouseDetailComponent} from './component/house-detail/house-detail.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomepageComponent},
  {path: 'houses/:id', component: HouseDetailComponent}
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
