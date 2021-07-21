import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  score = 0;
  total = 0;
  recommendation ="";

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.calculScore();
    this.total =  this.questionService.listQuestionsAnswered.length;
  }
   
calculScore(){
  this.questionService.listQuestionsAnswered.forEach(
    (question) => {
      if(question.isResultCorrect)
      {
        this.score = this.score + 1;
      }
    }
  )
}

}
