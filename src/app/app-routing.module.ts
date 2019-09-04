import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './component/core/homepage/homepage.component';
import {LoginComponent} from './component/feature/login/login.component';
import {HouseDetailComponent} from './component/feature/house-detail/house-detail.component';
import {RegisterComponent} from './component/feature/register/register.component';
import {RegisterHostComponent} from './component/feature/register-host/register-host.component';
// import {UploadFileComponent} from './component/upload-file/upload-file.component';

import {HomeForHostComponent} from './component/core/home-for-host/home-for-host.component';
import {CreateHouseComponent} from './component/feature/create-house/create-house.component';
import {ListHouseComponent} from './component/feature/list-house/list-house.component';
import {UploadFileComponent} from './component/feature/upload-file/upload-file.component';
import {ProfileUserComponent} from './component/feature/profile-user/profile-user.component';
import {BookingOfUserComponent} from './component/feature/booking-of-user/booking-of-user.component';
// import {EditPasswordComponent} from './component/feature/edit-password/edit-password.component';
import {HomeForGuestComponent} from './component/core/home-for-guest/home-for-guest.component';
import {ListHouseHostComponent} from './component/feature/list-house-host/list-house-host.component';
import {EditHouseComponent} from './component/feature/edit-house/edit-house.component';
import {EditStatusHouseComponent} from './component/feature/edit-status-house/edit-status-house.component';
import {AuthGuard} from './services/auth.guard';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './component/shared/page-not-found/page-not-found.component';


const routes: Routes = [
  // {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'houses', component: HomepageComponent},
  {path: 'houses/:id', component: HouseDetailComponent},
  {path: 'registerUser', component: RegisterComponent},
  {path: 'registerHost', component: RegisterHostComponent},
  {path: '', redirectTo: 'houses', pathMatch: 'full'},

  {
    path: 'home-for-host', component: HomeForHostComponent, canActivate: [AuthGuard],
    children: [
      {path: 'houses', component: ListHouseHostComponent, canActivate: [AuthGuard]},
      {path: 'create-house', component: CreateHouseComponent, canActivate: [AuthGuard]},
    ]
  },
  {path: 'me/orders', component: HomeForGuestComponent, canActivate: [AuthGuard]},
  {path: 'profileUser', component: ProfileUserComponent, canActivate: [AuthGuard]},
  {path: 'bookingOfUser', component: BookingOfUserComponent, canActivate: [AuthGuard]},
  // {path: 'editPassword', component: EditPasswordComponent},
  {path: 'edit-house/:id', component: EditHouseComponent, canActivate: [AuthGuard]},
  {path: 'edit-statusHouse/:houseId', component: EditStatusHouseComponent, canActivate: [AuthGuard]},
  // dòng này phải đặt sau tất cả những link ko cần login và trước những link cần đăng nhập
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
