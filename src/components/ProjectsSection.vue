<template>
  <section>
    <div class="section-inner">
      <h2 class="section-title">Projects</h2>

      <div class="project-card">
        <div class="project-header">
          <h3 class="project-name">UF Course Planner</h3>
          <span class="project-date">Sep – Dec 2024</span>
        </div>
        <Carousel :autoplay="2000" :wrap-around="true" :pause-autoplay-on-hover="true" class="carousel">
          <Slide v-for="(img, i) in UFCoursePlannerImages" :key="i">
            <div class="slide-inner">
              <img :src="img.image" :alt="img.title">
            </div>
          </Slide>
          <template #addons><Navigation /></template>
        </Carousel>
        <p>I was scrum master and developer for the UF Course Planner, my senior design project. The app provides students a one-stop shop to manage courses and auto-schedule semesters based on degree plans, credits completed, and desired courseload.</p>
        <p>Built with React and Microsoft Azure — Azure Static Web Apps, Microsoft Entra for auth, Azure Functions, and PostgreSQL — with three other students. My first time using React in a team setting; we received full marks for our presentation and encouragement from faculty to continue the project under a university grant.</p>
      </div>

      <div class="project-card">
        <div class="project-header">
          <h3 class="project-name">Thought Bubbles</h3>
          <span class="project-date">Jan – Apr 2024</span>
        </div>
        <Carousel :autoplay="2000" :wrap-around="true" :pause-autoplay-on-hover="true" class="carousel">
          <Slide v-for="(img, i) in ThoughtBubblesImages" :key="i">
            <div class="slide-inner">
              <img :src="img.image" :alt="img.title">
            </div>
          </Slide>
          <template #addons><Navigation /></template>
        </Carousel>
        <p>Team leader and developer for Thought Bubbles, a classroom discussion tool that poses a question on screen and collects, displays, and allows replies to student responses in real time.</p>
        <p>Built on a LAMP stack (Linux, Apache, MySQL, PHP) hosted on UF servers with four other students, prototyped in Figma, and styled with Bootstrap and jQuery. Our professor remarked it was a tool he could see himself actually using.</p>
      </div>

      <p class="github-link">
        <a href="https://github.com/ryanlu-dev">Find these projects (including this portfolio) on my GitHub →</a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

interface SlideImage {
  image: string
  title: string
}

const UFCoursePlannerImages: SlideImage[] = [
  { image: '/UFCoursePlanner/SplashScreen.png', title: 'Splash Screen' },
  { image: '/UFCoursePlanner/Dashboard.png', title: 'Dashboard' },
  { image: '/UFCoursePlanner/Schedule.png', title: 'Weekly Schedule' },
  { image: '/UFCoursePlanner/SectionSearch.png', title: 'Section Search' },
  { image: '/UFCoursePlanner/DegreePlan.png', title: 'Degree Plan' },
  { image: '/UFCoursePlanner/Profile.png', title: 'User Profile' },
]

const ThoughtBubblesImages: SlideImage[] = [
  { image: '/ThoughtBubbles/SplashScreen.png', title: 'Splash Screen' },
  { image: '/ThoughtBubbles/CreateRoom.png', title: 'Create Room' },
  { image: '/ThoughtBubbles/TeacherView.png', title: 'Teacher View' },
  { image: '/ThoughtBubbles/Submitted.png', title: 'Submitted Answer' },
]
</script>

<style scoped lang="scss">
.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.25rem 1.5rem 1.5rem;
  margin-bottom: 1.25rem;
  transition: background-color 0.25s, border-color 0.25s;
}

.project-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.project-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  transition: color 0.25s;
}

.project-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
  transition: color 0.25s;
}

.carousel {
  width: 100%;
  max-width: 420px;
  margin: 0 auto 1.25rem;
  border-radius: 8px;
  overflow: hidden;

  .slide-inner {
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-alt);
    transition: background-color 0.25s;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  color: var(--text);
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 50%;
  &:hover { background-color: rgba(0, 0, 0, 0.6); }
}

.github-link {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.875rem;
}
</style>
