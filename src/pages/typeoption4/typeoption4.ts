import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Story4Page } from '../story4/story4';

/**
 * Generated class for the Typeoption4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typeoption4',
  templateUrl: 'typeoption4.html',
})
export class Typeoption4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData : UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Typeoption4Page');
  }
  PindahStoryPage(){
    this.navCtrl.push(Story4Page);
  }
}
