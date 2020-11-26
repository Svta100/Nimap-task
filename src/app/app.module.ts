import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewitemComponent } from './components/viewitem/viewitem.component';
import { AboutComponent} from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { from } from 'rxjs';
import { FormValidationComponentComponent } from './form-validation-component/form-validation-component.component';
import { StudentscomponentComponent } from './studentscomponent/studentscomponent.component';
import { StudentslistcomponentComponent } from './studentslistcomponent/studentslistcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ViewitemComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PagenotfoundComponent,
    FormValidationComponentComponent,
    StudentscomponentComponent,
    StudentslistcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
