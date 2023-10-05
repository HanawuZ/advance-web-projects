import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/user/home/home.component';
import { ListmenuComponent } from './pages/user/listmenu/listmenu.component';
import { CheckbillComponent } from './pages/user/checkbill/checkbill.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { MenuComponent } from './pages/admin/menu/menu.component';
import { AddmenuComponent } from './pages/admin/addmenu/addmenu.component';
import { StatustableComponent } from './pages/admin/statustable/statustable.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
