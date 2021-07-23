// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
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


  constructor(public authProvider:AuthProvider) {
    
  }
  GetQuestion() {
    this.authProvider.GetData('Question')
     .subscribe(res => {
       this.postQuestion=res;
       if(this.postQuestion.Question){
         this.Question=this.postQuestion.Question;
       }
       else{ 
         // this.Question="";
         // loading.dismiss();
      }         
     }, err => {
       console.log(err);
       // loading.dismiss();
     });
 }
 GetOption(){
  this.authProvider.GetData('Option')
   .subscribe(res => {
     this.postOption=res;
     if(this.postOption.Option){
       this.Option=this.postOption.Option;
     }
     else{ 
       // this.Question="";
       // loading.dismiss();
    }         
   }, err => {
     console.log(err);
     // loading.dismiss();
   });
}
GetStory(){
  this.authProvider.GetData('Story')
   .subscribe(res => {
     this.postStory=res;
     if(this.postStory.Story){
       this.Story=this.postStory.Story;
     }
     else{ 
       // this.Question="";
       // loading.dismiss();
    }         
   }, err => {
     console.log(err);
     // loading.dismiss();
   });
}
 

}
