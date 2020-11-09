import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ion-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    console.log('login component init');
  }

}
