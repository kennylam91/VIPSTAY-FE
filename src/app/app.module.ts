import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './component/core/homepage/homepage.component';
import {HeaderComponent} from './component/shared/header/header.component';
import {FooterComponent} from './component/shared/footer/footer.component';
import {HouseDetailComponent} from './component/feature/house-detail/house-detail.component';
import {SearchComponent} from './component/shared/search/search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './component/feature/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './component/feature/register/register.component';
import {RegisterHostComponent} from './component/feature/register-host/register-host.component';

import {UploadFileComponent} from './component/feature/upload-file/upload-file.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {HeaderForHostComponent} from './component/shared/header-for-host/header-for-host.component';
import {HomeForHostComponent} from './component/core/home-for-host/home-for-host.component';
import {CreateHouseComponent} from './component/feature/create-house/create-house.component';
import {ListHouseComponent} from './component/feature/list-house/list-house.component';
import {environment} from '../environments/environment';
import {ProfileUserComponent} from './component/feature/profile-user/profile-user.component';
import {NavbarProfileComponent} from './component/feature/navbar-profile/navbar-profile.component';
import {BookingOfUserComponent} from './component/feature/booking-of-user/booking-of-user.component';
// import { EditPasswordComponent } from './component/feature/edit-password/edit-password.component';
import {AuthInterceptorService} from './services/auth-interceptor.service';
import {HomeForGuestComponent} from './component/core/home-for-guest/home-for-guest.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {EditHouseComponent} from './component/feature/edit-house/edit-house.component';
import {EditStatusHouseComponent} from './component/feature/edit-status-house/edit-status-house.component';
import {ListHouseHostComponent} from './component/feature/list-house-host/list-house-host.component';
// set locale VN
import {registerLocaleData} from '@angular/common';
import localeVN from '@angular/common/locales/vi';
import {PageNotFoundComponent} from './component/shared/page-not-found/page-not-found.component';
import {PageForbiddenComponent} from './component/shared/page-forbidden/page-forbidden.component';
import {AuthenticationService} from './services/authentication.service';
import {ErrorInterceptorService} from './services/error-interceptor.service';

import { SlideShowComponent } from './component/feature/slide-show/slide-show.component';
import { ConfirmPasswordComponent } from './component/feature/confirm-password/confirm-password.component';
import { ListHouseOfHostComponent } from './component/feature/list-house-of-host/list-house-of-host.component';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';

// set locale VN
registerLocaleData(localeVN);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    HouseDetailComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    RegisterHostComponent,
    UploadFileComponent,
    HomeForHostComponent,
    HeaderForHostComponent,
    CreateHouseComponent,
    ProfileUserComponent,
    NavbarProfileComponent,
    BookingOfUserComponent,
    ListHouseComponent,
    HomeForGuestComponent,
    SlideShowComponent,
    ListHouseHostComponent,
    EditHouseComponent,
    EditStatusHouseComponent,
    PageNotFoundComponent,
    PageForbiddenComponent,
    SlideShowComponent,
    ConfirmPasswordComponent,
    ListHouseOfHostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DatePickerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
