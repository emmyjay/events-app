import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { MyRsvpsComponent } from './pages/my-rsvps/my-rsvps.component';

@NgModule({
declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    MyRsvpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
