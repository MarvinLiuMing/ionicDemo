import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { signin } from '../contact/signin';

@Component({
    selector: 'page-signup',
    templateUrl: 'html/signup.html'
})

export class signup {
    constructor(public ViewController: ViewController,public http:Http) {

    }

    dismissCurr() {
        this.ViewController.dismiss();
    }

     logEvent() {
    console.log("logEvent")
    // this.http.post("http://192.168.1.4:3000/test", { 'Content-Type': 'application/x-www-form-urlencoded' })
    //   .subscribe(data => { console.log("data") }, error => { alert("Error！！"); });

    this.http.get('http://192.168.1.4:3000/test').subscribe(Response => {
      console.log(Response)
      console.log(Response.text())
      console.log(Response.json())
      var data = Response.json()
      console.log(data.data)
    }, error => {
      alert("Error！！" + error);
    });
    // if(this.username=="Marvin"){
    //   this.presentLoadingDefault();
    // }else{
    //   this.presentToast();
    // }

    // console.log('event!' + this.username)
  }
}