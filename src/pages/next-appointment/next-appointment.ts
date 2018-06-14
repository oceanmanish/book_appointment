import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';



@IonicPage()
@Component({
    selector: 'page-next-appointment',
    templateUrl: 'next-appointment.html',
})
export class NextAppointmentPage {

    futureAppointmentListArray = [
	{name: "ABC", age: "24", appointmentDate: '26/06/2018'},
	{name: "XYZ", age: "22", appointmentDate: '27/06/2018'},
	{name: "ABC", age: "25", appointmentDate: '28/06/2018'},
	{name: "XYZ", age: "26", appointmentDate: '29/06/2018'},
	{name: "ABC", age: "27", appointmentDate: '30/06/2018'},
	{name: "XYZ", age: "28", appointmentDate: '31/06/2018'}
    ];


    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {

    }

}
