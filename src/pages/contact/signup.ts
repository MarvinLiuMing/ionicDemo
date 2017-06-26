import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})

export class signup {
    constructor(public ViewController: ViewController) {

    }

    dismissCurr() {
        this.ViewController.dismiss();
    }
}