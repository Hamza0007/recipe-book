import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../auth/auth-guard.service";
import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";

@NgModule({
  imports: [
    RouterModule.forChild([  // Because you are in child module every other module beside root module is child module.
      {
        path: '',
        component: RecipesComponent,
        children: [
          { path: '', component: RecipeStartComponent },
          { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
          { path: ':id', component: RecipeDetailComponent },
          { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthGuard] // as this is used only in this module.
})

export class RecipesRoutingModule {

}
