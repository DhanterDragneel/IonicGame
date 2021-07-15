import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Slide2Page } from '../slide2/slide2';
import { UserProvider } from '../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the Slide1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide1',
  templateUrl: 'slide1.html',
})
export class Slide1Page {
  public taskList2=["tes","ajaj"];
  public taskName: string = " ";
  // postQuestion:any;
  // public Question=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public userData : UserProvider,public authProvider:AuthProvider, public toastCtrl: ToastController) {
  }
  addTask(){
    if (this.taskName.length > 0){
      let task = this.taskName;
      this.taskList2.push(task);
      this.taskName = "";
    }
  }
  ionViewWillEnter() {
     this.userData.GetQuestion();
  }
  pushAnswer(index){
    this.userData.answerQ1.push(this.userData.userdata[index]);
    this.navCtrl.push(Slide2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slide1Page');
  }

  PindahSlide2(){
    this.navCtrl.push(Slide2Page);
  }

}
