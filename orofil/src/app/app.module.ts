import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkilsComponent } from './skils/skils/skils.component';
import { ProjectComponent } from './project/project/project.component';
import { ContactComponent } from './contact/contact/contact.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkilsComponent,
    ProjectComponent,
    ContactComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
