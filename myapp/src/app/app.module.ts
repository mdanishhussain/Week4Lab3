import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'about-us',
        component: AboutusComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
