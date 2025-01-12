import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private features = [
    {
      title: 'Personalized Nutrition Plans',
      description: 'Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.',
      imageSrc: 'images/plansicon.png'
    },
    {
      title: 'Food Tracking and Analysis',
      description: 'Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.',
      imageSrc: 'images/foodIcon.png'
    },
    {
      title: 'Lifestyle and Behavior Coaching',
      description: 'Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.',
      imageSrc: 'images/coachingIcon.png'
    },

    {
      title: 'Guidance from Certified Nutritionists',
      description: 'Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.',
      imageSrc: 'images/coachingIcon.png'
    },
    {
      title: 'Meal Planning and Recipes',
      description: 'Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.',
      imageSrc: 'images/recipesIcon.png'
    },
    {
      title: 'Nutritional Education and Workshops',
      description: 'Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.',
      imageSrc: 'images/educationIcon.png'
    },

  ];

  getFeatures() {
    return this.features;
  }
}