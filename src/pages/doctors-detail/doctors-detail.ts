import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';



@Component({
    selector: 'page-doctors-detail',
    templateUrl: 'doctors-detail.html',
})
export class DoctorsDetailPage {

    doctorsInfoArray = [
	{name: "Xyz xyz", education: "MBBS", "img_src": "", "experiance": "20 Years", email_id: "test8@gmail.com"},
	{name: "ABC xyz", education: "MBBS", "img_src": "", "experiance": "25 Years", email_id: "test1@gmail.com"},
	{name: "MNO xyz", education: "MBBS", "img_src": "", "experiance": "23 Years", email_id: "test2@gmail.com"},
	{name: "QWE xyz", education: "MBBS", "img_src": "", "experiance": "2 Years", email_id: "test4@gmail.com"},
	{name: "FSD xyz", education: "MBBS", "img_src": "", "experiance": "6 Years", email_id: "test6@gmail.com"}
    ];
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {

    }

}
