import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Global } from './providers/global';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { ImagesComponent } from './images/images.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule,
    MatButtonToggleModule,
    MatIconModule
    
  ],
  providers: [
    BrowserModule,
    HttpClientModule,
    Global,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
