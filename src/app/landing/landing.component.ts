import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

	email;
	name;

	  myForm = new FormGroup({
    name : new FormControl(null, Validators.required),
    email : new FormControl(null, Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  submit(){
  	console.log(this.email + this.name);
  }

}
