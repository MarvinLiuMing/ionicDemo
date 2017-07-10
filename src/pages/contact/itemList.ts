import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { showInfo } from '../home/showInfo'

@Component({
  selector: 'page-contact',
  templateUrl: 'html/itemList.html'
})
export class itemList {
  private contacts = [];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    console.log("item list : ");


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
  itemSelected(event, contact) {
    this.navCtrl.push(showInfo, { item: contact });
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
