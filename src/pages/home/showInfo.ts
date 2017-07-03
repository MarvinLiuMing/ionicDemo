import { Component } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { HomePage } from '../home/home'

@Component({
    selector: 'page-showInfo',
    templateUrl: 'showInfo.html',
    providers: [Slides]
})

export class showInfo {
    @ViewChild(Slides) slides: Slides;
    private item = new NavParams();
    private imgPaths = [];
    private index = 0;
    constructor(public navCtrl: NavController, public params: NavParams) {
        this.item = params.data.item;
        this.imgPaths = ["../image/avatar/avatar1.jpg",
            "../image/avatar/avatar2.jpg", "../image/avatar/avatar3.jpg"];
    }
    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        this.index = currentIndex;
    }
}