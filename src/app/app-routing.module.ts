import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@components/home/home.component';
import { IComponent } from '@components/i/i.component';
import { CreditsComponent } from '@components/credits/credits.component'

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "I",
    component: IComponent,
  },
  {
    path: 'Credits',
    component: CreditsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }