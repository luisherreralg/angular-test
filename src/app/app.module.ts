import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RobotListComponent } from './robot-list/robot-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormAddListComponent } from './form-add-list/form-add-list.component';

@NgModule({
  declarations: [AppComponent, FormComponent, RobotListComponent, AboutComponent, HomeComponent, FormAddListComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
