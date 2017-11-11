import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { StatisticsComponent } from './statistics/statistics.component';

/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
export const appState = {
  name: 'app',
  redirectTo: 'home',
  component: AppComponent,
};

/**
 * This is the home screen.
 *
 */
export const homeState = {
  parent: 'app',
  name: 'home',
  url: '/home',
  component: HomeComponent,
};

export const reportState = {
  parent: 'app',
  name: 'report',
  url: '/report',
  component: ReportComponent,
};

export const statisticsState = {
  parent: 'app',
  name: 'statistics',
  url: '/statistics',
  component: StatisticsComponent,
};

export const APP_STATES = [
  appState,
  homeState,
  reportState,
  statisticsState
];