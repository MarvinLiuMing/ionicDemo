import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { showInfo } from '../home/showInfo'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private contacts = [];
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    this.contacts = [{ "contactID": 1, "contactName": "No1", "contactText": "1111111" },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },
    { "contactID": 3, "contactName": "No3", "contactText": "22222", },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },
    { "contactID": 2, "contactName": "No2", "contactText": "22222", },];
  }
  itemSelected(event,contact){
    this.navCtrl.push(showInfo,{item:contact});
  }

    showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
}
