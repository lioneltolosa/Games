import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalGraphComponent } from './horizontal-graph/horizontal-graph.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    declarations: [
        NavbarComponent,
        HorizontalGraphComponent
    ],
    exports: [
        NavbarComponent,
        HorizontalGraphComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        NgxChartsModule
    ]
})
export class ComponentsModule { }
