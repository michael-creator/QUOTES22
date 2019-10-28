import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrunkquoteComponent } from './drunkquote/drunkquote.component';
import { DrunkquoteDetailComponent } from './drunkquote-detail/drunkquote-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { DrunkquoteFormComponent } from './drunkquote-form/drunkquote-form.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    DrunkquoteComponent,
    DrunkquoteDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    DrunkquoteFormComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
