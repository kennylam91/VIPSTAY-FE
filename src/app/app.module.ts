import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './component/homepage/homepage.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {HouseDetailComponent} from './component/house-detail/house-detail.component';
import {SearchComponent} from './component/search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './component/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './component/register/register.component';
import {RegisterHostComponent} from './component/register-host/register-host.component';

import {UploadFileComponent} from './component/upload-file/upload-file.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {HeaderForHostComponent} from './component/header-for-host/header-for-host.component';
import {HomeForHostComponent} from './component/home-for-host/home-for-host.component';
import {CreateHouseComponent} from './component/create-house/create-house.component';
import {DatePickerComponent} from './component/date-picker/date-picker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';

const firebaseConfig = {
  apiKey: 'AIzaSyDibiKCzy27CCE-J5_ncb1imwzYqK9-L_Q',
  authDomain: 'vipstay-637a2.firebaseapp.com',
  databaseURL: 'https://vipstay-637a2.firebaseio.com',
  projectId: 'vipstay-637a2',
  storageBucket: 'vipstay-637a2.appspot.com',
  messagingSenderId: '394776501356',
  appId: '1:394776501356:web:d1cea52d76cd19a0'
};
// @ts-ignore
// @ts-ignore
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
    DatePickerComponent],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
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
