import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(public alertController: AlertController) {}

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'PEAK HOURS',
      message: 'Additional $5',
      buttons: [
        {
          text:'Cancel',
          handler: () => {
            window.location.pathname = '/homepage';
        }
      },

      {
        text: 'Okay',
        handler: () => {
          window.location.pathname = '/taxihome';
      }
    }
  ]

});

    await alert.present();
  }


  ngOnInit() {
  }

}
