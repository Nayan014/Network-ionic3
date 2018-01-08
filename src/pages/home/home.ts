import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Network } from '@ionic-native/network';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private network: Network,
  ) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  whichInternet(){
    let alert = this.alertCtrl.create({
      title: 'Network informaction',
      subTitle: this.network.type,
      buttons: ['OK']
    });
    alert.present();
  }

  nevagateToPage(page): void{
    this.navCtrl.push(page);
  }



}
