import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // loadedFeature = 'recipe';
  //
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

  ngOnInit() {
    // Configuring firebase
    firebase.initializeApp({
      // Copied from firebase web setup
      apiKey: "AIzaSyBIyjaQ3t-RKk25b1vMP7M4GPrxwHTcnng",
      authDomain: "recipe-demo-36d55.firebaseapp.com",
    });
  }
}
