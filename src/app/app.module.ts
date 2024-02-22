import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { TablesModule } from './tables/tables.module';
import { PopupsModule } from './popups/popups.module';
import { PlaceholdersModule } from './placeholders/placeholders.module';
import { ListsModule } from './lists/lists.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// lazy loading duzgun yapmak icin diger modulleri burada import kismina EKLEMIYORUZ
// bu projede page not found un duzgun bir sekilde calismasini istiyor isen AppRoutingModule en sona yaz
