import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-horizontal-graph',
    templateUrl: './horizontal-graph.component.html',
    styleUrls: ['./horizontal-graph.component.scss']
})
export class HorizontalGraphComponent implements OnInit, OnDestroy {

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
        },
        {
            "name": "Venezuela",
            "value": 1
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

    intervalo;

    constructor() {
        //console.log( Math.round(Math.random() * 500));

        this.intervalo = setInterval(() => {
            console.log('TICK')

            const allResults = [...this.results];

            for(let i in allResults) {
                allResults[i].value = Math.round(Math.random() * 500)
            }

            this.results = allResults;

            clearInterval()

        }, 1500)
    }

    onSelect(event) {
        console.log(event);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        clearInterval( this.intervalo )
    }

}
