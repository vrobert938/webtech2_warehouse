import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  user: User = new User();

  constructor(private httpService: HttpService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.user)
    if (this.form.invalid) {
      console.log('invalid')
      return;
    }
    
    this.authService
      .login(this.user)
      .subscribe((response) => {
          this.router.navigate(['warehouse']);
      });

  }

  navigateToRegisterPage(){
    this.router.navigate(['register']);
  }

}
