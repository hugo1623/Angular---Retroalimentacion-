import { Component} from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  constructor(private authService: AuthService) { }


}
