import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {NextAppointmentPage} from '../next-appointment/next-appointment';

@Component({
    selector: 'page-book-appointment',
    templateUrl: 'book-appointment.html',
})
export class BookAppointmentPage {

    bookingAppointmentForm: FormGroup;
    IsError = false;
    errorMsg: any;
    bloodGroup = [
	{value: 'O+', viewValue: 'O+'},
	{value: 'A+', viewValue: 'A+'},
	{value: 'A-', viewValue: 'A-'},
	{value: 'B+', viewValue: 'B+'},
	{value: 'B-', viewValue: 'B-'},
	{value: 'AB+', viewValue: 'AB+'},
	{value: 'AB-', viewValue: 'AB-'}
    ];
    constructor(public navCtrl: NavController, public navParams: NavParams, public _fb: FormBuilder) {
	this.bookingAppointmentForm = this._fb.group({
	    'patent_name': [null, Validators.compose([Validators.required])],
	    'age': [null, Validators.compose([Validators.required])],
	    'blood_group': [null],
	    'address': [null, Validators.compose([Validators.required])],
	    'problem': [null, Validators.compose([Validators.required])],
	    'appointment_date': [null, Validators.compose([Validators.required])],
	    'comment': [null],
	    'isVisited': [null, Validators.compose([Validators.required])],
	});
    }

    ionViewDidLoad() {
	console.log('test')
    }
    onSubmit() {
	console.log(this.bookingAppointmentForm);
	this.registerAppointmentRequest();
    }
    registerAppointmentRequest() {
	this.navCtrl.push(NextAppointmentPage).then(() => {
	    const startIndex = this.navCtrl.getActive().index - 1;
	    this.navCtrl.remove(startIndex);
	});
    }

}
