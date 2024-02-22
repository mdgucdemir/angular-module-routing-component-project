import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';

const routes: Routes = [{ path: '', component: PlaceholdersHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceholdersRoutingModule {}

/* 
    lazy Loading islemi yaptigimiz icin;
    
        url i su sekilde vermemiz gerekiyor
          http://localhost:4200/placeholders/placeholders
        bunu engellemeliyiz

    { path: 'placeholders', component: PlaceholdersHomeComponent }

    yerine 

    { path: '', component: PlaceholdersHomeComponent },

    seklinde kullanmaliyiz    
  */
