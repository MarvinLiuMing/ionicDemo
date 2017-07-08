import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Http } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';

import { signin } from '../contact/signin';
import { itemList } from '../contact/itemList';
import { resume } from '../contact/resume';

@Component({
  selector: 'page-contact',
  templateUrl: 'html/contact.html',
  providers: [ImagePicker, NativeStorage]
})
export class ContactPage {

  private user = {};
  private username: string;
  private imgPath: string;
  private islogin: boolean;


  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController, public imgPicker: ImagePicker, public http: Http, public nativeStorage: NativeStorage) {
    this.user = {};
    this.username = "";
    this.imgPath = "../image/avatar/avatar1.jpg";
    this.nativeStorage.setItem('myitem', { property: 'value', anotherProperty: 'anotherValue' })
      .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
      );

    this.nativeStorage.getItem('myitem')
      .then(
      data => console.log(data),
      error => console.error(error)
      );
  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User Name Is Wrong',
      duration: 2000,
      position: 'top',
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  logEvent() {
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

  GoSignin() {
    let contactModal = this.modalCtrl.create(signin);
    contactModal.present();
  }

  private options: ImagePickerOptions = {};

  changeImage() {
    this.imgPicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imgPath = results[i];
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  signout() {
    if (this.islogin) {
      this.islogin = false;
    } else {
      this.islogin = true;
    }
    console.log(this.islogin);
  }

  GoFav() {
    this.navCtrl.push(itemList);
  }

  GoResume() {
    this.nativeStorage.getItem('myitem')
      .then(
      data => console.log(data),
      error => console.error(error)
      );
    this.nativeStorage.setItem('myitem', { property: 'valu222e', anotherProperty: 'another3333Value' })
      .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
      );


    this.nativeStorage.getItem('myitem')
      .then(
      data => console.log(data),
      error => console.error(error)
      );
    //this.navCtrl.push(resume);
  }
}
