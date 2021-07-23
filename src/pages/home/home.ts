import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Slide1Page } from '../slide1/slide1';
import { UserProvider } from '../../providers/user/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public taskList=[];
  public taskName: string = " ";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public userData : UserProvider) {

  }
  addTask(){
    if (this.taskName == " "){
      let msg = "Tidak Boleh Kosong";
      let alert = this.alertCtrl.create({
        title:"Warning",
        message:msg,
        buttons:["OK"]
      });
      alert.present();
      
    } else{
      let task = this.taskName;
      this.userData.userdata.push(task);
      this.taskName = "";
    }
  }

  deleteTask(index){
    this.taskList.splice(index, 1);
}
updateTask(index) {
  let alert = this.alertCtrl.create({
      title: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Update', handler: data => {
                    this.taskList[index] = data.editTask; }
                }
               ]
  });
  alert.present();
}
PindahSlide1(){
    this.navCtrl.push(Slide1Page);
}


}
