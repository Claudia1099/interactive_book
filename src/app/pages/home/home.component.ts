import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: FormGroup = new FormGroup({});
  user: Observable<any> | undefined;
  email: Promise<any> | undefined;
  token: string = "";
  constructor(private fb: FormBuilder,
              private auth: AuthService) { 
    this.crearFormulario();
    this.traerEmailAsync();
  }

  traerEmailAsync(){
    this.auth.user.subscribe((resp: any) => {
      this.email = new Promise((resolver, reject) => {
        resolver(resp.email);
        reject('Usuario no registrado')
      });
    });
  }

  crearFormulario(){
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get User(){
    return this.auth.getUser();
  }

  get Email(){
    return this.login.get('email')?.invalid && (this.login.get('email')?.dirty || this.login.get('email')?.touched);
  }

  get Password(){
    return this.login.get('password')?.invalid && (this.login.get('password')?.dirty || this.login.get('password')?.touched);
  }

  ngOnInit(): void {
  }

  iniciarSesion(){
    if(this.login.invalid){
      return Object.values( this.login.controls ).forEach(control => {
        control.markAsTouched();
      })
    }
    this.auth.autenticar(this.login.get('email')?.value, this.login.get('password')?.value);
  }
  logOut(){
    this.auth.logOut();
  }
}
