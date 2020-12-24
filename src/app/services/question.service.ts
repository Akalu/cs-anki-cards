import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError } from 'rxjs';
import {map} from 'rxjs/operators';
import {Question} from '../model/question';

// @ts-ignore
import QJson from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionSubject: BehaviorSubject<Question>;
  public question: Observable<Question>;

  questions: Question[];

  constructor(private http: HttpClient) {
      this.questions = QJson;
  }

  findQuestionById(questionId: number): Observable<Question> {
    return of(this.questions[questionId]);
  }


  findAllQuestions(): Observable<Question[]> {
    return of(this.questions);
  }


}
