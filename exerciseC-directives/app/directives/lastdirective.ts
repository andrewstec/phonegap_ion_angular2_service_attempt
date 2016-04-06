import {Component} from 'angular2/core';
@Component({
    // Selector uses lower case with hyphens.
    selector: 'last-directive',
    inputs: ['lastName'],  // Defines attribute for directive.
    // Back ticks let you define content on multiple lines.
    template: `<h3>This is the lastname-directive.</h3>
               This is {{lastName}}.`,
})
export class LastDirective {
}