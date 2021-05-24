import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageroutingModule } from './page/pagerouting.module';
import { AuthroutingModule } from './auth/authrouting.module';



const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/main' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PageroutingModule, AuthroutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
