import {Page} from 'ionic-angular';
import {NewDirective} from '../../directives/newdirective';
import {LastDirective} from '../../directives/lastdirective';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
      directives: [NewDirective], [LastDirective] // Importing directive.

})
export class Page1 {
  constructor() {

  }
}
