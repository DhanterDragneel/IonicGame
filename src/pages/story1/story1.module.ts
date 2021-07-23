import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Story1Page } from './story1';

@NgModule({
  declarations: [
    Story1Page,
  ],
  imports: [
    IonicPageModule.forChild(Story1Page),
  ],
})
export class Story1PageModule {}
