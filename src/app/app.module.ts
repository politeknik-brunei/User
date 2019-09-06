import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PayPal } from '@ionic-native/paypal/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfig from './firebase'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'


// import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UserService } from './user.service';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

// import { Contacts } from '@ionic-native/contacts/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EmailComposer,
    SMS,
    CallNumber
=======
    PayPal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService
>>>>>>> 17453228d99fdb3d85b0788a4f8c758d0b0a1647
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
