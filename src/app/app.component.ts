import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Network } from '@ionic-native/network';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = 'HomePage';

  constructor(
    private platform: Platform,
    private network: Network,
    private toastCtrl: ToastController,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      
      this.lookForNetwork();
    });
  }

  lookForNetwork(){
    
    //While app open
    if(this.network.type == 'none'){
      console.log('Internet is not there while open app');
      let toast = this.toastCtrl.create({
        message: 'Internet Not Available../!',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    }

    //While app is running
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('Network disconnected :-(');
      
      let toast = this.toastCtrl.create({
        message: 'Network disconnected../!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });

    //While app is running
    let connectSubscription = this.network.onConnect().subscribe(() => {  
      console.log('network connected!');
    
      let toast = this.toastCtrl.create({
        message: 'Network connected../!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}

