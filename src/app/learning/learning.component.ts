import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent {
  currentSkills: string[] = [ ' Programming : Here I am applied for the Mern stack developer I have knowledge of HTML , CSS, Javascript','Framework and libraries : React,Mongodb,Nodejs,Express', 'Currently I am learning Angular', 'Tools and Platform :  Git,Github and vs code Alse', 'Other Skills : Good Communication,Team Work'];
  pastSkills: string[] = ['I am interseted in teaching and 2 months i teach Computer science in school', 'Some time done content Writing', 'Paper Crafting','DIY Home Projects'];
}
