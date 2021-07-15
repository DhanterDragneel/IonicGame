import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide5Page } from '../slide5/slide5';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the Slide4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide4',
  templateUrl: 'slide4.html',
})
export class Slide4Page {
  public taskList4=["tes"];
  public taskName: String=" ";
  constructor(public navCtrl: NavController, public navParams: NavParams,public userData:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slide4Page');
  }
  PindahSlide5(){
    this.navCtrl.push(Slide5Page);
  }
  pushAnswer(index){
    this.userData.answerQ1.push(this.userData.userdata[index]);
    this.navCtrl.push(Slide5Page);
  }
  

}
