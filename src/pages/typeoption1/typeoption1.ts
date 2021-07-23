import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Story1Page } from '../story1/story1';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the Typeoption1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typeoption1',
  templateUrl: 'typeoption1.html',
})
export class Typeoption1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData : UserProvider) {
  }

  ionViewDidLoad() {
    console.log(this.userData.Option);
  }
  PindahStoryPage(){
    this.navCtrl.push(Story1Page);
  }
  ionViewWillEnter() {
    this.userData.GetOption();
 }

}
