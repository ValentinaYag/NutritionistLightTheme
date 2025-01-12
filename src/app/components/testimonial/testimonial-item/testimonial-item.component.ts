import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-item',
  standalone: true,
  templateUrl: './testimonial-item.component.html',
  styleUrls: ['./testimonial-item.component.scss']
})
export class TestimonialItemComponent {
  @Input() description!: string;
  @Input() imageUser!: string;
  @Input() userName!: string;
}