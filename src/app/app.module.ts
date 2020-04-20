import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { CreateComponent } from './create/create.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports:      [ BrowserModule, FormsModule , MatToolbarModule, MatIconModule, MatMenuModule, MatDividerModule],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FeedComponent, CreateComponent, ProfileCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
