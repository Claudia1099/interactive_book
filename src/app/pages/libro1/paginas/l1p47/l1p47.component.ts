import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-l1p47',
  templateUrl: './l1p47.component.html'
})
export class L1p47Component implements OnInit {

  constructor(private auth: AuthService) { }
  @Input('libro1')
  libro1!: Observable<any>;
  @Input('email') email!: Promise<string>;
  libro: any = "";

  ngOnInit(): void {
      setTimeout(() => {
        this.libro1.subscribe(resp => {
          this.libro = resp.payload.data();
          console.log(this.libro);
        })
      }, 3000);
  }

  guardarInfo(){
    this.email.then(resp => {
      this.auth.guardarDatos(resp,'book1',this.libro).then(() => {
      }).catch(()=> {
        console.log("error");
      })
    })
  }

}
