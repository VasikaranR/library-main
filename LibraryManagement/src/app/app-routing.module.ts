import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
// import { AuthGuard } from './auth.guard';
import { BuyComponent } from './buy/buy.component';
import { HeaderComponent } from './header/header.component';
import { LibraryDashComponent } from './library-dash/library-dash.component';
import { LoginComponent } from './login/login.component';

import { UserComponent } from './user/user.component';

const routes: Routes = [
{path:'',redirectTo:'user',pathMatch:'full'},
//  {path:'login',redirectTo:'user',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'dashboard',component:LibraryDashComponent},
 {path:'user',component:UserComponent},
 {path:'buy/:id',component:BuyComponent},
 {path:'addbook',component:AddBookComponent},
 {path:'update-addbook/:id',component:AddBookComponent},
 {path:'home',component:HeaderComponent},
 {path:'**',component:LoginComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
