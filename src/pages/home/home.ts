import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicApp } from 'ionic-angular';

import { addNewInfo } from '../home/addNewInfo'

@Component({
  selector: 'page-home',
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
  addNewInf() {
    this.navCtrl.push(addNewInfo);
  }

}

