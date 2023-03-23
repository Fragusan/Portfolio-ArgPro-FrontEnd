import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

//import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'in', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
