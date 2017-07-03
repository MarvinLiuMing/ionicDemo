import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
    selector: 'page-personalPage',
    templateUrl: 'personalPage.html'
})

export class personalPage {
    private item=new NavParams();
    constructor(public params: NavParams) {
        console.log(params)
        this.item=params.data.item;
    }
}
