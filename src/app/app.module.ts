import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideFilterBarComponent } from './side-filter-bar/side-filter-bar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HttpClientModule } from '@angular/common/http';
import { CardDesignOneComponent } from './card-designs/card-design-one/card-design-one.component';

@NgModule({
  declarations: [
    AppComponent,
    SideFilterBarComponent,
    HomeContentComponent,
    CardDesignOneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
