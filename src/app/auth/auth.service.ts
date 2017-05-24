import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

/*
Ths service will be used for creating users signing users. In this we are using firebase
so we will use firebase sdk for creating and authorization. If you some other back-end
then you can use default http service. Using firebase a token will automatically be stored when we call signin method
While in other backend you have to manually save the token and send it to with every request.
*/

@Injectable()

export class AuthService {

  token: string = '';

  constructor(private router: Router) {

  }

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    )
  }

  signInUser(email: string, password: string) {
    // Here then is used for handling success block and error for handling error case
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      // response => console.log(response)
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken().then(
          (token: string) => this.token = token
        )
      }
    ).catch(
      error => console.log(error)
    );
  }

  getToken() {
    firebase.auth().currentUser.getToken().then(
      (token: string) => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }
}
