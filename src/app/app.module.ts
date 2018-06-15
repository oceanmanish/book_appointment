import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from "@ionic/storage";


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSelectModule, MatFormFieldModule, MatAutocompleteModule, MatCheckboxModule, MatInputModule, MatCardModule, MatRadioModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule, MatNativeDateModule} from "@angular/material";
import {MatGridListModule} from '@angular/material/grid-list';


import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {BookAppointmentPage} from '../pages/book-appointment/book-appointment';
import {PastAppointmentPage} from '../pages/past-appointment/past-appointment';
import {NextAppointmentPage} from '../pages/next-appointment/next-appointment';
import {DoctorsDetailPage} from '../pages/doctors-detail/doctors-detail';
import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';
import { ConstantProvider } from '../providers/constant/constant';
import { MergeJsonProvider } from '../providers/merge-json/merge-json';
@NgModule({
    declarations: [
	MyApp,
	HomePage, LoginPage, RegisterPage, BookAppointmentPage, PastAppointmentPage, NextAppointmentPage, DoctorsDetailPage

    ],
    imports: [
	BrowserModule,HttpClientModule,
	IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot(),
	BrowserAnimationsModule,
	MatButtonModule, MatSelectModule, MatAutocompleteModule, MatTabsModule,
	MatCheckboxModule, MatFormFieldModule, MatInputModule,
	MatRadioModule, MatCardModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule,
	MatDialogModule, MatSidenavModule, MatGridListModule

    ],
    bootstrap: [IonicApp],
    entryComponents: [
	MyApp,
	HomePage, LoginPage, RegisterPage, BookAppointmentPage, PastAppointmentPage, NextAppointmentPage, DoctorsDetailPage
    ],
    providers: [
	StatusBar,
	SplashScreen,
	{provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    AuthProvider,
    ConstantProvider,
    MergeJsonProvider
    ]
})
export class AppModule {}
