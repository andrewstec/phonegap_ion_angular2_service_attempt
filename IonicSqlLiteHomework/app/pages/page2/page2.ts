import {Page, NavController, NavParams, Platform, Storage, SqlStorage} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
	storage: Storage;
	platform: Platform;
	people: string[];
	personDetails: Array<{firstname: string, lastname: string, city: string}>;

  constructor(platform: Platform) {
  	this.platform = platform;
  	this.people = [];
  	this.storage = new Storage(SqlStorage);
  	this.platform.ready().then(()=>{
  		this.list();
  	})
  	}

  //	for(let i = 1; i < this.people.length; i++) {
  //		this.items.push({
  //			firstname: people[i].firstname;
  //			lastname: people[i].lastname;
  //		})
  //	}

  	//list people begins here
  	list() {
  		this.platform.ready().then(()=>{
  			this.storage.query("SELECT * FROM people")
  			.then((data)=>{
  				this.people = [];
  				console.log(JSON.stringify(data.res));
  				console.log("Length of the data query: " + data.res.rows.length);
  				for (var i = 0; i < data.res.rows.length; i++ ) {
  					this.people.push(data.res.rows.item(i).firstname);
  					console.log("first name: " + data.res.rows.item(i).firstname);
  				}
  				}, (error)=>{
  					console.log(JSON.stringify(error.error));
  				}
  			);
  		})
  	}
  	//list people ends here

 // 	personTapped(person){
 // 		this.nav.push(Details, {
 // 			Person: person;
 // 		});
 // 	}


}
