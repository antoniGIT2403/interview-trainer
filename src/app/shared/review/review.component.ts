import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() currentQuestion!: Question;
  constructor() { }

  ngOnInit(): void {
  }

  renderSelectedCss(option: string) {
    let isSelected = false;
    if (
      this.currentQuestion.reponseUser &&
      this.currentQuestion.reponseUser.find(
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
