/* Name: Aaron Weiss
 * Course: CSC-415
 * Semester: Fall 2017
 * Instructor: Dr. Pulimood
 * Project Name: TCNJ-Speaks
 * Project Description: Bring awareness to community about relevant social justice issues.
 * File Name: app.module.ts
 * File Description: Declares components of the system and imports outside dependencies.
 * Last Modified: 11/10/17 (m/d/y)
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Import Font-Awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//Import UI-Router
import { UIRouterModule, UIView } from '@uirouter/angular';
import { APP_STATES } from './app.states';
import { routerConfigFn } from './router.config';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { StatisticsComponent } from './statistics/statistics.component';
// Import HttpClientModule for Rails server communication
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportComponent,
    StatisticsComponent
  ],
  imports: [
  	UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      otherwise: { state: 'home' },
      config: routerConfigFn,
    }),
    BrowserModule,
    HttpClientModule, //Must be defined after BrowserModule
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [UIView]
})
export class AppModule { }


