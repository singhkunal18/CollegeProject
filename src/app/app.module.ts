import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateComponent } from './authentication/authenticate/authenticate.component';
import { HomeComponent } from './home/home.component';
import { CollectorComponent } from './collector/collector.component';
import { DonationComponent } from './donation/donation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './authentication/login/login.component';
import { ForgotpasswordComponent } from './authentication/forgotpassword/forgotpassword.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { IconsPipe } from './utils/icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    HomeComponent,
    CollectorComponent,
    DonationComponent,
    PageNotFoundComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegistrationComponent,
    IconsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
