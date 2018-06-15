import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthProvider} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
@Component({
    selector: 'page-book-appointment',
    templateUrl: 'book-appointment.html',
})
export class BookAppointmentPage {

    bookingAppointmentForm: FormGroup;
    IsError = false;
    errorMessage: any;
    selectedDate: any;
    showTimeList = false;

    bloodGroup = [
	{value: 'O+', viewValue: 'O+'},
	{value: 'A+', viewValue: 'A+'},
	{value: 'A-', viewValue: 'A-'},
	{value: 'B+', viewValue: 'B+'},
	{value: 'B-', viewValue: 'B-'},
	{value: 'AB+', viewValue: 'AB+'},
	{value: 'AB-', viewValue: 'AB-'}
    ];
    constructor(public navCtrl: NavController, public navParams: NavParams, public _fb: FormBuilder, public auth: AuthProvider) {
	this.bookingAppointmentForm = this._fb.group({
	    'name': [null, Validators.compose([Validators.required])],
	    'age': [null, Validators.compose([Validators.required])],
	    'appointment_date': [null, Validators.compose([Validators.required])],
	    'bookingTime': [null, Validators.compose([Validators.required])]
	});
    }
    /**
     'blood_group': [null],
		'address': [null, Validators.compose([Validators.required])],
		'problem': [null, Validators.compose([Validators.required])],
		
		'comment': [null],
		'isVisited': [null, Validators.compose([Validators.required])],
     */
    ionViewDidLoad() {

    }
    onSubmit() {
	if (this.bookingAppointmentForm.valid) {
	    this.registerAppointmentRequest(this.bookingAppointmentForm.value);
	} else {
	    Object.keys(this.bookingAppointmentForm.controls).forEach(field => {
		const control = this.bookingAppointmentForm.get(field);
		control.markAsTouched({onlySelf: true});
	    });
	}
    }
    registerAppointmentRequest(data: any) {

	let obj = {name: data['name'], age: data['age'], date: data['appointment_date'], time_slot: data['bookingTime'], appointment_type: 'book'};

	this.auth.registerAppointment(obj).then(data => {
	
	    if (data) {
		this.navCtrl.setRoot(HomePage, {name: 'booked', message: 'Your appointment has successfully registered'});
	    }
	});

	//	this.navCtrl.push(NextAppointmentPage).then(() => {
	//	    const startIndex = this.navCtrl.getActive().index - 1;
	//	    this.navCtrl.remove(startIndex);
	//	});

    }

    /**
     * show time list
     */
    currentDate() {
	
	if (this.selectedDate) {
	    this.showTimeList = true;
	}
    }
}
