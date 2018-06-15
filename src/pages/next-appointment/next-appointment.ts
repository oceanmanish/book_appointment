import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, Platform , App} from 'ionic-angular';
import {BookAppointmentPage} from '../book-appointment/book-appointment';
import {AuthProvider} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
@IonicPage()
@Component({
    selector: 'page-next-appointment',
    templateUrl: 'next-appointment.html',
})
export class NextAppointmentPage {
    appointmentList: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider, 
	public platform: Platform,public loadingController: LoadingController , public app:App ) {

	this.platform.registerBackButtonAction(() => {
	    console.log('test');
	    let nav = app.getActiveNavs()[0];
	    let activeView = nav.getActive();
	    console.log(activeView.name);
	    if (activeView.name === "NextAppointmentPage") {
		this.navCtrl.setRoot(HomePage);
	    } else if (nav.canGoBack()) {
		nav.pop();
	    } else {
		this.platform.exitApp();
	    }
	});
    }

    ionViewDidLoad() {
	this.auth.getAppointmentList('book').then(data => {

	    if (data) {
		this.appointmentList = data;

	    }

	});
    }
    backToPrevious() {
	this.navCtrl.pop();
    }

    editAppointment() {
	this.navCtrl.push(BookAppointmentPage);
    }
    cancelAppointment(id: any) {
	////let loading = this.loadingController.create({content: "Please wait..."});
	//loading.present();
	let res = this.appointmentList.splice(id, 1);
	console.log(this.appointmentList);
	this.auth.setAppointmentArray(this.appointmentList).then(data => {
	    console.log(data);
	    //    loading.dismissAll();
	}, err => {
	    //  loading.dismissAll();
	}).catch(Error => {
	    //   loading.dismissAll();
	});
    }
    check(){
	console.log('asd');
	this.navCtrl.setRoot(HomePage)
    }

}
