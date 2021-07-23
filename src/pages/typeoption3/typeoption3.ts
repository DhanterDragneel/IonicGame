import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Story3Page } from '../story3/story3';
/**
 * Generated class for the Typeoption3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typeoption3',
  templateUrl: 'typeoption3.html',
})
export class Typeoption3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData : UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Typeoption3Page');
  }
  
 PindahStoryPage(){
  this.navCtrl.push(Story3Page);
}
}
