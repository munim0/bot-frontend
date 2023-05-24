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
      description: "Join us for our grand Annual Charity Gala, featuring a gourmet dinner, live performances, and silent auction, all in support of local charitable organizations."
    },
    {
      name: "Tech Conference 2023",
      description: "The Tech Conference 2023 brings together industry experts, innovators, and enthusiasts to discuss the latest trends and advancements in technology, featuring keynote speeches, panel discussions, and networking opportunities."
    },
    {
      name: "Art Exhibition Opening",
      description: "Be part of the vibrant art scene at the Art Exhibition Opening, showcasing a diverse collection of paintings, sculptures, and installations by renowned and emerging artists."
    },
    {
      name: "Fitness Bootcamp",
      description: "Get ready to break a sweat at our intensive Fitness Bootcamp, featuring high-intensity workouts, expert trainers, and a supportive community for fitness enthusiasts of all levels."
    },
    {
      name: "Environmental Awareness Workshop",
      description: "Join us for an interactive workshop focused on raising environmental awareness, exploring sustainable practices, and discussing ways to make a positive impact on our planet."
    },
    {
      name: "Music Festival 2023",
      description: "Immerse yourself in the rhythm and melodies of the Music Festival 2023, featuring a diverse lineup of international artists, food vendors, and an electrifying atmosphere of live music."
    },
    {
      name: "Entrepreneurship Summit",
      description: "Calling all aspiring entrepreneurs! The Entrepreneurship Summit provides a platform to learn from successful business leaders, participate in workshops, and network with fellow entrepreneurs."
    },
    {
      name: "Film Screening: Documentary Showcase",
      description: "Join us for a captivating documentary showcase, where we'll be screening thought-provoking films that shed light on important social issues, followed by engaging discussions."
    },
    {
      name: "Science Fair 2023",
      description: "Ignite your curiosity at the Science Fair 2023, where students and researchers showcase their innovative projects, interactive exhibits, and mind-blowing scientific demonstrations."
    },
    {
      name: "Culinary Workshop: Mastering the Art of Chocolate",
      description: "Dive into the world of chocolate-making at our hands-on culinary workshop, where you'll learn the techniques, secrets, and creative possibilities of working with chocolate."
    }
  ];
}
