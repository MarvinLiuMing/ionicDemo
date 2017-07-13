import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { NativeStorage } from '@ionic-native/native-storage';
import { File } from '@ionic-native/file';

import { HomePage } from '../home/home'
import { MyHttp } from '../config'
import * as sha1 from 'sha1';

@Component({
    selector: 'page-addNewInfo',
    templateUrl: 'addNewInfo.html',
    providers: [ImagePicker, MyHttp, NativeStorage]
})

export class addNewInfo {
    private imgPath: string;
    private title: string;
    private content: string;
    private userInfo;
    private public_id: string;
    private imgsArry = new Array();

    constructor(public navCtrl: NavController, public imgPicker: ImagePicker, public myHttp: MyHttp,
        public toastCtrl: ToastController, public nativeStorage: NativeStorage, public file: File, public params: NavParams) {
        this.imgPath = "";
        this.userInfo = params.data.userInfo;

    }
    private options: ImagePickerOptions = {
        height: 1000,
        width: 30,
    };
    ADDImageback() {
        this.imgPicker.getPictures(this.options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                this.imgPath = results[i];
            }
        }, (err) => { });
    }
    ADDImage() {
        this.imgPicker.getPictures(this.options).then((results) => {
            var imageURLs: string;
            var imagePath: string;
            var imageName: string;
            var __this = this;
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                this.imgPath = results[i]
                imageURLs = results[i];
                imagePath = imageURLs.substr(0, imageURLs.lastIndexOf('/') + 1);
                imageName = imageURLs.substr(imageURLs.lastIndexOf('/') + 1);
                this.file.readAsDataURL(imagePath, imageName).then((b64str) => {
                    this.public_id = this.userInfo.username + new Date().getTime();
                    var Rbody = {
                        file: b64str,
                        api_key: '143991296593611',
                        public_id: this.public_id,
                        timestamp: new Date().getTime(),
                        signature: this.getSignature()
                    }
                    var ROption = {
                    }

                    this.myHttp.postImg('https://api.cloudinary.com/v1_1/marvin/image/upload', Rbody, function (data) {
                        __this.imgsArry.push(data.url);
                    })


                }).catch(err => {
                    this.presentToast('readAsDataURL failed: (' + err.code + ")" + err.message);
                })
            }

        }, (err) => { });

        // this.public_id = this.userInfo.username + new Date().getTime();
        // var Rbody = {
        //     file: ,
        //     api_key: '143991296593611',
        //     public_id: this.public_id,
        //     timestamp: new Date().getTime(),
        //     signature: this.getSignature()
        // }
        // var ROption = {
        // }
        // var __this = this;
        // this.myHttp.postImg('https://api.cloudinary.com/v1_1/marvin/image/upload', Rbody, function (data) {
        //     __this.imgsArry.push(data.url);
        //     console.log(__this.imgsArry)
        // })
    }


    private getSignature() {
        var timestamp = new Date().getTime();
        var API_Secret = 'SBxWldl9HWlDYLFldjjSw3-fZtI';
        var public_id = this.public_id;

        var signature = 'public_id=' + public_id + '&timestamp=' + timestamp + API_Secret

        signature = sha1(signature)

        return signature
    }

    submitNewInfo() {
        var __this = this;
        var imgs = new Array();
        for (var i = 0; i < this.imgsArry.length; i++) {
            imgs.push(this.imgsArry)
        }
        console.log("imgs : " + imgs)
        this.nativeStorage.getItem('userInfo')
            .then(
            data => {
                let body = JSON.stringify({
                    title: this.title,
                    author: data.username,
                    content: this.content,
                    imgs: this.imgsArry
                });

                this.myHttp.post('AddArticles', body, function (data) {
                    console.log(data.errorCode)
                    if (data.errorCode == "106") {
                        __this.presentToast("服务器错误")
                    }
                    else if (data.errorCode == "100") {
                        __this.presentToast("登录成功");
                        __this.navCtrl.pop();
                    }
                }
                )
            },
            error => {
            }
            );
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