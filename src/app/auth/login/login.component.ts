import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  printUser(event) {
    console.log(event);

    this.router.navigateByUrl('/main/locations');
    localStorage.setItem('user', event.email);

  }

  printError(event) {
    console.error(event);
    this.router.navigateByUrl('/login');
  }

}
