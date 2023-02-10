import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QuestionsService, Theme } from 'src/app/services/questions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  score = 0;
  total = 0;
  recommendation = '';
  displayReview = false;
  currentQuestion!: Question;

  scoreBasic = 0;
  scoreComponent = 0;
  scoreHttp = 0;
  scoreTemplate = 0;
  scoreDirective = 0;
  scoreDi = 0;
  scoreRouting = 0;
  scoreForms = 0;
  scoreTesting = 0;
  scoreInternationalisation = 0;
  scoreCompilation = 0;

  listQuestion: Question[] = [];

  listBasic: Question[] = [];
  listComponent: Question[] = [];
  listHttp: Question[] = [];
  listTemplate: Question[] = [];
  listDirective: Question[] = [];
  listDI: Question[] = [];
  listRouting: Question[] = [];
  listForms: Question[] = [];
  listTesting: Question[] = [];
  listInternationalisation: Question[] = [];
  listCompilation: Question[] = [];

  constructor(public questionService: QuestionsService) {}

  ngOnInit(): void {
    this.calculScore();
    this.setProgressBar();
    this.total = this.questionService.listQuestionsAnswered.length;
   
  }

  private setProgressBar(){
    
  }

  fillList(question: Question) {
    switch (question.theme) {
      case Theme.BASIC:
        this.listBasic.push(question);
        if (question.isResultCorrect) {
          this.scoreBasic = this.scoreBasic + 1;
        }
        break;
      case Theme.COMPONENT:
        this.listComponent.push(question);
        if (question.isResultCorrect) {
          this.scoreComponent = this.scoreComponent + 1;
        }
        
        break;
      case Theme.HTTP:
        this.listHttp.push(question);
        if (question.isResultCorrect) {
          this.scoreHttp = this.scoreHttp + 1;
        }
        break;
      case Theme.TEMPLATES:
        this.listTemplate.push(question);
        if (question.isResultCorrect) {
          this.scoreTemplate = this.scoreTemplate + 1;
        }
        break;
      case Theme.DIRECTIVE:
        this.listDirective.push(question);
        if (question.isResultCorrect) {
          this.scoreDirective = this.scoreDirective + 1;
        }
        break;
      case Theme.ROUTING:
        this.listRouting.push(question);
        if (question.isResultCorrect) {
          this.scoreRouting = this.scoreRouting + 1;
        }
        break;
      case Theme.FORMS:
        this.listForms.push(question);
        this.incrementScoreQuestion(question.isResultCorrect, this.scoreForms);
        break;
      case Theme.TESTING:
        this.listTesting.push(question);
        if (question.isResultCorrect) {
          this.scoreTesting = this.scoreTesting + 1;
        }
        break;
      case Theme.INTERNATIONALISATION:
        this.listInternationalisation.push(question);
        if (question.isResultCorrect) {
          this.scoreInternationalisation = this.scoreInternationalisation + 1;
        }
        break;
      case Theme.COMPILATION:
        this.listCompilation.push(question);
        if (question.isResultCorrect) {
          this.scoreCompilation = this.scoreCompilation + 1;
        }
        break;
      default:
        break;
    }
  }
  incrementScoreQuestion(
    isResultCorrect: boolean | undefined,
    score: number
  ): number {
    if (isResultCorrect) {
      return (score = score + 1);
    }
    return 0;
  }
  calculScore() {
    this.questionService.listQuestionsAnswered.forEach((question) => {
      this.fillList(question);
      if (question.isResultCorrect) {
        this.score = this.score + 1;
      }
    });
  }
  reviewQuestion(question: Question) {
    this.currentQuestion = question;
    this.displayReview = true;
  }
}
