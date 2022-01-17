import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aesapp';
  // items: Observable<any>;
  // constructor(firestore: AngularFirestore) {

  // this.items = firestore.doc('claudia.benavidesvargas@gmail.com/books').snapshotChanges().pipe(map((action: any) => {
  //   const data: any = action.payload.data();
  //   const id = action.payload.id;
  //   return [{id, ...data}]
  // }));
  // this.items.subscribe(resp => {
  //   console.log(resp);
  // })
  // }
}
