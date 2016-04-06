import 'es6-shim';
import {App, Platform, Storage, SqlStorage} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';

@App({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
    rootPage: any = HomePage;
    storage: Storage;
    static get parameters() {
        return [[Platform]];
    }
  
    constructor(platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            this.storage = new Storage(SqlStorage);
            this.storage.query(
"CREATE TABLE IF NOT EXISTS people(id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)")
                .then((data)=>{
                    console.log("Yay! The table was created.");
                }, (error)=>{
                    console.log("Error: " + JSON.stringify(error.error))
                })      
        });
    }
}
