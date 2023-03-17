import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { ArgProLogoComponent } from './components/arg-pro-logo/arg-pro-logo.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { BackgroundComponent } from './components/background/background.component';
import { PicProfileComponent } from './components/pic-profile/pic-profile.component';
import { ConsolComponent } from './components/consol/consol.component';
import { CodeComponent } from './components/code/code.component';
import { WindowComponent } from './components/window/window.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArgProLogoComponent,
    ContactComponent,
    BannerComponent,
    AboutmeComponent,
    BackgroundComponent,
    PicProfileComponent,
    ConsolComponent,
    CodeComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
