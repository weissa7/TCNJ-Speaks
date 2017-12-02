/* Name: Aaron Weiss
 * Course: CSC-415
 * Semester: Fall 2017
 * Instructor: Dr. Pulimood
 * Project Name: TCNJ-Speaks
 * Project Description: Bring awareness to community about relevant social justice issues.
 * File Name: report.component.ts
 * File Description: Defines the report component of the application.
 * Last Modified: 11/10/17 (m/d/y)
*/

/* Created by Aaron Weiss. */

import { Component, OnInit } from '@angular/core';
//Import HttpClient for API access
import { HttpClient } from '@angular/common/http';
//Forms for report submission
import { FormsModule } from '@angular/forms';
//Service to force page change.
import { StateService } from '@uirouter/core';

//Import environment variables -- for changing between development (local) and production (VM)
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  submitted = false;
  constructor(private http: HttpClient, public stateService: StateService) { }

  /*
   * POST an issue.
   */
  onSubmit (form: any) {
  	console.log(form);
  	const req = this.http.post(environment.API_IP + 'issues', {
      title: form.title,
      description: form.description
    })
      .subscribe(
        res => {
          console.log(res);
          this.submitted = true;
          this.stateService.go('statistics');
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  ngOnInit() { }

}
