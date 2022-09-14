import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableCoursesComponent } from './components/table-courses/table-courses.component';
import { TableStudentsComponent } from './components/table-students/table-students.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CrudNavComponent } from './components/crud-nav/crud-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TableCoursesComponent,
    TableStudentsComponent,
    MainMenuComponent,
    CrudNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
