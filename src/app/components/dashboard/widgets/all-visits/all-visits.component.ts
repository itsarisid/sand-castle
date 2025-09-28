import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

import { cardToggleOptions2 } from '../../../../shared/data/common';
import { allVisitsChart } from '../../../../shared/data/widgets/general';
import { CardComponent } from '../../../../shared/components/ui/card/card.component';

@Component({
  selector: 'app-all-visits',
  imports: [NgApexchartsModule, CardComponent],
  templateUrl: './all-visits.component.html',
  styleUrl: './all-visits.component.scss'
})

export class AllVisitsComponent {

  public allVisitsChart = allVisitsChart;
  public cardToggleOption = cardToggleOptions2;

}
