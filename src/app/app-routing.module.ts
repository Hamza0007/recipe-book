import {NgModule} from "@angular/core";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./core/home/home.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        /*redirectTo: '/recipes',
        pathMatch: 'full'*/
        component: HomeComponent
      },
      {
        path: 'recipes',
        loadChildren: './recipes/recipes.module#RecipesModule' // for lazy loading(load a component module only when its path is entered else not)
      },
      {
        path: 'shopping-list',
        component: ShoppingListComponent
      }
    ], {preloadingStrategy: PreloadAllModules}) // it preloads all your lazy loaded modules after app has been loaded
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
