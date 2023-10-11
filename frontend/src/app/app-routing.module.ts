import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListmenuComponent } from './pages/user/listmenu/listmenu.component';
import { CheckbillComponent } from './pages/user/checkbill/checkbill.component';
import { HomeComponent } from './pages/user/home/home.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { MenuComponent } from './pages/admin/menu/menu.component';
import { AddmenuComponent } from './pages/admin/addmenu/addmenu.component';
import { StatustableComponent } from './pages/admin/statustable/statustable.component';
import { AdminCheckbillComponent } from './pages/admin/admincheckbill/admincheckbill.component';
import { SingupComponent } from './pages/admin/singup/singup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listmenu', component: ListmenuComponent },
  { path: 'checkbill', component: CheckbillComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'addmenu', component: AddmenuComponent },
  { path: 'statustable', component: StatustableComponent },
  { path: 'admincheckbill', component: AdminCheckbillComponent },
  { path: 'singup', component: SingupComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
