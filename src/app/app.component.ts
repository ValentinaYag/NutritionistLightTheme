import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeviceService } from './services/device.service';
import { FeatureService } from './services/feature.service';
import { PostService } from './services/post.service';
import { TestimonialService } from './services/testimonial.service';
import { SubscriptionService } from './services/subscription.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileFooterComponent } from './components/footer/mobile-footer/mobile-footer.component';
import { FeatureComponent } from './components/feature/feature.component';
import { PostComponent } from './components/post/post.component';
import { TestimonialsContainerComponent } from './components/testimonial/testimonials-container/testimonials-container.component';
import { PlanComponent } from './components/plan/plan.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, MobileFooterComponent,
            FeatureComponent, PostComponent, PlanComponent, TestimonialsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  features: FeatureComponent[] = [];
  posts: PostComponent[] = [];
  isMonthly: boolean = true;
  isMobile: boolean = window.innerWidth < 768;
  private subscription!: Subscription;
  constructor(private featureService: FeatureService,
    private postService: PostService,
    private testimonialService: TestimonialService,
    private subscriptionService: SubscriptionService,
    private deviceService: DeviceService
  ) {
    this.isMobile = this.deviceService.isMobile();
  }
    ngOnInit() {
    this.features = this.featureService.getFeatures();
    this.posts = this.postService.getPosts();
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;});
    this.subscription = this.subscriptionService.isMonthly$.subscribe(
      (isMonthly) => {
        this.isMonthly = isMonthly; // Update the local state
      }

    );
  }

  toggleSubscription(isMonthly:boolean):void{
    this.subscriptionService.toggleSubscription(isMonthly);
    this.subscriptionService.setSubscrioptionType(isMonthly);
  }
  title = 'Nutritionist';
  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
