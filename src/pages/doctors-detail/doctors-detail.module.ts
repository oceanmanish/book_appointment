import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorsDetailPage } from './doctors-detail';

@NgModule({
  declarations: [
    //DoctorsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorsDetailPage),
  ],
})
export class DoctorsDetailPageModule {}
