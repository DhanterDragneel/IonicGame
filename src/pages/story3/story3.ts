import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Slide4Page } from '../slide4/slide4';

/**
 * Generated class for the Story3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-story3',
  templateUrl: 'story3.html',
})
export class Story3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData : UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Story3Page');
  }
  ionViewWillEnter() {
    this.userData.GetStory();
 }
 PindahSlide4(){
  this.navCtrl.push(Slide4Page);
}

}
