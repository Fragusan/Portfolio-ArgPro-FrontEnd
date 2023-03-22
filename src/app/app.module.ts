import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { VisibilityService } from './visibility.service';

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
import { MainComponent } from './components/main/main.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { CardEducComponent } from './components/card-educ/card-educ.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WorkComponent } from './components/work/work.component';
import { GalWorkComponent } from './components/gal-work/gal-work.component';
import { CardWorkComponent } from './components/card-work/card-work.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { LoginComponent } from './components/login/login.component';
import { GalProComponent } from './components/gal-pro/gal-pro.component';
import { CarProComponent } from './components/car-pro/car-pro.component';

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
    WindowComponent,
    MainComponent,
    CertificacionesComponent,
    CardEducComponent,
    GalleryComponent,
    WorkComponent,
    GalWorkComponent,
    CardWorkComponent,
    SkillComponent,
    ProjectComponent,
    LoginComponent,
    GalProComponent,
    CarProComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VisibilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
