import { Component } from '@angular/core';
import { NavController, ViewController, ToastController } from 'ionic-angular';
import { signin } from '../contact/signin';
import { MyHttp } from '../config'
import { NativeStorage } from '@ionic-native/native-storage';
import { Md5 } from "ts-md5/dist/md5";

@Component({
  selector: 'page-signup',
  templateUrl: 'html/signup.html',
  providers: [NativeStorage, MyHttp]
})

export class signup {
  private username: string;
  private password: string;
  constructor(public ViewController: ViewController, public myHttp: MyHttp,
    public toastCtrl: ToastController, public nativeStorage: NativeStorage) {

  }

  dismissCurr() {
    this.ViewController.dismiss();
  }

  logEvent() {
    var _this = this;
    let body = JSON.stringify({
      username: this.username,
      password: Md5.hashStr(this.password)
    });
    this.myHttp.post('signup', body, function (data) {
      if (data.errorCode == "102") {
        _this.presentToast("用户存在")
      } else if (data.errorCode == "103") {
        _this.presentToast("服务器异常")
      }
      else if (data.errorCode == "100") {
        _this.presentToast("注册成功");
        _this.myHttp.post('signin', body, function (data) {
          if (data.errorCode == "100") {
            _this.nativeStorage.setItem("userInfo", data.user)
            _this.nativeStorage.setItem("toekn", data.token)
            _this.dismissCurr();
          }
          else {
            _this.presentToast("服务器异常")
          }
        }
        )
      }
    }
    )
  }
  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}