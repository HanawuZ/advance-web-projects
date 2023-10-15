import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/user/home/home.component';
import { ListmenuComponent } from './pages/user/listmenu/listmenu.component';
import { CheckbillComponent } from './pages/user/checkbill/checkbill.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { MenuComponent } from './pages/admin/menu/menu.component';
import { AddmenuComponent } from './pages/admin/addmenu/addmenu.component';
import { StatustableComponent } from './pages/admin/statustable/statustable.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingupComponent } from './pages/admin/singup/singup.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminCheckbillComponent } from './pages/admin/admincheckbill/admincheckbill.component';
import { EditmenuComponent } from './pages/admin/editmenu/editmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListmenuComponent,
    CheckbillComponent,
    LoginComponent,
    MenuComponent,
    AddmenuComponent,
    StatustableComponent,
    NavbarComponent,
    SingupComponent,
    ProfileComponent,
AdminCheckbillComponent,
EditmenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}