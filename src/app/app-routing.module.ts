import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeBasicComponent} from './home/comp/home-basic/home-basic.component';
import {SettingsComponent} from './settings/settings.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MainListComponent} from './main/main-list/main-list.component';
import {NavAuthGuard} from './header/service/nav-auth.guard';

const routes: Routes = [
  {path: 'home' , component: HomeBasicComponent},
  {path: 'settings' , component: SettingsComponent, canActivate: [NavAuthGuard]},
  {path: 'main' , component: MainListComponent, canActivate: [NavAuthGuard]},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
