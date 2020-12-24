import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {AboutComponent} from './components/about/about.component';
import {QuestionComponent} from './components/question/question.component';
import {QuestionResolver} from './services/question.resolver';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'questions',
    component: QuestionComponent,
    resolve: {
      questions: QuestionResolver
    },
  },
  {
    path: 'questions/:id',
    component: QuestionComponent,
    resolve: {
      questions: QuestionResolver
    },
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [QuestionResolver] // Don't forget to pass RouteResolver into the providers array
})
export class AppRoutingModule { }
