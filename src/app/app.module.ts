import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import{ MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NgxElectronModule } from 'ngx-electron';
import { RouterModule, Routes } from '@angular/router';
import { LoadComponent } from './load/load.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { Moment } from 'moment';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';





const appRoutes:Routes = [
  {
    path:'',
    component: LoadComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'main',
    component: MainComponent
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    LoadComponent,
    MainFooterComponent,
    MainHeaderComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,   
    BrowserAnimationsModule,
    NgxElectronModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
