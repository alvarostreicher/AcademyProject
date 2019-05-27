import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { MiniaturePostComponent } from './components/miniature-post/miniature-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FilterBarComponent,
    MiniaturePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
