


import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Question} from '../model/question';
import {Observable} from 'rxjs';
import {QuestionService} from './question.service';



@Injectable()
export class QuestionResolver implements Resolve<Question> {

  constructor(private questionService: QuestionService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question> {
    const qid = route.params.id ? route.params.id : '0';
    return this.questionService.findQuestionById(qid);
  }

}

