import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, MenuController, LoadingController} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {ApiProvider} from '../../providers/api/api';
import {AuthProvider} from '../../providers/auth/auth';
import {RegisterPage} from '../register/register';
import {HomePage} from '../home/home';
@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    authForm: FormGroup;
    IsError = false;
    errorMsg: any;
    userData = [];
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
	public platform: Platform, public loadingController: LoadingController,
	public formBuilder: FormBuilder, public menuCtrl: MenuController, public apiprovider: ApiProvider, public auth: AuthProvider) {
	this.menuCtrl.enable(false, 'myMenu');
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
	//let loading = this.loadingController.create({content: "Logging in, please wait..."});
	//loading.present();

//		this.apiprovider.userLogin(data)
//	    .subscribe(
//	    data => {
//
//		if (data['error'] == 0) {
//		    this.userData = data['user'];
//		    this.auth.authSuccess(this.userData);
//		    this.navCtrl.setRoot(HomePage);
//
//		} else if (data['error'] == 1) {
//		    this.IsError = true;
//		    this.errorMsg = data['message'];
//		}
//		loading.dismissAll();
//	    },
//	    error => {
//		this.IsError = true;
//		this.errorMsg = 'Please try after some time..';
//
//		loading.dismissAll();
//
//	    });

	this.auth.loginApi(data).then(res => {
	    console.log(res);
	    if (res != 'reject') {
		this.auth.authSuccess(true);
		this.navCtrl.setRoot(HomePage)
	    } else {
		this.IsError = true;
		this.errorMsg = 'USername or password is invalid';
	    }
	   // loading.dismissAll();
	}, error => {
	    console.log(error);
	  //  loading.dismissAll();

	});
	//loading.dismissAll();
    }
    goToRegisterPage() {
	this.navCtrl.push(RegisterPage);
    }
}
