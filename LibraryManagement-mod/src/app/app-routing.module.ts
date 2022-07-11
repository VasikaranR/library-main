import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthGuard } from './auth.guard';
import { BuyComponent } from './buy/buy.component';
import { HeaderComponent } from './header/header.component';
import { LibraryDashComponent } from './library-dash/library-dash.component';
import { LoginComponent } from './login/login.component';

import { UserComponent } from './user/user.component';

const routes: Routes = [
{path:'',redirectTo:'user',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'dashboard',component:LibraryDashComponent,canActivate:[AuthGuard]},
 {path:'user',component:UserComponent,canActivate:[AuthGuard]},
 {path:'buy/:id',component:BuyComponent,canActivate:[AuthGuard]},
 {path:'addbook',component:AddBookComponent,canActivate:[AuthGuard]},
 {path:'update-addbook/:_id',component:AddBookComponent,canActivate:[AuthGuard]},
 {path:'home',component:HeaderComponent,canActivate:[AuthGuard]},
 {path:'**',component:LoginComponent,canActivate:[AuthGuard]}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
