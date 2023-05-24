import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  events = [
    {
      name: "Annual Charity Gala",
      description: "Join us for our grand Annual Charity Gala, featuring a gourmet dinner, live performances, and silent auction, all in support of local charitable organizations.",
      date: "2023-08-15",
      place: "City Convention Center",
      photoURL: "assets/images/1.png"
    },
    {
      name: "Tech Conference 2023",
      description: "The Tech Conference 2023 brings together industry experts, innovators, and enthusiasts to discuss the latest trends and advancements in technology, featuring keynote speeches, panel discussions, and networking opportunities.",
      date: "2023-09-20",
      place: "Tech Expo Center",
      photoURL: "assets/images/2.png"
    },
    {
      name: "Art Exhibition Opening",
      description: "Be part of the vibrant art scene at the Art Exhibition Opening, showcasing a diverse collection of paintings, sculptures, and installations by renowned and emerging artists.",
      date: "2023-07-10",
      place: "Modern Art Gallery",
      photoURL: "assets/images/3.png"
    },
    {
      name: "Fitness Bootcamp",
      description: "Get ready to break a sweat at our intensive Fitness Bootcamp, featuring high-intensity workouts, expert trainers, and a supportive community for fitness enthusiasts of all levels.",
      date: "2023-06-05",
      place: "Fit Zone Gym",
      photoURL: "assets/images/4.png"
    },
    {
      name: "Environmental Awareness Workshop",
      description: "Join us for an interactive workshop focused on raising environmental awareness, exploring sustainable practices, and discussing ways to make a positive impact on our planet.",
      date: "2023-07-25",
      place: "Community Center",
      photoURL: "assets/images/5.png"
    }
  ];

}