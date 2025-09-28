import { Component } from '@angular/core';
import { WelcomeCardComponent } from "./widgets/welcome-card/welcome-card.component";
import { DetailsComponent } from './widgets/details/details.component';
import { details } from './../../shared/data/dashboard/default';
@Component({
  selector: 'app-dashboard',
  imports: [WelcomeCardComponent, DetailsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
 
  public details = details;
}
