import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './module/home/home-page/home-page.component';
import { SerieComponent } from './module/serie/serie.component';

const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: 'movie/:id', component: SerieComponent },
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
