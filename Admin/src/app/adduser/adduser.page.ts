import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {
  timer:any
  data:any =[]
  username: String
  password: String
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }

  adduser(){
    this.http.get(`http://139.59.249.192/register/${this.username}/${this.password}`,{responseType:'text'}).subscribe(async res => {
      console.log("res", res);
      this.data = res
    },
      err => {
        console.log("res  ==>", err);
      }
    );
  }
  back(){
    this.router.navigate(['/'])
  }
}
