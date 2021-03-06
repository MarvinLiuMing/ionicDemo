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
    console.log("third page init!!")
  }

  ionViewWillEnter() {
    this.refreshPage();
  }
  refreshPage() {
    this.nativeStorage.getItem('userInfo')
      .then(
      data => {
        this.islogin = true;
        this.username = data.username;
      },
      error => {
        this.islogin = false;
      }
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

  GoSignin() {
    // let contactModal = this.modalCtrl.create(signin);
    // contactModal.present();
    this.navCtrl.push(signin);
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
    this.nativeStorage.remove("userInfo").then(
      () => {
        console.log('remove item!')
        this.islogin = false;
      },
      error => console.error('Error remove item', error)
    )
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


    this.nativeStorage.getItem('myitemasdasdasd')
      .then(
      data => console.log(data),
      error => { console.error("cannot find!!" + error) }
      );
    //this.navCtrl.push(resume);
  }
}
