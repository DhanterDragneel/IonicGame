import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Slide3Page } from '../slide3/slide3';
/**
 * Generated class for the Story2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-story2',
  templateUrl: 'story2.html',
})
export class Story2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData : UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Story2Page');
  }
 PindahSlide3(){
  this.navCtrl.push(Slide3Page);
}
}
