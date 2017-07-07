import { Component } from '@angular/core';
import { NavController, ViewController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { signup } from '../contact/signup';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Http } from '@angular/http';

@Component({
  selector: 'page-signin',
  templateUrl: 'html/signin.html',
  providers: [ImagePicker]
})
export class signin {

  private user = {};
  private username: string;
  private imgPath: string;
  
  constructor(public ViewController: ViewController, public navCtrl: NavController, private toastCtrl: ToastController, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController, public imgPicker: ImagePicker, public http: Http) {
    this.user = {};
    this.username = "";
    this.imgPath = "../image/avatar/avatar1.jpg"; 
  }
  GoSignUp() {
    this.navCtrl.push(signup);
    this.dismissCurr();
    // let contactModal = this.modalCtrl.create(signup);
    // contactModal.present();
  }
  dismissCurr() {
    this.ViewController.dismiss();
  }


}
