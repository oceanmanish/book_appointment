import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';



@Component({
    selector: 'page-doctors-detail',
    templateUrl: 'doctors-detail.html',
})
export class DoctorsDetailPage {

    doctorsInfoArray = [
	{
	    personal_info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\
			 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n\
			when an unknown printer took a galley of type and scrambled it to make a type\n\
			 specimen book", name: "Xyz xyz", education: "MBBS", img_src: "doctor.jpg", "experience": "20 Years", email_id: "test8@gmail.com"
	},
	{
	    personal_info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\
			 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n\
			when an unknown printer took a galley of type and scrambled it to make a type\n\
			 specimen book", name: "Xyz xyz", education: "MBBS", img_src: "doctor.jpg", "experience": "20 Years", email_id: "test8@gmail.com"
	},
	{
	    personal_info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\
			 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n\
			when an unknown printer took a galley of type and scrambled it to make a type\n\
			 specimen book", name: "Xyz xyz", education: "MBBS", img_src: "doctor.jpg", "experience": "20 Years", email_id: "test8@gmail.com"
	},
	{
	    personal_info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\
			 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n\
			when an unknown printer took a galley of type and scrambled it to make a type\n\
			 specimen book", name: "Xyz xyz", education: "MBBS", img_src: "doctor.jpg", "experience": "20 Years", email_id: "test8@gmail.com"
	},
	{
	    personal_info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\
			 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n\
			when an unknown printer took a galley of type and scrambled it to make a type\n\
			 specimen book", name: "Xyz xyz", education: "MBBS", img_src: "doctor.jpg", "experience": "20 Years", email_id: "test8@gmail.com"
	}
    ];
    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {

    }

}
