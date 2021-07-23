import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Story2Page } from '../story2/story2';
/**
 * Generated class for the Typeoption2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typeoption2',
  templateUrl: 'typeoption2.html',
})
export class Typeoption2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData : UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Typeoption2Page');
  }
 PindahStoryPage(){
  this.navCtrl.push(Story2Page);
}
}
