/* Name: Aaron Weiss
 * Course: CSC-415
 * Semester: Fall 2017
 * Instructor: Dr. Pulimood
 * Project Name: TCNJ-Speaks
 * Project Description: Bring awareness to community about relevant social justice issues.
 * File Name: statistics.component.ts
 * File Description: Defines the statistic component of the application.
 * Last Modified: 11/10/17 (m/d/y)
*/

import { Component, OnInit } from '@angular/core';
//Import HttpClient for API access
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  issues;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	//Gather data from backend on issues
  	this.http.get('http://localhost:3000/issues')
	  .subscribe(data => { this.issues = data});
  }
}
