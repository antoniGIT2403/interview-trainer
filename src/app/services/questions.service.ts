import { Injectable } from '@angular/core';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  listQuestionsAnswered : Question[] =[]

  constructor() { }
  getListQuestionAngular(){
    return QUESTIONS;
  }
 




}
 
//TODO FAIRE ENUM POUR THEME
export const QUESTIONS: Question[] = [
  {
    id: 1,
    question:"Quelle est la dernière version d'angular ? ",
    options:["11","12"],
    reponses:["11"],
    reponseUser:[],
    detailCorrection:"En fait la réponse est la suivant car bla la bla bla",
    theme:"base",
    lienInfo:"https://angular.io/guide/what-is-angular",
  },
  {
    id: 2,
    question:"What is typscript ?",
    options:["une grosse merde","un surcouche de javascript"],
    reponses:["un surcouche de javascript"],
    reponseUser:[],
    detailCorrection:"En fait la  réponse est la suivant car bla la bla bla",
    theme:"base",
    lienInfo:"https://angular.io/guide/what-is-angular",
  },
]
