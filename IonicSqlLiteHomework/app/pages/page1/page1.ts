import {Page, Platform, Storage, SqlStorage} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
	storage:Storage;
	platform:Platform;

  constructor(platform: Platform) {
  	this.platform = platform;
  	this.platform.ready().then(()=>{
  		this.storage = new Storage(SqlStorage);
  	});
  	}

  	//add begins here
  add() {
  	this.platform.ready().then(()=>{
  		this.storage.query("INSERT INTO people (firstname, lastname) VALUES('TestFirstName', 'TestLastName')")
  		.then((data)=>{
  			console.log(JSON.stringify(data.res));
  			console.log("successfully added");
  		}, (error)=>{
  			console.log("There was an error: " + JSON.stringify(error.error));
  		});
  	});
  }
  //add ends here


}
