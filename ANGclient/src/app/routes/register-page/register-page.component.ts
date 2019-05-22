import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: []
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) { }

  private registerUser = ( userData: UserModel ) => {
    this.authService.register( userData )
                    .then( apiResponse => console.log(apiResponse) )
                    .catch( apiResponse => console.error(apiResponse) );
  }

  ngOnInit() {
  }

}
