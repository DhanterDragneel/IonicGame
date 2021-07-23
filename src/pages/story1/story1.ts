import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide2Page } from '../slide2/slide2';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the Story1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-story1',
  templateUrl: 'story1.html',
})
export class Story1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData : UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Story1Page');
  }
  PindahSlide2(){
    this.navCtrl.push(Slide2Page);
  }
  ionViewWillEnter() {
    this.userData.GetStory();
 }

}
