/* Name: Aaron Weiss
 * Course: CSC-415
 * Semester: Fall 2017
 * Instructor: Dr. Pulimood
 * Project Name: TCNJ-Speaks
 * Project Description: Bring awareness to community about relevant social justice issues.
 * File Name: app.component.ts
 * File Description: Defines the parent component of the entire application.
 * Last Modified: 11/10/17 (m/d/y)
*/

import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
