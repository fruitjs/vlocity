import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/module/header/header.component';
import { SearchComponent } from './core/module/header/search/search.component';
import { ProfileComponent } from './core/module/header/profile/profile.component';
import { NavigationComponent } from './core/module/sidebar/navigation/navigation.component';
import { DetailsComponent } from './core/module/main/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ProfileComponent,
    NavigationComponent,
    DetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
