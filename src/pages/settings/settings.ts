import { HomePage } from './../home/home';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string;
  state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('location').then((val) =>{
      if(val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      } else {
        this.city = 'Jakarta';
        this.state = 'ID';
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
    let location = {
      city: this.city,
      state: this.state
    }
    this.storage.set('location',JSON.stringify(location));
    this.navCtrl.push(HomePage);
    console.log(location);
  }

}
