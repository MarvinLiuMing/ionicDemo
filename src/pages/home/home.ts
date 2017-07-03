import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicApp } from 'ionic-angular';

import { addNewInfo } from '../home/addNewInfo'
import { showInfo } from '../home/showInfo'

@Component({
  selector: 'page-home-css',
  templateUrl: 'home.html'
})
export class HomePage {
  private Moments = [];
  constructor(public navCtrl: NavController) {
    this.Moments = [
      { "MomentsID": 1, "tittle": "Nine Inch Nails Live", "content": "The most popular industrial group ever, and largely" },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },
      { "MomentsID": 3, "tittle": "No3", "content": "22222", },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },
      { "MomentsID": 2, "tittle": "No2", "content": "22222", },];
  }

  ionViewDidEnter() {
  }

  itemLike() {

  }
  GOaddNewInf() {
    this.navCtrl.push(addNewInfo);
  }
  GOshowInfo(event,contact){
    this.navCtrl.push(showInfo,{item:contact});
  }
}

