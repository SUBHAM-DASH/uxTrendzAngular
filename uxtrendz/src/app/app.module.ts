import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TemplateReferranceComponent } from './components/template-referrance/template-referrance.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    TemplateReferranceComponent,
    TwowaybindingComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
