import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { AuthServiceService } from  './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    GalleryComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    NewArticleComponent,
    ViewArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'about-us',
        component: AboutusComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'navbar',
        component: NavbarComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'new-article',
        component: NewArticleComponent
      },
      {
        path: 'view-article',
        component: ViewArticleComponent
      }
    ])
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
