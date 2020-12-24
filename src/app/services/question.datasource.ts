import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable, BehaviorSubject, of} from 'rxjs';
import {Question} from '../model/question';
import {QuestionService} from './question.service';
import {catchError, finalize} from 'rxjs/operators';



export class QuestionDatasource implements DataSource<Question> {

  private lessonsSubject = new BehaviorSubject<Question[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private coursesService: QuestionService) {

  }

  connect(collectionViewer: CollectionViewer): Observable<Question[]> {
    console.log('Connecting data source');
    return this.lessonsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.lessonsSubject.complete();
    this.loadingSubject.complete();
  }

}

