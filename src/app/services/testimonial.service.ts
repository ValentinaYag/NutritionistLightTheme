import { Injectable } from '@angular/core';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private testimonials: Testimonial[] = [
    {
      description: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      imageUser: "images/jenifer.png",
      userName: "Jennifer Anderson",
    },
    {
      description: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
      imageUser: "images/robert.png",
      userName: "Robert Johnson",
    },
    {
      description: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      imageUser: "images/emily3.png",
      userName: "Emily Davis",
    },
    {
      description: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      imageUser: "images/jenifer.png",
      userName: "Jennifer Anderson",
    },
    {
      description: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
      imageUser: "images/robert.png",
      userName: "Robert Johnson",
    },
    {
      description: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      imageUser: "images/emily3.png",
      userName: "Emily Davis",
    }
  ];

  getTestimonials(): Testimonial[] {
    return this.testimonials;
  }
}