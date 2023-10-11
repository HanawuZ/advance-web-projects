import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListmenuComponent } from './pages/user/listmenu/listmenu.component';
import { CheckbillComponent } from './pages/user/checkbill/checkbill.component';
import { HomeComponent } from './pages/user/home/home.component';
import { LoginComponent } from './pages/admin/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listmenu', component: ListmenuComponent },
  { path: 'checkbill', component: CheckbillComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
