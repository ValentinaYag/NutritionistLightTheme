import { Injectable } from '@angular/core';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private plans: Plan[] = [
    {
      name: "Basic",
      monthlyPrice: 49,
      description: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
      isMonthly: true,
      discountRate: 0.5
    },
    {
      name: "Pro",
      monthlyPrice: 79,
      description: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
      isMonthly: true,
      discountRate: 0.5
    },
    {
      name: "Enterprise",
      monthlyPrice: 99,
      description: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
      isMonthly: true,
      discountRate: 0.5
    }

  ];
  getPlans(isMonthly: boolean): any[] {
    return this.plans.map(plan => ({
      ...plan,
      price: isMonthly
        ? plan.monthlyPrice
        : plan.monthlyPrice * 12 * (1 - plan.discountRate)
    }));
  }
}