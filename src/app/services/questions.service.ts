import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  listQuestionsAnswered: Question[] = [];

  constructor(private db: AngularFireDatabase) {}

  getListQuestionAngular() {
    return QUESTIONS;
  }

  public getListQuestionAngularFromDb() {
    this.db
      .list('questions')
      .snapshotChanges()
      .subscribe((data) => console.log(data));
  }
}
export enum niveau {
  DEBUTANT = 'Debutant',
  CONFIRME = 'Confirmé',
  EXPERT = 'Expert',
}
export enum Theme {
  BASIC = 'Basic',
  HTTP = 'http',
  COMPONENT = 'Component',
  TEMPLATES = 'Template',
  DIRECTIVE = 'http',
  DI = 'http',
  ROUTING = 'http',
  FORMS = 'http',
  TESTING = 'http',
  INTERNATIONALISATION = 'http',
  COMPILATION = 'http',
}
//TODO FAIRE ENUM POUR THEME
export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Quelle est la dernière version d'angular ? ",
    options: ['11', '12'],
    reponses: ['11'],
    reponseUser: [],
    detailCorrection: 'En fait la réponse est la suivant car bla la bla bla',
    theme: Theme.BASIC,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/what-is-angular',
  },
  {
    id: 2,
    question: 'What is typscript ?',
    options: ['une grosse merde', 'un surcouche de javascript'],
    reponses: ['un surcouche de javascript'],
    reponseUser: [],
    detailCorrection: 'En fait la  réponse est la suivant car bla la bla bla',
    theme: Theme.BASIC,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/what-is-angular',
  },
  // {
  //   id: 3,
  //   question:"What module should we import in order to use HttpClient Service?",
  //   options:["HttpClientModule","ClientModule", "HttpModule","HttpClientServiceModule"],
  //   reponses:["HttpClientModule"],
  //   reponseUser:[],
  //   detailCorrection:" Angular provides  the HttpClient service class in @angular/common/http. It allows to use http protocol with predefined function",
  //   theme:Theme.BASIC,
  //   niveau:niveau.DEBUTANT,
  //   lienInfo:"https://angular.io/guide/http",
  // },
  // {
  //   id: 4,
  //   question:"Which answer is not a built-in structural directive? ",
  //   options:["ngSwitch","ngFor", "ngWhile","ngIf"],
  //   reponses:["ngWhile"],
  //   reponseUser:[],
  //   detailCorrection:"Structural directives are used to add, remove or manipulate html element. The most common are NgIf, NgFor and NgSwitch. NgWhile doest not exist but it can be reproduced with an NgFor.",
  //   theme:Theme.BASIC,
  //   niveau:niveau.DEBUTANT,
  //   lienInfo:"https://angular.io/guide/built-in-directives#built-in-structural-directives",
  // },
  // {
  //   id: 5,
  //   question:"what is an angular component ",
  //   options:["a typscript class","a typscript class with an html template", "a new html template","a specific decorator"],
  //   reponses:["a typscript class with an html template"],
  //   reponseUser:[],
  //   detailCorrection:"Component consists of: html template that render the page, typscript class and css selector",
  //   theme:Theme.COMPONENT,
  //   niveau:niveau.DEBUTANT,
  //   lienInfo:"https://angular.io/guide/component-overview",
  // },
  // {
  //   id: 6,
  //   question:"Which answer is not a built-in structural directive? ",
  //   options:["ngSwitch","ngFor", "ngWhile","ngIf"],
  //   reponses:["ngWhile"],
  //   reponseUser:[],
  //   detailCorrection:"Structural directives are used to add, remove or manipulate html element. The most common are NgIf, NgFor and NgSwitch. NgWhile doest not exist but it can be reproduced with an NgFor.",
  //   theme:Theme.BASIC,
  //   niveau:niveau.DEBUTANT,
  //   lienInfo:"https://angular.io/guide/built-in-directives#built-in-structural-directives",
  // },
  // {
  //   id: 7,
  //   question:"Which answer is not a built-in structural directive? ",
  //   options:["ngSwitch","ngFor", "ngWhile","ngIf"],
  //   reponses:["ngWhile"],
  //   reponseUser:[],
  //   detailCorrection:"Structural directives are used to add, remove or manipulate html element. The most common are NgIf, NgFor and NgSwitch. NgWhile doest not exist but it can be reproduced with an NgFor.",
  //   theme:Theme.BASIC,
  //   niveau:niveau.DEBUTANT,
  //   lienInfo:"https://angular.io/guide/built-in-directives#built-in-structural-directives",
  // },
  //LIFECYLE COMPONENT QUESTIONS
  // {
  //   id: 8,
  //   question: 'What element above is not part for angular lifecyle?',
  //   options: [
  //     'ngOnChange ',
  //     'ngAfterContentChecked ',
  //     'ngAfterViewInit',
  //     'ngAfterCheck',
  //   ],
  //   reponses: ['ngAfterCheck'],
  //   reponseUser: [],
  //   detailCorrection: 'ngAfterCheck is not part of the angular lifecyle.', //TODO DETAIL RESPONSE
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/lifecycle-hooks',
  // },
  // {
  //   id: 9,
  //   question: 'What lifecyle sequences are corrects?',
  //   options: [
  //     'ngOnChange -> ngDoCheck -> ngOnInit',
  //     'ngOnChange -> ngOnInit -> ngDoCheck',
  //     'ngAfterContentInit -> ngAfterContentChecked -> ngAfterViewInit',
  //     'ngAfterViewInit -> ngAfterContentInit -> ngAfterContentChecked',
  //   ],
  //   reponses: [
  //     'ngOnChange -> ngOnInit -> ngDoCheck',
  //     'ngAfterContentInit -> ngAfterContentChecked -> ngAfterViewInit',
  //   ],
  //   reponseUser: [],
  //   detailCorrection:
  //     'The angular lifecyle is the following : ngOnChange ngOnInit ngDoCheck ngAfterContentInit ngAfterContentChecked ngAfterViewInit ngAfterViewChecked ngOndestroy', //TODO DETAIL RESPONSE
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/lifecycle-hooks',
  // },
  // {
  //   id: 10,
  //   question:
  //     'What is the best lifecyle method to use for unsubsribe to an observable?',
  //   options: ['ngAfterViewInit', 'ngOndestroy', 'ngAfterContentInit'],
  //   reponses: ['ngOndestroy'],
  //   reponseUser: [],
  //   detailCorrection:
  //     'ngOndestroy is the perfect method cause it is called just before the component is destroyed. There are many ways to unscribe (operator, http interceptor) but using ngOndestroy is still considered a good practice.', //TODO DETAIL RESPONSE
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/lifecycle-hooks',
  // },
  // {
  //   id: 11,
  //   question:
  //     'During the angular lifecyle when is the best time to use @ViewChild?',
  //   options: ['ngAfterViewInit', 'ngOnInit', 'ngAfterViewChecked'],
  //   reponses: ['ngAfterViewInit'],
  //   reponseUser: [],
  //   detailCorrection:
  //     'ngAfterViewInit is the perfect cycle cause it is called only one time after the child component are created. Before that @ViewChild would be undefined',
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/lifecycle-hooks',
  // },
  // {
  //   id: 12,
  //   question: 'What is the best lifecyle method for using @ContentChild?',
  //   options: [
  //     'ngOnInit',
  //     'ngAfterContentInit',
  //     'ngAfterContentChecked',
  //     'ngDoCheck',
  //   ],
  //   reponses: ['ngAfterContentInit'],
  //   reponseUser: [],
  //   detailCorrection:
  //     'ngAfterContentInit is the correct cycle cause it is called just one time and after the content projection is done. Before that @ContentChild would be undefined',
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/lifecycle-hooks',
  // },
  // //VIEW ENCAPSULATION
  // {
  //   id: 13,
  //   question: 'Which view encapsulation mode does not exist ? ',
  //   options: ['Emulated', 'None', 'ShadowDom', 'Extended'],
  //   reponses: ['Extended'],
  //   reponseUser: [],
  //   detailCorrection:
  //     'There are only 3 view ecanpsulation mode so far,Emulated, None and ShadowDom. They define how the component style affect the rest of the app.', //TODO DETAIL RESPONSE
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/view-encapsulation',
  // },
  // {
  //   id: 14,
  //   question:
  //     'What ecanpsulation mode is the default mode and limit the style scope to the component itself? ',
  //   options: ['Emulated', 'None', 'ShadowDom', 'this'],
  //   reponses: ['ShadowDom'],
  //   reponseUser: [],
  //   detailCorrection:
  //     'The styles of components are only added to the shadow DOM host and therefore is limited to the component itself.',
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/view-encapsulation',
  // },
  // {
  //   id: 15,
  //   question:
  //     'What ecanpsulation mode enable the component style to be available throughout the application?  ',
  //   options: ['Emulated', 'None', 'ShadowDom', 'Extended'],
  //   reponses: ['None'],
  //   reponseUser: [],
  //   detailCorrection:
  //     'The styles of components are only added to the shadow DOM host and therefore is limited to the component itself.',
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/view-encapsulation',
  // },
  // //component interaction
  // {
  //   id: 16,
  //   question: 'What is @Input() in angular ?  ',
  //   options: [
  //     'A way to control html input in the class?',
  //     'A way to get data from the parent component',
  //     'A way to send data to the parent component',
  //     'Extended',
  //   ],
  //   reponses: ['A way to get data from the parent component'],
  //   reponseUser: [],
  //   detailCorrection:
  //     ' @Input() decorates a component property and tells angular that this property can modified by the parent. In the parent template, property binding must be used to transfer data. ',
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/component-interaction',
  // },
  // {
  //   id: 17,
  //   question:
  //     'If you want to intercept  simple input data from the parent and modify it before using it, where is the best place to do so ?  ',
  //   options: ['getter and setter', 'ngOninit', 'constructor'],
  //   reponses: ['getter and setter'],
  //   reponseUser: [],
  //   detailCorrection:
  //     ' Getter and setter are the perfect place, ngOninit is usually more used for a global init of your component and the constructor should be used for doing really simple task. Your component should be cheap to construct. You can also used ngOnChanges() lifcyle method  when watching multiple, interacting input properties.',
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/component-interaction',
  // },
  // {
  //   id: 18,
  //   question:
  //     "If we declare the following propety :  @Input('color') colorObj = '';  what property name should be used in the template ? ",
  //   options: ['color', 'colorObj', 'Input-color'],
  //   reponses: ['color'],
  //   reponseUser: [],
  //   detailCorrection:
  //     'You can custom the property name in the component by aliases the name ',
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/component-interaction',
  // },
  // {
  //   id: 19,
  //   question:
  //     "Select the correct way to create a component property that emit a boolean to his parent ",
  //   options: [' @Output() checked = new EventEmitter<boolean>();', ' @Output() checked : boolean', ' @Output() checked : EventEmitter;'],
  //   reponses: [' @Output() checked = new EventEmitter<boolean>();'],
  //   reponseUser: [],
  //   detailCorrection:
  //     'With @Output() you declare a new EventEmitter<>()  and you use it in the class to emit value:  this.checked.emit(true); Then parent component uses eventBinding in his template to get this value: <app-child> (checked)="onChecked($event) </app-child>',
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/component-interaction',
  // },
  // {
  //   id: 20,
  //   question:
  //     "What is a local variable in a angular template?  ",
  //   options: ['A reference to the child component', 'A value from the component class', 'A variable that can used only in one html element'],
  //   reponses: [' A reference to the child component'],
  //   reponseUser: [],
  //   detailCorrection:
  //     ' A local varaible should be declared directly on the child component prefixed by "#". it provides the ability to access any of its properties or methods from within the parent template. ',
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/component-interaction',
  // },
  // {
  //   id: 21,
  //   question:
  //     "How the parent class could access directly to the properties and methods of the child ?",
  //   options: ['Inject the child component into the parent as a ViewChild.', 'Create an instance of the child class in the parent class using the "new" operator'],
  //   reponses: ['Inject the child component into the parent as a ViewChild.'],
  //   reponseUser: [],
  //   detailCorrection:
  //     'Properties decorated with @ViewChild should be used after the child view are init. Therefore it should used into the ngAfterViewInit()  lifecyle method.',
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/component-interaction',
  // },
  // {
  //   id: 22,
  //   question:
  //     "How the parent class could access directly to the properties and methods of the child ?",
  //   options: ['Inject the child component into the parent as a ViewChild.', 'Create an instance of the child class in the parent class using the "new" operator'],
  //   reponses: ['Inject the child component into the parent as a ViewChild.'],
  //   reponseUser: [],
  //   detailCorrection:
  //     'Properties decorated with @ViewChild should be used after the child view are init. Therefore it should used into the ngAfterViewInit()  lifecyle method.',
  //   theme: Theme.COMPONENT,
  //   niveau: niveau.DEBUTANT,
  //   lienInfo: 'https://angular.io/guide/component-interaction',
  // },

  //component style
  {
    id: 23,
    question: 'What is the best way to style a component ?',
    options: ['CSS Custom Properties', 'Using the component selector', 'Customize with CSS ::part' ],
    reponses: ['CSS Custom Properties'],
    reponseUser: [],
    detailCorrection: 'The component style should not be overrided.Therefore defining Css variables that can be modified trhough a clear API is considered the best practice. ',
    theme: Theme.BASIC,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/component-styles',
  },
  {
    id: 24,
    question: 'What css selector is used to target the host element of a component ?',
    options: ['::host', ':host', '::ng-deep' ],
    reponses: [':host'],
    reponseUser: [],
    detailCorrection: 'The :host selector is very convenient to target the host element of a component, it is possible to combine it with other selector, and it will not affect the parent component.',
    theme: Theme.BASIC,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/component-styles',
  },
  {
    id: 25,
    question: 'What css selector is used to target the host element of a component ?',
    options: ['::host', ':host', '::ng-deep' ],
    reponses: [':host'],
    reponseUser: [],
    detailCorrection: 'The :host selector is very convenient to target the host element of a component, it is possible to combine it with other selector, and it will not affect the parent component.',
    theme: Theme.BASIC,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/component-styles',
  },
  {
    id: 26,
    question: 'What css selector is used to apply a style on a component based on its ancestor element?',
    options: [':host-context',':host', ':host()', '::ng-deep' ],
    reponses: [':host-context'],
    reponseUser: [],
    detailCorrection: 'This selector is specific but uselful when you want to style according to an ancestor context. It has the following structure : :host-context("classOfAncestor") {this style here is applied only if some ancestors of the component have the "classOfAncestor"  }',
    theme: Theme.BASIC,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/component-styles',
  },
  //content projection
  {
    id: 27,
    question: 'what element to use to create projection in component template ?',
    options: ['ng-content','ng-project', 'ng-slot', 'ng-container ' ],
    reponses: ['ng-content'],
    reponseUser: [],
    detailCorrection: 'ng-content is used in the component as a slot that would be filled by the parent in the template. Ex : app-comp template : <h2>titre exemple</h2> <ng-content></ng-content>  and in the parent :<app-comp><p>projected content</p> </app-comp>. The "projected content" will be where the ng-content element is.',
    theme: Theme.BASIC,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/content-projection',
  },
  {
    id: 28,
    question: 'Does ng-content create a real dom element ?',
    options: ['yes','no' ],
    reponses: ['no'],
    reponseUser: [],
    detailCorrection: 'The <ng-content> element is a placeholder that does not create a real DOM element.',
    theme: Theme.BASIC,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/content-projection',
  },
  {
    id: 29,
    question: 'If you want to archeive multi-slot projection, how do you determine which placeholder is attributed to which content ?',
    options: ['place the placeholder in the same order','use the placeholder select attribut', 'use local variable', 'use *ngIf directive' ],
    reponses: ['use the placeholder select attribut'],
    reponseUser: [],
    detailCorrection: 'the "select" attribut allows to link component placeholder with the proper content to be projected. ',
    theme: Theme.BASIC,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/content-projection',
  },
  {
    id: 30,
    question: 'What is ng-container?',
    options: ['an element used to group other dom element','a placeholder for projection', 'a rendered dom element that apply specific style'  ],
    reponses: ['an element used to group other dom element'],
    reponseUser: [],
    detailCorrection: 'The ng-container element is a logical construct that is used to group other DOM elements; however, the ng-container itself is not rendered in the DOM tree.',
    theme: Theme.BASIC,
    niveau: niveau.CONFIRME,
    lienInfo: 'https://angular.io/guide/content-projection',
  },
  //dynamic component (TODO MORE QUESTIONS )
  {
    id: 31,
    question: 'What angular API can you use to create dynamicaly new component?',
    options: ['viewChild','ViewContainerRef', 'ViewContainer',  'ViewRef'],
    reponses: ['ViewContainerRef'],
    reponseUser: [],
    detailCorrection: 'The ViewContainerRef api has the  createComponent() method that can add a component to a template',
    theme: Theme.BASIC,
    niveau: niveau.CONFIRME,
    lienInfo: 'https://angular.io/guide/dynamic-component-loader',
  },
  //GRATTER QUESTION angular element  (TODO MORE QUESTIONS )
  //TEMPLATES general
  {
    id: 32,
    question: 'What is an agular template?',
    options: ['A regular html dedicated to a component','a component class', 'An HTML page, but with a lot more functionality.'  ],
    reponses: ['An HTML page, but with a lot more functionality.'],
    reponseUser: [],
    detailCorrection: 'An angular template is an empowered html page that include many features to manipulate the dom',
    theme: Theme.TEMPLATES,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/content-projection',
  },
  //Interpolation
  {
    id: 33,
    question: 'What is string interpolation?',
    options: ['A api to manipulate a string in the class','An embedded expression into marked up text'  ],
    reponses: ['An embedded expression into marked up text'],
    reponseUser: [],
    detailCorrection: 'String interpolation is way for example to add a property from the component class into his template using the double curly braces {{ and }} as delimiters.',
    theme: Theme.TEMPLATES,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/interpolation',
  },
  //Template statements 
  {
    id: 34,
    question: 'What is string interpolation?',
    options: ['A api to manipulate a string in the class','An embedded expression into marked up text'  ],
    reponses: ['An embedded expression into marked up text'],
    reponseUser: [],
    detailCorrection: 'String interpolation is way for example to add a property from the component class into his template using the double curly braces {{ and }} as delimiters.',
    theme: Theme.TEMPLATES,
    niveau: niveau.DEBUTANT,
    lienInfo: 'https://angular.io/guide/interpolation',
  },
];
