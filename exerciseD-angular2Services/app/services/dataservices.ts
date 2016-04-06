import {Component}   from 'angular2/core';

// This is the service.
export class DataService {
    names: Array<any>;
    constructor() {
        this.names = ['John', 'Mary', 'Joan'];
    }
    getNames() {
        return this.names;
    }
}