import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ValparaisoComponent} from "../app/components/valparaiso/valparaiso.component"
import {MetropolitanaComponent} from "../app/components/metropolitana/metropolitana.component"
import {HomeComponent} from "../app/components/home/home.component"
const routes: Routes = [
  {path:"",component: HomeComponent},
  {path: "valparaiso",component: ValparaisoComponent},
  {path: "metropolitana",component: MetropolitanaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
