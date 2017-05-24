import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule {

}
