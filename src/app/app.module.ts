import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { QuestionComponent } from './components/question/question.component';
import { AboutComponent } from './components/about/about.component';

import {QuestionService} from './services/question.service';
import {HttpClientModule} from '@angular/common/http';
import {QuestionResolver} from './services/question.resolver';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    // RouterModule,
    AppRoutingModule
  ],
  providers: [
    QuestionService,
    QuestionResolver
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
