import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './component/homepage/homepage.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {HouseDetailComponent} from './component/house-detail/house-detail.component';
import {SearchComponent} from './component/search/search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FooterTopComponent} from './footer-top/footer-top.component';
import {AuthHttpInterceptorService} from './service/authHttpInterceptor.service';
import { LoginComponent } from './component/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    HouseDetailComponent,
    SearchComponent,
    FooterTopComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
