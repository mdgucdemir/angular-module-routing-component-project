import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// loadChildren = lazyLoading

const routes: Routes = [
  {
    path: 'placeholders',
    loadChildren: () =>
      import('./placeholders/placeholders-routing.module').then(
        (m) => m.PlaceholdersRoutingModule
      ),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables-routing.module').then(
        (m) => m.TablesRoutingModule
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
