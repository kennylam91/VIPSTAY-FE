import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './component/core/homepage/homepage.component';
import {LoginComponent} from './component/feature/login/login.component';
import {HouseDetailComponent} from './component/feature/house-detail/house-detail.component';
import {RegisterComponent} from './component/feature/register/register.component';
import {RegisterHostComponent} from './component/feature/register-host/register-host.component';
// import {UploadFileComponent} from './component/upload-file/upload-file.component';

import {CreateHouseComponent} from './component/feature/create-house/create-house.component';
import {ListHouseComponent} from './component/feature/list-house/list-house.component';
import {UploadFileComponent} from './component/feature/upload-file/upload-file.component';
import {ProfileUserComponent} from './component/feature/profile-user/profile-user.component';
import {HomeForHostComponent} from './component/core/home-for-host/home-for-host.component';
import {BookingOfUserComponent} from './component/feature/booking-of-user/booking-of-user.component';
import {HomeForGuestComponent} from './component/core/home-for-guest/home-for-guest.component';
import {ConfirmPasswordComponent} from './component/feature/confirm-password/confirm-password.component';
import {ListHouseOfHostComponent} from './component/feature/list-house-of-host/list-house-of-host.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'upload', component: UploadFileComponent},
  {path: 'houses', component: HomepageComponent},
  {path: 'houses/:id', component: HouseDetailComponent},
  {path: 'registerUser', component: RegisterComponent},
  {path: 'registerHost', component: RegisterHostComponent},
  {path: 'home-for-host', component: HomeForHostComponent},
  {path: 'me/orders', component: HomeForGuestComponent},
  {path: 'create-house', component: CreateHouseComponent},
  {path: 'profileUser', component: ProfileUserComponent},
  {path: 'bookingOfUser/:id', component: BookingOfUserComponent},
  {path: 'confirmPassword', component: ConfirmPasswordComponent},
  {path: 'listHouseOfHost', component: ListHouseOfHostComponent},
  {path: '**', redirectTo: '/houses', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
