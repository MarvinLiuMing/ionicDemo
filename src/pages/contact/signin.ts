import { Component } from '@angular/core';
import { NavController, ViewController, ToastController, ModalController } from 'ionic-angular';
import { Md5 } from "ts-md5/dist/md5";
import { MyHttp } from '../config'
import { NativeStorage } from '@ionic-native/native-storage';

import { signup } from '../contact/signup';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-signin',
  templateUrl: 'html/signin.html',
  providers: [NativeStorage, MyHttp]
})
export class signin {

  private user = {};
  private username: string;
  private password: string;
  private imgPath: string;
  private SALT_WORK_FACTOR = 10;
  public saltRounds = 10;
  public myPlaintextPassword = 's0/\/\P4$$w0rD';
  public someOtherPlaintextPassword = 'not_bacon';

  constructor(public ViewController: ViewController, public navCtrl: NavController, public toastCtrl: ToastController,
    public nativeStorage: NativeStorage, public myHttp: MyHttp) {
    this.user = {};
    this.username = "";
    this.imgPath = "../image/avatar/avatar1.jpg";
    console.log(Md5.hashStr("marvin"));
  }
  GoSignUp() {
    this.navCtrl.push(signup);
    this.dismissCurr();
  }
  dismissCurr() {
    this.ViewController.dismiss();
  }
  signIn() {
    let body = JSON.stringify({
      username: this.username,
      password: Md5.hashStr(this.password)
    });
    var _this = this;
    this.myHttp.post('signin', body, function (data) {
      if (data.errorCode == "104") {
        _this.presentToast("密码错误")
      } else if (data.errorCode == "101") {
        _this.presentToast("用户不存在")
      }
      else if (data.errorCode == "100") {
        _this.presentToast("登录成功");
        _this.nativeStorage.setItem("userInfo", data.user)
        _this.nativeStorage.setItem("toekn", data.token)
        _this.dismissCurr();
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
