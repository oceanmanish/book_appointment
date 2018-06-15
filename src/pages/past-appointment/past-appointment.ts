import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';

@IonicPage()
@Component({
    selector: 'page-past-appointment',
    templateUrl: 'past-appointment.html',
})
export class PastAppointmentPage {


    appointmentList: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {

    }

    ionViewDidLoad() {
	this.auth.getAppointmentList('book').then(data => {
	    if (data) {
		this.appointmentList = data;
		console.log(this.appointmentList);
	    }

	});
    }

}
