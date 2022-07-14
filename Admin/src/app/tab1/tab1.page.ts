import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  userID;
  username;
  constructor(private route: Router,private storage: Storage,private navCtrl: NavController) {}
  async ngOnInit() {
    await this.getUserData();
  }
  adduser() {
    this.route.navigate(['/adduser']);
  };
  deluser() {
    this.route.navigate(['/deluser']);
  }
  async getUserData() {
    const data = await this.storage.get('userData');
    const pareData = JSON.parse(data)
    console.log('data',pareData)
    if (data != null) {
      console.log('get', this.userID)
      this.userID = pareData.user_id
      this.username = pareData.username
    }
    if (data == null) {
      console.log('no', this.username)
      this.navCtrl.navigateForward("/login")
    }
  }
  logout() {
    this.storage.clear()
    this.navCtrl.navigateForward("/login")
  }
}
