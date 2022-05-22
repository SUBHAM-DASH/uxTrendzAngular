import { TemplateReferranceComponent } from './components/template-referrance/template-referrance.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';

const routes: Routes = [
  { path: '', component: EventBindingComponent },
  { path: 'templaterefer', component: TemplateReferranceComponent },
  { path: 'twowaybinding', component: TwowaybindingComponent },
  { path: 'ngswitch', component: NgSwitchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
