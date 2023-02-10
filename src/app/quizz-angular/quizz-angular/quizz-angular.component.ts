import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-quizz-angular',
  templateUrl: './quizz-angular.component.html',
  styleUrls: ['./quizz-angular.component.scss'],
})
export class QuizzAngularComponent implements OnInit {
  public listQuestionAngular: Question[] = [];
  public currentQuestion: any;
  public currentIndex = 0;
  displayCorrection = false;
  isAnswerCorrect = true;
  index = 0;
  displayRecapBtn = false;

  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listQuestionAngular = this.questionsService.getListQuestionAngular().sort((a, b) => 0.5 - Math.random());
    console.log(this.questionsService.getListQuestionAngularFromDb());
    this.currentQuestion = this.listQuestionAngular[0];

  }
  public getIndexQuestion():number{
   return this.questionsService.getListQuestionAngular().indexOf( this.currentQuestion) + 1;
  }
  correction() {
    this.displayCorrection = true;
    this.listQuestionAngular[this.index].isResultCorrect = true;
    this.listQuestionAngular[this.index].reponseUser.forEach((reponse) => {
      if (
        !this.listQuestionAngular[this.index].reponses.find(
          (vraiReponse) => vraiReponse === reponse
        )
      ) {
        this.listQuestionAngular[this.index].isResultCorrect = false;
      }
    });
    if (this.index === this.listQuestionAngular.length - 1) {
      this.displayRecapBtn = true;
    }
  }
  redirectResult() {
    this.questionsService.listQuestionsAnswered = this.listQuestionAngular;
    this.router.navigate(['dashboard']);
  }

  displayNextQuestion() {
    this.index = this.index + 1;
    this.currentQuestion = this.listQuestionAngular[this.index];
    this.displayCorrection = false;
    //si derniere question on affiche le bouton finaliser
    if (this.index === this.listQuestionAngular.length - 1) {
      this.displayRecapBtn = true;
    }
  }
  answerSelection(option: string) {
    if (
      this.listQuestionAngular[this.index].reponseUser?.find(
        (reponse) => reponse === option
      )
    ) {
      let indexTodelete =
        this.listQuestionAngular[this.index].reponseUser?.indexOf(option);
      this.listQuestionAngular[this.index].reponseUser.splice(indexTodelete, 1);
    } else {
      this.listQuestionAngular[this.index].reponseUser?.push(option);
    }
  }
  renderSelectedCss(option: string) {
    let isSelected = false;
    if (
      this.listQuestionAngular[this.index].reponseUser &&
      this.listQuestionAngular[this.index].reponseUser.find(
        (reponse) => reponse === option
      )
    ) {
      isSelected = true;
    }
    return {
      'btn-selected': isSelected,
      'question-block': !isSelected,
    };
  }
}
