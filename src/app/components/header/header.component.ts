import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  email: Promise<any> | undefined;
  ngOnInit(): void {
    this.emailAsync();
  }

  emailAsync(){
    this.auth.getUser().subscribe((resp: any) => {
      this.email = new Promise((resolver, reject) => {
        resolver(resp.email);
        reject('Usuario no registrado');
      })
    })
  }

  logOut(){
    this.auth.logOut();
  }

}
