import {Component}   from 'angular2/core';
@Component({
    // Selector uses lower case with hyphens.
    selector: 'second-directive',
    inputs: ['firstName'],  // Defines attribute for directive.
    // Back ticks let you define content on multiple lines.
    template: `<h3>This is the second directive!</h3>
               This is {{firstName}}.`,
})
export class NewDirective {
}