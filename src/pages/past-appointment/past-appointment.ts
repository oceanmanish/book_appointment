import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PastAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-past-appointment',
    templateUrl: 'past-appointment.html',
})
export class PastAppointmentPage {


    pastAppointmentListArray = [
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
	console.log('ionViewDidLoad PastAppointmentPage');
    }

}
