import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { auth } from 'firebase/app'

import { ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { AlertController } from '@ionic/angular'
import { UserService } from '../user.service'
import { AngularFirestore } from '@angular/fire/firestore'


@Component({
  selector: 'app-register-taxi',
  templateUrl: './register-taxi.page.html',
  styleUrls: ['./register-taxi.page.scss'],
})
export class RegisterTaxiPage implements OnInit {
  
  username: string = ""
  email: string =""
  password: string = ""
  cpassword: string = ""
  phonenumber: string = ""
  title: string = ""
  license: string = ""
  type: string = ""

  

  constructor(

    public afAuth: AngularFireAuth,
    public router: Router,
    public user: UserService,
    public alert: AlertController,
    public afstore: AngularFirestore
  )
   { }   

  ngOnInit() {
  }
  async register(){

    // console.log('username: ', this.registerForm.value.username);
    // console.log('email: ', this.registerForm.value.email);
    // console.log('password: ', this.registerForm.value.password);
    // console.log('cpassword: ', this.registerForm.value.cpassword);
    // console.log('phonenumber: ', this.registerForm.value.phonenumber);
    // console.log('license: ', this.registerForm.value.license);

    const { username, email, password, cpassword, phonenumber, license, type} = this
    if(password !== cpassword) {
      this.showAlert("Error!", "passwords don't match")
        return console.error("Error, passwords don't match")
    }
    
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password)

      console.log(res)
      this.showAlert("Success!", "Welcome to By The Way! Please proceed to Login to access")
      
      this.afstore.doc(`users/${res.user.uid}`).set({
       username,
       email,
       phonenumber,
       license,
       type
      
      })

      this.user.setUser({
        username,
        uid: res.user.uid
      })
      
   
      
      this.router.navigate(['/login-page'])
    } catch(error){
      console.dir(error)
      this.showAlert("Error", error.message)
    }
    
  }
  
  async showAlert(header: string, message:string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['OK']
    })


    await alert.present()
  }
}
