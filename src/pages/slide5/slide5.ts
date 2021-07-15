import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the Slide5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide5',
  templateUrl: 'slide5.html',
})
export class Slide5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slide5Page');
  }
  PindahResultPage(){
    this.navCtrl.push(ResultPage);
  }
  pushAnswer(index){
    this.userData.answerQ1.push(this.userData.userdata[index]);
    this.navCtrl.push(ResultPage);
  }

}
