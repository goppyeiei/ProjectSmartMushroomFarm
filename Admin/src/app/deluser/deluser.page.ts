import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-deluser',
  templateUrl: './deluser.page.html',
  styleUrls: ['./deluser.page.scss'],
})
export class DeluserPage implements OnInit {
  data: any = []
  user_id: any
  timer:any
  constructor(private http: HttpClient,private router: Router,public alertController: AlertController) { }

  ngOnInit() {
    this.fetchData();
    this.timer = setInterval(() => {
      this.fetchData();

    }, 1000);
  }
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
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
  async deluser(user_id,username) {
      const alert = await this.alertController.create({
        header: 'Warning!',
        message: `Do you want to delete ${username} ?`,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
            }
          }, {
            text: 'Okay',
            handler: () => {
              this.http.get(`http://139.59.249.192/deluser/`+user_id).subscribe();
            }
          }
        ]
      });
      await alert.present();
    }

  back(){
    this.router.navigate(['/'])
  }

}
