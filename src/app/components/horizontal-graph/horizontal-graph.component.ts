import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-horizontal-graph',
    templateUrl: './horizontal-graph.component.html',
    styleUrls: ['./horizontal-graph.component.scss']
})
export class HorizontalGraphComponent implements OnInit {

    results: any[] = [
        {
          "name": "Germany",
          "value": 8940000
        },
        {
          "name": "USA",
          "value": 5000000
        },
        {
          "name": "France",
          "value": 7200000
        }
      ];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = true;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Games';
    showYAxisLabel = true;
    yAxisLabel = 'Votes';

    colorScheme = 'nightLights';

    constructor() {}

    onSelect(event) {
        console.log(event);
    }

    ngOnInit() {
    }

}
