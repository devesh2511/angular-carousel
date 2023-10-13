import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-task3';
  images = [
    {
      imageSrc: "https://source.unsplash.com/1200x800/?landscape",
      imageAlt: 'land',
      imgDesc: "Landscape"
    },
    {
      imageSrc: "https://source.unsplash.com/1200x800/?technology",
      imageAlt: 'tech',
      imgDesc: "Technologu"
    },
    {
      imageSrc: "https://source.unsplash.com/1200x800/?animal",
      imageAlt: 'ani',
      imgDesc: "Animl"
    },
    {
      imageSrc: "https://source.unsplash.com/1200x800/?food",
      imageAlt: 'food',
      imgDesc: "Food"
    },

  ]
}
