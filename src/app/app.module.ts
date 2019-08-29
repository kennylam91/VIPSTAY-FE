import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './component/core/homepage/homepage.component';
import {HeaderComponent} from './component/shared/header/header.component';
import {FooterComponent} from './component/shared/footer/footer.component';
import {HouseDetailComponent} from './component/feature/house-detail/house-detail.component';
import {SearchComponent} from './component/shared/search/search.component';
import {HttpClientModule} from '@angular/common/http';
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
import { ListHouseComponent } from './component/feature/list-house/list-house.component';
import {environment} from '../environments/environment';
import {HeaderForHostComponent} from './component/header-for-host/header-for-host.component';
import {HomeForHostComponent} from './component/home-for-host/home-for-host.component';
import {CreateHouseComponent} from './component/create-house/create-house.component';
import {DatePickerComponent} from './component/date-picker/date-picker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';

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
    ListHouseComponent],
    CreateHouseComponent,
    DatePickerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
