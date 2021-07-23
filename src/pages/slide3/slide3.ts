import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide4Page } from '../slide4/slide4';
import { UserProvider } from '../../providers/user/user';
import { Typeoption3Page } from '../typeoption3/typeoption3';

/**
 * Generated class for the Slide3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide3',
  templateUrl: 'slide3.html',
})
export class Slide3Page {
  public taskList3=["tes"];
  public taskName: string = " ";
  constructor(public navCtrl: NavController, public navParams: NavParams, public userData:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slide3Page');
  }
  PindahSlide4(){
    this.navCtrl.push(Slide4Page);
  }
  pushAnswer(index){
    this.userData.answerQ1.push(this.userData.userdata[index]);
    this.navCtrl.push(Typeoption3Page);
  }
  

}
