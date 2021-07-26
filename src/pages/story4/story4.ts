import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Slide5Page } from '../slide5/slide5';

/**
 * Generated class for the Story4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-story4',
  templateUrl: 'story4.html',
})
export class Story4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData : UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Story4Page');
  }
  PindahSlide5(){
    this.navCtrl.push(Slide5Page);
  }

}
