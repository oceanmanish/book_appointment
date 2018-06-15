import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';

import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {BookAppointmentPage} from '../pages/book-appointment/book-appointment';
import {NextAppointmentPage} from '../pages/next-appointment/next-appointment';
import {PastAppointmentPage} from '../pages/past-appointment/past-appointment';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;
    @ViewChild(Nav) nav: Nav;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {
	
	platform.ready().then(() => {
	    this.checkUserlogin().then(res => {
		if (res) {
		    this.rootPage = HomePage;
		} else {
		    this.rootPage = LoginPage;
		}
	    });
	    statusBar.styleDefault();
	    splashScreen.hide();
	});
	
    }

    checkUserlogin() {
	const promise = new Promise((resolve, reject) => {
	    this.storage.get('isActive').then((isActive) => {
		resolve(isActive);
	    });
	});
	return promise;
    }

    openPage(pageName: any) {

	if (pageName == 'home') {
	    this.nav.setRoot(HomePage);
	} else if (pageName == 'nextAppointment') {
	    this.nav.push(NextAppointmentPage);
	} else if (pageName == 'book') {
	    this.nav.push(BookAppointmentPage);
	} else if (pageName == 'pastAppointment') {
	    this.nav.push(PastAppointmentPage);
	} else if (pageName == 'setting') {

	} else if (pageName == 'doctor') {

	} else if (pageName == 'logout') {
	    this.storage.remove('isActive');
	    this.nav.setRoot(LoginPage);
	}

    }

}

