import {Page} from 'ionic-angular';
import {DataService} from '../../services/dataservice';

@Page({
    providers: [DataService],
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    names:Array<any>
    constructor(dataService: DataService) {
        this.names = dataService.getNames();
    }
}