import { Component, OnInit } from '@angular/core';
import { Plan } from '../../models/plan.model';
import { PlanService } from '../../services/plan.service';
import { SubscriptionService } from '../../services/subscription.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent implements OnInit {
  plans: Plan[] = [];
  isMonthlyView: boolean = true;
  constructor(
    private planService: PlanService,
    private subscriptionService: SubscriptionService
  ) { }
  ngOnInit() {
    this.subscriptionService.isMonthly$.subscribe(isMonthly => {
      this.isMonthlyView = isMonthly;
      this.loadPlans();
    })
  }
  loadPlans() {
    this.plans = this.planService.getPlans(this.isMonthlyView);
  }
}
