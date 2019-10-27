import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrunkquoteComponent } from './drunkquote/drunkquote.component';
import { DrunkquoteDetailComponent } from './drunkquote-detail/drunkquote-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { DrunkquoteFormComponent } from './drunkquote-form/drunkquote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DrunkquoteComponent,
    DrunkquoteDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    DrunkquoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
