import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './component/homepage/homepage.component';
import {LoginComponent} from './component/login/login.component';
import {HouseDetailComponent} from './component/house-detail/house-detail.component';
import {UploadFileComponent} from './component/upload-file/upload-file.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'upload', component: UploadFileComponent},
  {path: '', component: HomepageComponent},
  {path: 'houses/:id', component: HouseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
