import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero/hero-section.component';
import { AboutSectionComponent } from './sections/about/about-section.component';
import { EducationSectionComponent } from './sections/education/education-section.component';
import { ExperienceSectionComponent } from './sections/experience/experience-section.component';


@Component({
  selector: 'app-root',
  imports: [HeroSectionComponent, AboutSectionComponent, EducationSectionComponent, ExperienceSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
