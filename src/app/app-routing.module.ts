import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TableCoursesComponent } from './components/table-courses/table-courses.component';
import { TableStudentsComponent } from './components/table-students/table-students.component';

const routes: Routes = [
  { path: 'students', component: TableStudentsComponent },
  { path: 'courses', component: TableCoursesComponent },
  { path: '',   redirectTo: '/students', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
