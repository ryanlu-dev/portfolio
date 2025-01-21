import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  imports: [NgImageSliderModule],
})

export class ProjectsSectionComponent {
  imageObject: Array<object> = [];
  UFCoursePlannerImages = this.imageObject = [{
    image: '/UFCoursePlanner/SplashScreen.png',
    thumbImage: '/UFCoursePlanner/SplashScreen_min.png',
    title: 'Splash Screen of UF Course Planner'
  }, {
    image: '/UFCoursePlanner/Dashboard.png',
    thumbImage: '/UFCoursePlanner/Dashboard_min.png',
    title: 'Dashboard showing courses added to user\'s schedule'
  }, {
    image: '/UFCoursePlanner/Schedule.png',
    thumbImage: '/UFCoursePlanner/Schedule_min.png',
    title: 'User\'s schedule shown in weekly layout'
  }, {
    image: '/UFCoursePlanner/SectionSearch.png',
    thumbImage: '/UFCoursePlanner/SectionSearch_min.png',
    title: 'Section search screen'
  }, {
    image: '/UFCoursePlanner/DegreePlan.png',
    thumbImage: '/UFCoursePlanner/DegreePlan_min.png',
    title: 'Degree plan screen for user\'s selected major'
  }, {
    image: '/UFCoursePlanner/Profile.png',
    thumbImage: '/UFCoursePlanner/Profile_min.png',
    title: 'User\'s profile screen with selections for major, courseload, and graduation date'
  }];

  ThoughtBubblesImages = this.imageObject =[{
    image: '/ThoughtBubbles/SplashScreen.png',
    thumbImage: '/ThoughtBubbles/SplashScreen.png',
    title: 'Splash Screen of Thought Bubbles'
  }, {
    image: '/ThoughtBubbles/CreateRoom.png',
    thumbImage: '/ThoughtBubbles/CreateRoom.png',
    title: 'Creating a room in Thought Bubbles'
  }, {
    image: '/ThoughtBubbles/TeacherView.png',
    thumbImage: '/ThoughtBubbles/TeacherView.png',
    title: 'Teacher View of Thought Bubbles - ask a question here!'
  }, {
    image: '/ThoughtBubbles/Submitted.png',
    thumbImage: '/ThoughtBubbles/Submitted.png',
    title: 'A submitted answer in Thought Bubbles'
  }];

  constructor() {
  }
}