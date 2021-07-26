import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ToastController } from 'ionic-angular';
import { Slide2Page } from '../slide2/slide2';
import { UserProvider } from '../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';
import { Typeoption1Page } from '../typeoption1/typeoption1';
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
  // public Question=[];
  constructor(public navCtrl: NavController,public navParams: NavParams,public userData : UserProvider,public authProvider:AuthProvider, public toastCtrl: ToastController,private platform : Platform) {
  }
 
  ionViewWillEnter() {
     this.userData.GetQuestion();
     this.platform.ready().then(() => {
      document.addEventListener('backbutton', () => {
       if (this.navCtrl.canGoBack()) {
         this.platform.exitApp()
         return;
       }
       this.navCtrl.pop()
     }, false);
      });
     console.log(this.userData.Question)
  }
  pushAnswer(index){
    this.userData.answerQ1.push(this.userData.userdata[index]);
    this.navCtrl.push(Typeoption1Page);
  }
  


}
