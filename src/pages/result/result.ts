import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  // public question1:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData : UserProvider) {
  }
  

  ionViewDidLoad() {
    // console.log(this.userData.answerQ1);
  }

}
