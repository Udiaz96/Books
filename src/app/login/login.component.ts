import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  });


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);

    this.authService.authUser(this.loginForm.value).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
