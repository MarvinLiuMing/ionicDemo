import { Component } from '@angular/core';
import { NavController, ViewController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { signup } from '../contact/signup';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Http, RequestOptionsArgs, Headers, Request, RequestOptions, RequestMethod } from '@angular/http';
import { Md5 } from "ts-md5/dist/md5";
import { ConfigURL } from '../config'


@Component({
  selector: 'page-signin',
  templateUrl: 'html/signin.html',
  providers: [ImagePicker]
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

  constructor(public ViewController: ViewController, public navCtrl: NavController, private toastCtrl: ToastController, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController, public imgPicker: ImagePicker, public http: Http) {
    this.user = {};
    this.username = "";
    this.imgPath = "../image/avatar/avatar1.jpg";
    console.log(Md5.hashStr("123456"));
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
  signIn() {
    // let body = JSON.stringify({
    //   code: "mk200"
    // });
    // this.PostRequest("http://localhost:3000/signin", body)

    let header = new Headers();
    //header.append('Content-Type','multipart/form-data; boundary=----WebKitFormBoundaryElhv3o75fbzQsVTw')
    header.append('Content-Type', 'application/json')
    //header.append('Access-Control-Allow-Origin','http://localhost:8100')
    //header.append('Access-Control-Allow-Headers','Content-Type')
    //header.append('Content-Type','application/form-data;')
    //header.append('Content-Type', 'application/x-www-form-urlencoded')

    var options: RequestOptionsArgs = {
      url: 'http://localhost:3000/signin',
      method: "POST",
      headers: header
    };
    console.log(header.toJSON())
    let body = JSON.stringify({
      username: this.username,
      password: this.password
    });
    //let body = "username=admin&password=admin";
    this.http.post(ConfigURL + 'signin', body, options).subscribe(Response => {
      var data = Response.json()
      if (data.errorCode == "104") {
        console.log("登录失败")
      } else if (data.errorCode == "100") {
        console.log("登录成功")
      }
    }, error => {
      alert("Error！！" + error);
    });
  }

  PostRequest(url, data) {
    console.log(data)
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    });
    console.log(headers.toJSON())
    this.http.request(new Request({
      method: RequestMethod.Post,
      url: url,
      headers: headers,
      body: data
    })).subscribe(res => {
      //URL should have included '?password=123'
      console.log('people', res.json());
    });;
  }

}
