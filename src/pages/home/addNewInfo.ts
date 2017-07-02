import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

import { HomePage } from '../home/home'

@Component({
    selector: 'page-addNewInfo',
    templateUrl: 'addNewInfo.html',
    providers: [ImagePicker]
})

export class addNewInfo {
    private imgPath: string;
    constructor(public navCtrl: NavController, public imgPicker: ImagePicker) {
        this.imgPath = "";
    }
    private options: ImagePickerOptions = {
        height: 1000,
        width: 30,
    };
    ADDImage() {
        this.imgPicker.getPictures(this.options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                this.imgPath = results[i];
            }
        }, (err) => { });
    }

    submitNewInfo() {
        this.navCtrl.pop();
    }
}