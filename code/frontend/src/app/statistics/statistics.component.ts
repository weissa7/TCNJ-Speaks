/* Name: Aaron Weiss
 * Course: CSC-415
 * Semester: Fall 2017
 * Instructor: Dr. Pulimood
 * Project Name: TCNJ-Speaks
 * Project Description: Bring awareness to community about relevant social justice issues.
 * File Name: statistics.component.ts
 * File Description: Defines the statistic component of the application.
 * Last Modified: 12/01/17 (m/d/y)
*/

/* Created by Aaron Weiss. */

import { Component, OnInit} from '@angular/core';
//Import HttpClient for API access
import { HttpClient } from '@angular/common/http';
//Chart for statistics display
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  //JSON object to hold all issues in the system
  issues;

  //Hide the chart until true
  show: boolean = false;

  constructor(private http: HttpClient) {
    //Gather data from backend on issues
    this.pullNewData();

    //Delayed call to update chart. Needed to populate chart correctly.
    setTimeout(()=>{this.show = true, this.updateChart()}, 240);
  }

  ngOnInit() { }

  /*
   * Grab current JSON data from API.
   */
  pullNewData() {
    this.http.get('http://csc415-server23.hpc.tcnj.edu:3000/issues')
    .subscribe(data => { this.issues = data});
  }

  /*
   * POST an upvote.
   */
  upvote(issue) {
  	console.log("Upvoting", issue);
  	const req = this.http.post('http://csc415-server23.hpc.tcnj.edu:3000/issues/' + issue.id + '/upvotes', issue)
      .subscribe(
        res => {
          console.log(res);
          this.pullNewData();
          setTimeout(()=>{this.show = true, this.updateChart()}, 240);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  /*
   * POST a downvote.
   */
  downvote(issue) {
  	console.log("Downvoting", issue);
  	const req = this.http.post('http://csc415-server23.hpc.tcnj.edu:3000/issues/' + issue.id + '/downvotes', issue)
      .subscribe(
        res => {
          console.log(res);
          this.pullNewData();
          setTimeout(()=>{this.show = true, this.updateChart()}, 240);
        },
        err => {
          console.log("Error occured");
        }
      );
  }


   public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 

   /*
   * Initial chart information. Cannot be left blank.
   */
  public barChartData:any[] = [
    {data: [0], label: ''},
    {data: [0], label: ''},
    {data: [0], label: ''}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  /*
   * Updates chart information.
   */
  public updateChart():void {

    let _lineChartData:Array<any> = new Array(this.issues.length);
    for (let i = 0; i < this.issues.length; i++) {
      _lineChartData[i] = {data: new Array(1), label: this.issues[i].title};    
      for (let j = 0; j < 1; j++) {
        _lineChartData[i].data[j] = this.issues[i].upvotes.length - this.issues[i].downvotes.length;
      }
    }

    this.barChartData = _lineChartData;

  }
}