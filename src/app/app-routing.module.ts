import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './module/home/home-page/home-page.component';

const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
