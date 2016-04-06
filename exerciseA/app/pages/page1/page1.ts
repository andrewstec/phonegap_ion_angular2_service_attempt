import {Page} from 'ionic-angular';
import {NewDirective} from '../../directives/newdirective';


@Page({
    templateUrl: 'build/pages/page1/page1.html',
    directives: [NewDirective], // Importing directive.
})

export class Page1 {
    title:string; 
    people: string[];
    firstName:string;
    constructor() {
        this.title = "Hello from Ionic/Angular2";
        this.firstName = "Andrew";
        this.people = ["Daenerys Targaryen", "Arya Stark"];
    }
}