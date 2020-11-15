import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mixed/comp/navbar/navbar.component';
import { SearchComponent } from './mixed/comp/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './mixed/comp/footer/footer.component';
import { LoginComponent } from './mixed/comp/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
