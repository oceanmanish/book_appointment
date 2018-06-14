import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {BookAppointmentPage} from '../book-appointment/book-appointment';
import {NextAppointmentPage} from '../next-appointment/next-appointment';
import {PastAppointmentPage} from '../past-appointment/past-appointment';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    tiles = [
	{text: 'Hospital', cols: 2, rows: 1, color: 'indigo'},
	{text: 'Doctors', cols: 2, rows: 1, color: 'mediumorchid'},
	{text: 'Book Appointment', cols: 2, rows: 1, color: 'lightpink'},
	{text: 'Next Appointment', cols: 2, rows: 1, color: '#DDBDF1', img_src: "img-3.jpg"},
	{text: 'Past Appointment', cols: 2, rows: 1, color: 'magenta'},
	{text: 'Consltant', cols: 2, rows: 1, color: 'lightpink'},

    ];
    constructor(public navCtrl: NavController) {

    }
    check(data: any) {
	if (data == "Book Appointment") {
	    this.navCtrl.push(BookAppointmentPage);
	} else if (data == "Next Appointment") {
	    this.navCtrl.push(NextAppointmentPage);
	} else if (data == "Past Appointment"){
	    this.navCtrl.push(PastAppointmentPage);
	}
    }

}
