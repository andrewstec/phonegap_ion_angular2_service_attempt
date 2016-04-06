import {Page, Platform, Storage, SqlStorage } from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    storage:Storage;
    platform:Platform;
    people:string[];
    
    constructor(platform: Platform) {
        this.platform = platform;
        this.people = [];
        this.platform.ready().then(()=>{
            this.storage = new Storage(SqlStorage);
            this.refresh();
        })    
    }

    add() {
        this.platform.ready().then(()=>{
            this.storage.query(
                "INSERT INTO people (firstname, lastname) VALUES('Bob', 'Jones')")
            .then((data)=>{
                console.log(JSON.stringify(data.res));
                console.log("successfully added");
            },
                (error)=>{
                    console.log(JSON.stringify(error.error));
                }        
            );  
        })
    }
  
    refresh() {
        this.platform.ready().then(()=>{
            this.storage.query("SELECT * FROM people")
            .then((data)=>{
                this.people = [];
                console.log(JSON.stringify(data.res));
                console.log("Length: " + data.res.rows.length);
                for(var i=0; i<data.res.rows.length; i++) {
                    this.people.push(data.res.rows.item(i).firstname);
                    console.log("first name: " + data.res.rows.item(i).firstname);
                }
            },
                (error)=>{
                    console.log(JSON.stringify(error.error));
                }        
            );  
        })      
    }  
}