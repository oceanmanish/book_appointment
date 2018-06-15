import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConstantProvider} from '../constant/constant';
import 'rxjs/add/operator/timeout'
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiProvider {

    constructor(public http: HttpClient, public globleConst: ConstantProvider, public storage: Storage) {

    }
    userLogin(data: any) {
	let obj = JSON.stringify(data);
	return this.http.post(this.globleConst.requestUrl + "login", obj).timeout(30000).map((response: Response) => response);
    }
}
