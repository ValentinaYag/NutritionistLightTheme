import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = [
    {
      imgSrc: "images/emilyPostImg.png",
      alt: "Benefits of Hydration",
      subtitle: "Weight Loss",
      title: "The Benefits of Hydration for Weight Loss",
      description: "Discover how staying hydrated can support your weight loss goals and improve overall health.",
      authorImg: "images/emily.png",
      authorAlt: "emily",
      authorName: "Emily Johnson",
      date: "23 May 2023 - 5 min read"
    },
    {
      imgSrc: "images/markPostImg.png",
      alt: "Understanding Macronutrients",
      subtitle: "Understanding Macronutrients",
      title: "Carbohydrates, Proteins, and Fats",
      description: "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
      authorImg: "images/mark.png",
      authorAlt: "mark",
      authorName: "Mark Wilson",
      date: "23 May 2023 - 5 min read"
    },
    {
      imgSrc: "images/saraPostImg.png",
      alt: "Mindful Eating",
      subtitle: "Mindful Eating",
      title: "Cultivating a Healthy Relationship with Food",
      description: "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
      authorImg: "images/sara.png",
      authorAlt: "sara",
      authorName: "Sarah Thompson",
      date: "23 May 2023 - 5 min read"
    },

    {
      imgSrc: "images/emily2PostImg.png",
      alt: "Healthy Snacks on the Go",
      subtitle: "Healthy Snacks on the Go",
      title: "Quick and Nutritious Options",
      description: "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
      authorImg: "images/emily2.png",
      authorAlt: "emily",
      authorName: "Emily Johnson",
      date: "23 May 2023 - 5 min read"
    }
  ];
  getPosts() {
    return this.posts;
  }
}