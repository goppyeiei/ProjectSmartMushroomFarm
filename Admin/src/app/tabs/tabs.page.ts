import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController, LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  userID;
  username;
  constructor(private storage: Storage,private navCtrl: NavController) {}
  async ngOnInit() {
    await this.storage.create();
    this.getUserData();
  }
  async getUserData() {
    const data = await this.storage.get('userData');
    const pareData = JSON.parse(data)
    console.log('data',pareData)
    if (data != null) {
      console.log('get', this.username)
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
