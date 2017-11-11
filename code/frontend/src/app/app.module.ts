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
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [UIView]
})
export class AppModule { }


