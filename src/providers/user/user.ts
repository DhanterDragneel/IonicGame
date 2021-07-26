// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import { LoadingController, ToastController } from 'ionic-angular';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  public userdata =[];
  public answerQ1=[];
  postQuestion:any;
  public Question=[];
  postOption:any;
  public Option=[];
  postStory:any;
  public Story=[];
  public loader: any;


  constructor(public authProvider:AuthProvider,public loadingCtrl: LoadingController,  public toastCtrl: ToastController) {
    
  }
  presentLoading(){
    this.loader = this.loadingCtrl.create({content: "Please wait ..."})
    this.loader.present();
 }
 closeLoading(){
  this.loader.dismiss();
}
  GetQuestion() {
    this.presentLoading();
    this.authProvider.GetData('Question')
     .subscribe(res => {
       this.postQuestion=res;
       if(this.postQuestion.Question){
         this.Question=this.postQuestion.Question;
         this.closeLoading();
       }
       else{ 
         this.Question=[''];
         this.closeLoading();
      }         
     }, err => {

      const toast = this.toastCtrl.create({
        message: 'Gagal koneksi ke server.'+err,
        duration: 2500
     });
     toast.present();
     this.closeLoading();
     });
 }
 GetOption(){
  this.presentLoading();
  this.authProvider.GetData('Option')
   .subscribe(res => {
     this.postOption=res;
     if(this.postOption.Option){
       this.Option=this.postOption.Option;
       this.closeLoading();
     }
     else{ 
       // this.Question="";
       // loading.dismiss();
    }         
   }, err => {
    const toast = this.toastCtrl.create({
      message: 'Gagal koneksi ke server.'+err,
      duration: 2500
   });
   toast.present();
   this.closeLoading();
   });
}
GetStory(){
  this.presentLoading();
  this.authProvider.GetData('Story')
   .subscribe(res => {
     this.postStory=res;
     if(this.postStory.Story){
       this.Story=this.postStory.Story;
       this.closeLoading();
     }
     else{ 
       // this.Question="";
       // loading.dismiss();
    }         
   }, err => {
    const toast = this.toastCtrl.create({
      message: 'Gagal koneksi ke server.'+err,
      duration: 2500
   });
   toast.present();
   this.closeLoading();
   });
}
 

}
