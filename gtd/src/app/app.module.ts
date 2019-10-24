import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './global-components/navbar-component/navbar-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule, MatTooltipModule, MatGridListModule, MatFormFieldModule } from '@angular/material';
import { SplashPageComponentComponent } from './global-components/splash-page-component/splash-page-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    SplashPageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatGridListModule,
    MatFormFieldModule,
    MatMenuModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
