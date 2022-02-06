import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-la1p17',
  templateUrl: './la1p17.component.html'
})
export class La1p17Component implements OnInit {

  constructor(private auth: AuthService) { }
  @Input('libroA1')
  libroA1!: Observable<any>;
  @Input('email') email!: Promise<string>;
  libro: any = "";

  ngOnInit(): void {
      setTimeout(() => {
        this.libroA1.subscribe(resp => {
          if(resp.payload.data()){
            this.libro = resp.payload.data();
          }
          else{
            this.libro = {};
          }

        }, error => {
          console.log(error);
        })
      }, 3000);
  }

  guardarInfo(){
    this.email.then(resp => {
      this.auth.guardarDatos(resp,'bookA1',this.libro).then(() => {
       // console.log(resp);
      }).catch(()=> {
        console.log("error");
      })
    })
  }
}
