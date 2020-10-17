import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { AuthProvider } from '../../../core/services/auth.provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authProvider: AuthProvider,
  ) {
  }
  public form = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  public login(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.authProvider.login(form.controls['email'].value, form.controls['password'].value)
      .subscribe(null, err => {
        alert('Sorry, I love you');
      });
  }

}
