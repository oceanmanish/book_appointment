import {Component} from '@angular/core';
import {NavController, MenuController, NavParams} from 'ionic-angular';

import {AuthProvider} from '../../providers/auth/auth';
import {BookAppointmentPage} from '../book-appointment/book-appointment';
import {NextAppointmentPage} from '../next-appointment/next-appointment';
import {PastAppointmentPage} from '../past-appointment/past-appointment';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    tiles = [
	{text: 'Book Appointment', cols: 2, rows: 1, color: '#d5a4d5'},
	{text: 'Next Appointment', cols: 2, rows: 1, color: '#d5a4d5 ', img_src: "img-3.jpg"},
	{text: 'Past Appointment', cols: 2, rows: 1, color: '#d5a4d5 '},


    ];
    action: any;
    IsError = false;
    errorMessage: any;
    isSuccess = false;
    successMessage: any;
    isNextAppointmnent = false
    nextAppontData: any;
    appointmentList: any;
    constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParam: NavParams, public auth: AuthProvider) {
	this.menuCtrl.enable(true, 'myMenu');
	this.action = this.navParam.get('name');
	if (this.action == 'booked') {
	    this.isSuccess = true;
	    this.successMessage = this.navParam.get('message');

	}
	//this.navCtrl.setRoot(this.navCtrl.getActive().component);
	this.getNextAppointment();
    }
   
    onPageWillEnter() {
      this.getNextAppointment();
    }
    check(data: any) {
	this.IsError = false;
	this.isSuccess = false;
	if (data == "Book Appointment") {
	    this.navCtrl.push(BookAppointmentPage);
	} else if (data == "Next Appointment") {
	    this.navCtrl.push(NextAppointmentPage);
	} else if (data == "Past Appointment") {
	    this.navCtrl.push(PastAppointmentPage);
	}
    }
    getNextAppointment() {
	this.auth.getNextAppointment().then(data => {
	    if (data) {
		this.nextAppontData = data;
		this.isNextAppointmnent = true;
	    }
	});
    }
    cancelAppointment(id: any) {
	this.isSuccess = false;
	this.auth.getAppointmentList('book').then(data => {
	    this.appointmentList = data;
	    let res = this.appointmentList.splice(id, 1);
	    console.log(this.appointmentList);
	    this.auth.setAppointmentArray(this.appointmentList).then(data => {
		console.log(data);
		this.isNextAppointmnent = false;
		this.nextAppontData = null;
	    }, err => {

	    }).catch(Error => {

	    });
	});

    }

}
