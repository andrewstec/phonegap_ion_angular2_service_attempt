import {Page, NavController, NavParams } from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    selectedItem: any;
    secondItem: 'test'
    icons: string[];
    items: Array<{title: string, note: string, icon: string}>;  
    constructor(private nav: NavController, navParams: NavParams) {
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 
        'paper-plane','american-football', 'boat', 'bluetooth', 'build'];

        this.items = [];
        for(let i = 1; i < this.icons.length; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[i-1]
            });
        }
    }
  
    itemTapped(item) {
        this.nav.push(ItemDetailsPage, {
            item: item,
            secondItem: item.note
        });
    }
}