import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';


@Injectable()
export class AuthProvider {

    appointmentArray = [];
    constructor(public http: HttpClient, public storage: Storage) {
	this.storage.set('username', 'test@amility.com');
	this.storage.set('password', 'admin');

    }
    authSuccess(data: any) {
	if (data) {
	    this.storage.set('isActive', true);
	} else {

	}
	//		if (data) {
	//	    this.storage.set('userData', data);
	//	    this.storage.set('token', data['token']);
	//	}
	//    }
    }
    loginApi(data: any) {

	const promise = new Promise((resolve, reject) => {
	    this.storage.get('username').then((username) => {
		if (username == data['email']) {
		    return 'matched';
		} else {
		}
	    }).then(res => {
		if (res) {
		    this.storage.get('password').then((password) => {
			if (password == data['password']) {
			    this.storage.set('appointment_array', this.appointmentArray);
			    resolve('matched')
			} else {
			}
		    });
		}
	    });
	});
	return promise;
    }

    getAppointmentList(data: any) {
	let res = [];
	const promise = new Promise((resolve, reject) => {
	    this.storage.get('appointment_array').then((appointmentList) => {
		if (appointmentList) {
		    this.appointmentArray = appointmentList;
		    for (let i = 0; i < this.appointmentArray.length; i++) {
			if (data == this.appointmentArray[i]['appointment_type']) {
			    res.push(this.appointmentArray[i])
			}

		    }
		    resolve(res);
		}

	    });
	});
	return promise;
    }

    registerAppointment(data: any) {
	const promise = new Promise((resolve, reject) => {
	    this.storage.get('appointment_array').then((appointmentList) => {

		if (appointmentList) {
		    this.appointmentArray = appointmentList;
		}

		this.appointmentArray.push(data);
		this.storage.remove('appointment_array');
		this.storage.set('appointment_array', this.appointmentArray);
		resolve(this.appointmentArray);
	    });
	});
	return promise;
    }

    registerNewUser(data: any) {
	this.storage.set('register_user_array', data);
	this.authSuccess(true);
	return true;
    }
    getNextAppointment() {
	const promise = new Promise((resolve, reject) => {
	    this.storage.get('appointment_array').then((appointmentList) => {

		if (appointmentList) {
		    let len = appointmentList.length;
		    resolve(appointmentList[len - 1]);
		}

	    });
	});
	return promise;
    }
    setAppointmentArray(data: any) {
	let pendingAppointment = [];
	const promise = new Promise((resolve, reject) => {
	    this.storage.remove('appointment_array');
	    if (data.length > 0) {
		for (let i = 0; i < data.length; i++) {
		    pendingAppointment.push(data[i])
		}
		this.storage.set('appointment_array', pendingAppointment);
	    }else{
		this.storage.set('appointment_array', []);
	    }


	    resolve('success');
	});
	return promise;
    }
}
