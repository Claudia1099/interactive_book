import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private auth: AuthService, private router: Router) { 
  }

  email: Promise<any> | undefined;
  ngOnInit(): void {
    this.emailAsync();
    $(document).ready(function(){
      $("#sticker").sticky({topSpacing:0});
    });
  }

  emailAsync(){
    this.auth.getUser().subscribe((resp: any) => {
      this.email = new Promise((resolver, reject) => {
        resolver(resp?.email);
        reject('Usuario no registrado');
      })
    })
  }

  logOut(){
    this.auth.logOut();
    this.router.navigateByUrl('');
  }

}
