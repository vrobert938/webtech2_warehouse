import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  feedbackMessage: string = '';

  user: User = new User();

  constructor(private httpService: HttpService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.user);  
    if (this.form.invalid) {
      console.log('invalid');
      alert('invalidform')
      return;
    }

    this.httpService.register(this.user).subscribe(
      (res) => {
        console.log(res);
        // Check the response and display feedback message
        if (res.token) {
          this.navigateToGetItemsPage();          
        } else {
          console.log('Registration failed');
          this.feedbackMessage = 'Registration failed: '+ res.statusText;
        }
      },
      (error) => {
        console.log(error);
        // Handle the error and display an error message to the user
      }
    );
    }

  navigateToLoginPage(){
    this.router.navigate(['login']);
  }
  navigateToGetItemsPage(){
    this.router.navigate(['getItems']);
  }
}
