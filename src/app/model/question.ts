export interface Question {
id:number;
question:string;
options: string[];
reponses:any[];
reponseUser:string[];
detailCorrection?: string;
theme?:string;
lienInfo?:string;
isResultCorrect?:boolean;

}
