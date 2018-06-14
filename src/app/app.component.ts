import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

//import {LoginPage} from '../pages/login/login';
import { HomePage } from '../pages/home/home';
//import {RegisterPage} from '../pages/register/register';
@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = HomePage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
	platform.ready().then(() => {

	    statusBar.styleDefault();
	    splashScreen.hide();
	});
    }
}

