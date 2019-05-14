import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


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


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit()
  {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);

    this.authService.authUser(this.loginForm.value).subscribe(
      data => {
        console.log(data);
        console.log(data[0]);
        console.log(data[0][0]);
        if(data[0][0].hasOwnProperty('NULO'))
          console.log("Vacio");
        else{
            console.log(data[0][0].idUsuarios);
            localStorage.setItem('ACCESS_TOKEN',data[0][0].idUsuarios);

            if(data[0][0].idRol === 2)
            {
              this.router.navigateByUrl('/comics');
            }else{
              this.router.navigateByUrl('/admin');
            }
          }
      }
    );
  }

  onRegiser()
  {
    this.router.navigateByUrl('/user');
  }

}
