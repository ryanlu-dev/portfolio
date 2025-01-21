import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero/hero-section.component';
import { AboutSectionComponent } from './sections/about/about-section.component';
import { EducationSectionComponent } from './sections/education/education-section.component';
import { ExperienceSectionComponent } from './sections/experience/experience-section.component';
import { ProjectsSectionComponent } from './sections/projects/projects-section.component';


@Component({
  selector: 'app-root',
  imports: [HeroSectionComponent, AboutSectionComponent, EducationSectionComponent, ExperienceSectionComponent, ProjectsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
