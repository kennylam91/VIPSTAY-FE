import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './component/homepage/homepage.component';
import {HouseDetailComponent} from './component/house-detail/house-detail.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'detail', component: HouseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
