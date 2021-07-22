import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBasicComponent } from './home/comp/home-basic/home-basic.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainListComponent } from './main/main-list/main-list.component';

const routes: Routes = [
  {path: 'rooms' , component: HomeBasicComponent},
  {path: 'settings' , component: SettingsComponent},
  {path: 'run' , component: MainListComponent},

  {path: '', redirectTo: '/rooms', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
