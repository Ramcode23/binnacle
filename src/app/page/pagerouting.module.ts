
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';




const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    loadChildren: () => import('./childrouter.module').then(m => m.ChildrouterModule), canActivate: [LoggedInGuard]

  },


];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageroutingModule { }
