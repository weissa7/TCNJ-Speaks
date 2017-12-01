/* Name: Aaron Weiss
 * Course: CSC-415
 * Semester: Fall 2017
 * Instructor: Dr. Pulimood
 * Project Name: TCNJ-Speaks
 * Project Description: Bring awareness to community about relevant social justice issues.
 * File Name: app.states.ts
 * File Description: Defines states of the application to provide routing capabilities.
 * Last Modified: 11/10/17 (m/d/y)
*/
/* Created for UI-Router capabilities. */

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