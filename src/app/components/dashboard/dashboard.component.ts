import { Component } from '@angular/core';
import { WelcomeCardComponent } from "./widgets/welcome-card/welcome-card.component";
import { CardComponent } from "../../shared/components/ui/card/card.component";
@Component({
  selector: 'app-dashboard',
  imports: [WelcomeCardComponent,CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
