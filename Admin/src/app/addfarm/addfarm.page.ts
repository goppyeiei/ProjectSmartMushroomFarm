import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-addfarm',
  templateUrl: './addfarm.page.html',
  styleUrls: ['./addfarm.page.scss'],
})
export class AddfarmPage implements OnInit {
  data:any=[]
  constructor(private http: HttpClient,private router: Router,public alertController: AlertController,private navCtrl: NavController) { }

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.http.get(`http://139.59.249.192/alluser`).subscribe(async res => {
      console.log("abc", res);
      this.data = res
    },
      err => {
        console.log("res  ==>", err);
      }
    );
  }
  choose(user_id) {
    this.navCtrl.navigateForward("/addfarm2/" + user_id)
  }
  back(){
    this.router.navigate(['/'])
  }

}
