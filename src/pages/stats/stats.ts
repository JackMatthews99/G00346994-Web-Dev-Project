import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})

export class StatsPage {
  //put played, percent and won on this page
  played: number;
  won: number;
  percent: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewWillEnter(){
    //retrieve played storage
    this.storage.get("played")
    .then((data) =>
    {
    this.played = data;
    })
    .catch((err) => {
    alert("Error accesssing Storage")
    })
 
    //retrieve won storage
    this.storage.get("won")
    .then((data) =>
    {
    this.won = data;
    })
    .catch((err) => {
    alert("Error accesssing Storage")
    })

    //retrieve percent storage
    this.storage.get("percent")
    .then((data) =>
    {
    this.percent = data;
    })
    .catch((err) => {
    alert("Error accesssing Storage")
    })
  }
}

