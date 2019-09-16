import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './component/core/homepage/homepage.component';
import {LoginComponent} from './component/feature/login/login.component';
import {HouseDetailComponent} from './component/feature/house-detail/house-detail.component';
import {RegisterComponent} from './component/feature/register/register.component';
import {RegisterHostComponent} from './component/feature/register-host/register-host.component';
import {HomeForHostComponent} from './component/core/home-for-host/home-for-host.component';
import {CreateHouseComponent} from './component/feature/create-house/create-house.component';
import {ProfileUserComponent} from './component/feature/profile-user/profile-user.component';
import {BookingOfUserComponent} from './component/feature/booking-of-user/booking-of-user.component';
import {HomeForGuestComponent} from './component/core/home-for-guest/home-for-guest.component';
import {ConfirmPasswordComponent} from './component/feature/confirm-password/confirm-password.component';
import {ListHouseOfHostComponent} from './component/feature/list-house-of-host/list-house-of-host.component';
import {ListHouseHostComponent} from './component/feature/list-house-host/list-house-host.component';
import {EditHouseComponent} from './component/feature/edit-house/edit-house.component';
import {EditStatusHouseComponent} from './component/feature/edit-status-house/edit-status-house.component';
import {AuthGuard} from './services/auth.guard';
import {PageNotFoundComponent} from './component/shared/page-not-found/page-not-found.component';
import {Role} from './model/Role';
import {PageForbiddenComponent} from './component/shared/page-forbidden/page-forbidden.component';
import {ConfirmOrderComponent} from './component/feature/confirm-order/confirm-order.component';
// import {UploadFileComponent} from './component/upload-file/upload-file.component';
import {ConfirmPasswordComponent} from './component/feature/confirm-password/confirm-password.component';
import {ListHouseOfHostComponent} from './component/feature/list-house-of-host/list-house-of-host.component';


const routes: Routes = [
  // {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'houses', component: HomepageComponent},
  {path: 'houses/:id', component: HouseDetailComponent},
  {path: 'registerUser', component: RegisterComponent},
  {path: 'registerHost', component: RegisterHostComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '403', component: PageForbiddenComponent},
  {path: '', redirectTo: 'houses', pathMatch: 'full'},
  {path: 'houses/:id/booking', component: ConfirmOrderComponent, canActivate: [AuthGuard], data: {roles: [Role.GUEST]}},
  {
    path: 'home-for-host', component: HomeForHostComponent, canActivate: [AuthGuard], data: {roles: [Role.HOST]},
    children: [
      {path: 'houses', component: ListHouseHostComponent, canActivate: [AuthGuard], data: {roles: [Role.HOST]}},
      {path: 'create-house', component: CreateHouseComponent, canActivate: [AuthGuard], data: {roles: [Role.HOST]}},
    ]
  },
  {path: 'me/orders', component: HomeForGuestComponent, canActivate: [AuthGuard], data: {roles: [Role.GUEST]}},
  {
    path: 'profileUser',
    component: ProfileUserComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.HOST, Role.GUEST, Role.ADMIN, Role.PM]}
  },
  {path: 'bookingOfUser', component: BookingOfUserComponent, canActivate: [AuthGuard], data: {roles: [Role.GUEST]}},
  // {path: 'editPassword', component: EditPasswordComponent},
  {path: 'edit-house/:id', component: EditHouseComponent, canActivate: [AuthGuard], data: {roles: [Role.HOST]}},
  {path: 'edit-statusHouse/:houseId', component: EditStatusHouseComponent, canActivate: [AuthGuard], data: {roles: [Role.HOST]}},
  // dòng này phải đặt sau tất cả những link ko cần login và trước những link cần đăng nhập
  // {path: '**', component: PageNotFoundComponent},
  {path: 'home-for-host', component: HomeForHostComponent},
  {path: 'me/orders', component: HomeForGuestComponent},
  {path: 'create-house', component: CreateHouseComponent},
  {path: 'profileUser', component: ProfileUserComponent},
  {path: 'bookingOfUser/:id', component: BookingOfUserComponent},
  {
    path: 'confirmPassword',
    component: ConfirmPasswordComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.HOST, Role.GUEST, Role.PM, Role.ADMIN]}
  },
  {path: 'listHouseOfHost', component: ListHouseOfHostComponent},
  // {path: '**', redirectTo: '/houses', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled', // Add options right here
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
