import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logout() {
    this.auth.logout()
  }
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
