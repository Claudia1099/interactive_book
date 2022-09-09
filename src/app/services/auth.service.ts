import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  user = this.auth.user;

  autenticar(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Swal.close();
      })
      .catch(() => {
        Swal.fire('Usuario o contraseña incorrecto', '', 'error');
      });
    return '';
  }

  getUser() {
    return this.user;
  }

  logOut() {
    this.auth.signOut();
  }

  librosUsuario(email: string) {
    return this.firestore.doc(`${email}/books`).snapshotChanges();
  }
  obtenerLibro(email: string, book: string) {
    return this.firestore.doc(`${email}/${book}`).snapshotChanges();
  }

  guardarDatos(email: string, book: string, data: any) {
    return this.firestore.doc(`${email}/${book}`).set(data);
  }
  crearDoc(email: string, book: string) {
    return this.firestore.collection(email).doc(book);
  }
}
