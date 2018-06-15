import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, MenuController, LoadingController} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {LoginPage} from '../login/login';
import {AuthProvider} from '../../providers/auth/auth';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {


    registerForm: FormGroup;

    constructor(public navCtrl: NavController, public navParams: NavParams,
	public platform: Platform, public loadingController: LoadingController,
	public formBuilder: FormBuilder, public menuCtrl: MenuController, public auth: AuthProvider) {

	this.registerForm = this.formBuilder.group({
	    'email': [null, Validators.compose([Validators.required])],
	    'mobile_number': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^(?=(.*[0-9])).{10,}$')])],//, Validators.minLength(5), Validators.maxLength(10)])],
	    'cnf_password': [null, Validators.compose([Validators.required])],
	    'password': [null, Validators.compose([Validators.required])],


	});
    }


    ionViewDidLoad() {

    }

    onSubmit() {
	console.log();
	if (this.registerForm.valid) {
	    this.registerUser(this.registerForm.value);
	} else {
	    Object.keys(this.registerForm.controls).forEach(field => {
		const control = this.registerForm.get(field);
		control.markAsTouched({onlySelf: true});
	    });
	}
    }

    /**
     * this is for register user function
     */
    registerUser(data: any) {
	
	let res = this.auth.registerNewUser(data);
	if (res) {
	    this.navCtrl.setRoot(HomePage);
	}
    }

    /**
     * Go to previous page
     */
    previousPage() {
	this.navCtrl.setRoot(LoginPage);
    }
}
