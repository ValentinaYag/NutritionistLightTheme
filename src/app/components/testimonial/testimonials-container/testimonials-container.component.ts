import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { TestimonialService } from '../../../services/testimonial.service'
import { TestimonialItemComponent } from './../testimonial-item/testimonial-item.component';

@Component({
  selector: 'app-testimonials-container',
  standalone: true,
  imports: [CommonModule, TestimonialItemComponent],
  templateUrl: './testimonials-container.component.html',
  styleUrl: './testimonials-container.component.scss',
})
export class TestimonialsContainerComponent implements OnInit {
  groupedTestimonials: any[][] = [];

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit(): void {
    this.groupTestimonials();
    window.addEventListener('resize', this.groupTestimonials.bind(this));
  }

  groupTestimonials() {
    const allTestimonials = this.testimonialService.getTestimonials();
    const groupSize = window.innerWidth < 768 ? 1 : 3;
    this.groupedTestimonials = [];
    for (let i = 0; i < allTestimonials.length; i += groupSize) {
      this.groupedTestimonials.push(allTestimonials.slice(i, i + groupSize));
    }
  }
}