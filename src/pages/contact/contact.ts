import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { signup } from '../contact/signup';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Http } from '@angular/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [ImagePicker]
})
export class ContactPage {

  private user = {};
  private username: string;
  private imgPath: string;
  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController, public imgPicker: ImagePicker, public http: Http) {
    this.user = {};
    this.username = "";
    this.imgPath = "../image/avatar/avatar1.jpg";
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
    console.log("logEvent")
    // this.http.post("http://192.168.1.4:3000/test", { 'Content-Type': 'application/x-www-form-urlencoded' })
    //   .subscribe(data => { console.log("data") }, error => { alert("Error！！"); });

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

  presentContactModal() {
    let contactModal = this.modalCtrl.create(signup);
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
}
