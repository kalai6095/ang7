import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  h1Style: any = false;
  users: object={};

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data=>{
      this.users=data;
    })
  }

  buttonclick() {
    alert("button click");
    this.h1Style = true;
    this.data.firstClick();
    this.data.getUsers().subscribe(data=>{
      this.users=data;
    })
  }

}
