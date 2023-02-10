import { Theme } from "../services/questions.service";

export interface Question {
id:number;
question:string;
options: string[];
reponses:any[];
reponseUser:string[];
detailCorrection?: string;
theme?:Theme;
lienInfo?:string;
isResultCorrect?:boolean;
niveau?:string;

}
