import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { ChooseGameComponent } from './chooseGame/chooseGame.component';
import { MixedLettersGameComponent } from './mixed-letters-game/mixed-letters-game.component';
import { MachingGameComponent } from './maching-game/maching-game.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path: "", component: CategoriesListComponent},
    {path: "let's_play", component: ChooseGameComponent},
    {path: "category/:id", component: CategoryFormComponent},
    {path: "newcategory", component: CategoryFormComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "help", component: HelpComponent},
    {path: "mixedlettersgame:id", component: MixedLettersGameComponent},
    {path: "machinggame/:id", component: MachingGameComponent},
];
