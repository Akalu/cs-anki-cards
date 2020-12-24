import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Question} from '../../model/question';
import {QuestionService} from '../../services/question.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public question: Question = new Question();
  public counter = 0;
  private questions: Question[] = [];
  public first: boolean;
  public last: boolean;

  constructor(private route: ActivatedRoute,
              private questionsService: QuestionService) {
  }

  ngOnInit(): void {
     this.question = this.route.snapshot.data.questions;
     this.questionsService.findAllQuestions()
       .subscribe(qst => {
         this.questions = qst;
         console.log('got ' + this.questions.length + ' questions');
         this.changeCounter(0);
       });
  }


  changeCounter(num: number): void {
      this.counter += num;
      let len = this.questions.length;
      this.counter = this.counter < 0 ? 0 : this.counter;
      this.counter = this.counter > len - 1 ? len - 1 : this.counter;
      this.first = this.counter === 0;
      this.last = this.counter === len - 1;
      this.question = this.questions[this.counter];
  }

  goFirst(): void {
    this.counter = 0;
    let len = this.questions.length;
    this.first = this.counter === 0;
    this.last = this.counter === len - 1;
    this.question = this.questions[this.counter];
  }

  goLast(): void {
    this.counter = this.questions.length - 1;
    let len = this.questions.length;
    this.first = this.counter === 0;
    this.last = this.counter === len - 1;
    this.question = this.questions[this.counter];
  }

  arrowLeftEvent() {
    console.log('left');
    this.changeCounter(-1);
  }

  arrowRightEvent() {
    this.changeCounter(1);
  }
}
