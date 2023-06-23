import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    password: new FormControl(null, Validators.required),
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
  });

  user: User = new User();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.user);
    if (this.form.invalid) {
      console.log('invalid')
      return;
    }
    return this.httpService.register(this.user).subscribe( res =>{
      console.log(res);
    });
  }

}
