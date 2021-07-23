import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide3Page } from '../slide3/slide3';
import { UserProvider } from '../../providers/user/user';
import { Typeoption2Page } from '../typeoption2/typeoption2';
/**
 * Generated class for the Slide2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide2',
  templateUrl: 'slide2.html',
})
export class Slide2Page {
  public taskList2=["tes"];
  public taskName: string = " ";
  constructor(public navCtrl: NavController, public navParams: NavParams, public userData : UserProvider) {
  }

//   ionViewWillEnter() {
//     this.userData.GetQuestion();
//  }
  pushAnswer(index){
    this.userData.answerQ1.push(this.userData.userdata[index]);
    this.navCtrl.push(Typeoption2Page);
  }
  

}
