import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  name = 'Angular   6';
  canvas: any;
  ctx: any;
  @ViewChild('mychart',{static:true}) mychart;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    this.mychart = new Chart(this.ctx, {
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'My First dataset',
              // backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45]
          }]
      },
  
      // Configuration options go here
      options: {}
    })
  }
}
