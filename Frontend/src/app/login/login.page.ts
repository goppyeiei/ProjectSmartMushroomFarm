import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: String
  password: String
  isError: boolean = false

  constructor(private http: HttpClient, private storage: Storage, private router: Router) { }

  async ngOnInit() {
    this.storage.create()
  }

  login() {
    this.http.get(`http://139.59.249.192/login/${this.username}/${this.password}`).subscribe(async response => {
      if (response[0].status === 200) {
        this.isError = false
        await this.storage.set('userData', JSON.stringify(response[0]));
        setTimeout(()=>{
          this.router.navigate(['home'])
        }, 500);

      } else {
        this.isError = true
      }
    }, error => {
      this.isError = true
    })
  }



}
