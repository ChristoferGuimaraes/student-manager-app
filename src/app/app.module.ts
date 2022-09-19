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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ModalComponent } from './components/modal/modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TableCoursesComponent,
    TableStudentsComponent,
    MainMenuComponent,
    CrudNavComponent,
    NotFoundComponent,
    ModalComponent,
    CourseFormComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MdbModalModule,
    MdbFormsModule,
    MdbValidationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
