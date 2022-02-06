import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-l3p21',
  templateUrl: './l3p21.component.html',
  styles: [
  ]
})
export class L3p21Component implements OnInit {

  constructor(private auth: AuthService) { }
  @Input('libro3')
  libro3!: Observable<any>;
  @Input('email') email!: Promise<string>;
  libro: any = "";

  ngOnInit(): void {
      setTimeout(() => {
        this.libro3.subscribe(resp => {
          this.libro = resp.payload.data();
          console.log(this.libro);
        })
      }, 3000);
  }

  guardarInfo(){
    this.email.then(resp => {
      this.auth.guardarDatos(resp,'book3',this.libro).then(() => {
      }).catch(()=> {
        console.log("error");
      })
    })
  }

}
