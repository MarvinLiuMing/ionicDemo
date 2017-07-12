import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicApp } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { addNewInfo } from '../home/addNewInfo'
import { showInfo } from '../home/showInfo'
import { MyHttp } from '../config'
import { signin } from '../contact/signin';

@Component({
  selector: 'page-home-css',
  templateUrl: 'home.html',
  providers: [NativeStorage, MyHttp]
})
export class HomePage {
  private Moments = [{ imgs: [{ path: "http://res.cloudinary.com/marvin/image/upload/v1496563820/sample_image1.png" }] }];

  constructor(public navCtrl: NavController, public myHttp: MyHttp,
    public nativeStorage: NativeStorage) {
    this.Moments[0].imgs[0].path = "";
    console.log(new Date().getTime())
  }

  ionViewWillEnter() {
this.refreshMethod();
  }

  refreshMethod() {
    var _this = this;
    let body = JSON.stringify({
    });
    this.myHttp.post('loadArticles', body, function (data) {
      if (data.errorCode == "106") {
      }
      else if (data.errorCode == "100") {
        _this.Moments = data.articles;
      }
    }
    )
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.refreshMethod();
      refresher.complete();
    }, 2000);
  }

  itemLike() {

  }
  GOaddNewInf() {
    this.nativeStorage.getItem('userInfo')
      .then(
      data => {
        this.navCtrl.push(addNewInfo, { userInfo: data });
      },
      error => {
        this.navCtrl.push(signin);
      }
      );
  }
  GOshowInfo(event, item) {
    this.navCtrl.push(showInfo, { item: item });
  }
}

