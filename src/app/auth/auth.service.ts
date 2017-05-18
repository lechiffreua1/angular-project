import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  token: string = null;

  constructor(private router: Router) {}

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                this.token = token;
                this.router.navigate(['/recipes']);
              }
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                this.token = token;
                this.router.navigate(['/recipes']);
              }
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );

    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  signOut() {
    firebase.auth().signOut();
    this.token = null;
  }
}
