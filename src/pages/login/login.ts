import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, MenuController, LoadingController} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {RegisterPage} from '../register/register';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    authForm: FormGroup;

    constructor(public navCtrl: NavController, public navParams: NavParams,
	public platform: Platform, public loadingController: LoadingController,
	public formBuilder: FormBuilder, public menuCtrl: MenuController, ) {

	this.authForm = this.formBuilder.group({
	    'email': [null, Validators.compose([Validators.required])],
	    'password': [null, Validators.compose([Validators.required])],//, Validators.minLength(8) ])]

	});
    }

    ionViewDidLoad() {

    }

    onSubmit() {
	if (this.authForm.valid) {
	    this.loginUser(this.authForm.value);
	} else {
	    Object.keys(this.authForm.controls).forEach(field => {
		const control = this.authForm.get(field);
		control.markAsTouched({onlySelf: true});
	    });
	}
    }

    /**
     * this is for login application
     */
    loginUser(data: any) {

    }
    goToRegisterPage() {
	this.navCtrl.push(RegisterPage);
    }
}
