import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import {ConnectService} from './services/connect.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Agrega esta línea
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodolistviewComponent } from './todolistview/todolistview.component';
import { AddtotodolistComponent } from './addtotodolist/addtotodolist.component';
import { EditarListComponent } from './editar-list/editar-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistviewComponent,
    AddtotodolistComponent,
    EditarListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,

  ],
  providers: [
    ConnectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
