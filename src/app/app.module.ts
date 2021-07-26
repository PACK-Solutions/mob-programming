import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/comp/header.component';
import { HomeBasicComponent } from './home/comp/home-basic/home-basic.component';
import { MainListComponent } from './main/main-list/main-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddCollaboratorComponent } from './settings/collaborator/comp/add-collaborator/add-collaborator.component';
import { ArrayCollaboratorComponent } from './settings/collaborator/comp/array-collaborator/array-collaborator.component';
import { EditCollaboratorComponent } from './settings/collaborator/comp/edit-collaborator/edit-collaborator.component';
import { RemoveCollaboratorComponent } from './settings/collaborator/comp/remove-collaborator/remove-collaborator.component';
import { RotationCollaboratorComponent } from './settings/collaborator/comp/rotation-collaborator/rotation-collaborator.component';
import { ShuffleCollaboratorComponent } from './settings/collaborator/comp/shuffle-collaborator/shuffle-collaborator.component';
import { SettingsComponent } from './settings/settings.component';
import { AddTimerComponent } from './settings/timer/comp/add-timer/add-timer.component';
import { EditTimerComponent } from './settings/timer/comp/edit-timer/edit-timer.component';
import { PauseStartTimerComponent } from './settings/timer/comp/pause-start-timer/pause-start-timer.component';
import { ResetTimerComponent } from './settings/timer/comp/reset-timer/reset-timer.component';
import { TimerPipe } from './settings/timer/pipe/timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    AddCollaboratorComponent,
    HomeBasicComponent,
    SettingsComponent,
    ShuffleCollaboratorComponent,
    ArrayCollaboratorComponent,
    AddTimerComponent,
    EditTimerComponent,
    PauseStartTimerComponent,
    ResetTimerComponent,
    RemoveCollaboratorComponent,
    EditCollaboratorComponent,
    RotationCollaboratorComponent,
    MainListComponent,
    TimerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    MatSnackBarModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
