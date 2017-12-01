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

import { Component, OnInit } from '@angular/core';
//Import HttpClient for API access
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  submitted = false;
  constructor(private http: HttpClient, public stateService: StateService) { }
  
  onSubmit (form: any) {
  	console.log(form);
  	const req = this.http.post('http://localhost:3000/issues', {
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
