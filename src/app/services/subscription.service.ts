import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private isMonthly = new BehaviorSubject<boolean>(true); //default is monthly
  isMonthly$ = this.isMonthly.asObservable();

  toggleSubscription(isMonthly: boolean) {
    this.isMonthly.next(!this.isMonthly.value);
  }

  setSubscrioptionType(isMonthly: boolean) {
    this.isMonthly.next(isMonthly);
  }
}