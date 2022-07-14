import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-delfarm2',
  templateUrl: './delfarm2.page.html',
  styleUrls: ['./delfarm2.page.scss'],
})
export class Delfarm2Page implements OnInit {
  user_id;
  data:any=[];
  timer;
  constructor(private router: Router,private http:HttpClient,private activatedRoute: ActivatedRoute,public alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('user_id')) {
        this.router.navigate(['/']);
      }
      this.user_id = paramMap.get('user_id').toString();
    });
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
    this.http.get(`http://139.59.249.192/read/${this.user_id}`).subscribe(async res => {
      console.log("abc", res);
      this.data = res
    },
      err => {
        console.log("res  ==>", err);
      }
    );
  }

  async delfarm(farm_id,farm_name) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: `Do you want to delete ${farm_name} ?`,
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
            this.http.get(`http://139.59.249.192/delfarm/`+farm_id).subscribe();
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
