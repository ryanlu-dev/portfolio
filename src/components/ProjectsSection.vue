<template>
  <section>
    <div class="content-container">
      <div class="left-container">
        <h1>Projects</h1>
        <div class="blurb">
          <a href="https://github.com/ryanlu-dev">(Find these (including this portfolio) on my GitHub!)</a>
        </div>
      </div>
      <div class="text-container">
        <div class="project">
          <h2 class="title-lg">UF Course Planner (09/24 - 12/24)</h2>
          <h2 class="title-sm">UF Course Planner<br>(09/24 - 12/24)</h2>
          <Carousel :autoplay="2000" :wrap-around="true" :pause-autoplay-on-hover="true" class="carousel">
            <Slide v-for="(img, i) in UFCoursePlannerImages" :key="i">
              <div class="slide-inner">
                <img :src="img.image" :alt="img.title">
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <p>I was a scrum master and developer for the UF Course Planner, which served as my senior design project. The purpose of the project is to provide students with a one-stop app to manage their courses and have the application schedule courses for the semester according to provided degree plans and factors like what courses have already been taken and how many credits the user wishes to take.</p>
          <p>I collaborated with 3 other students to deploy a React web application using Microsoft Azure's services, including Azure Static Web Apps, user authentication through Microsoft Entra, Azure Functions, and PostgreSQL. This was my first time using React outside of personal practice, and I found it to be a useful way of developing components to work on parts of a project alongside other developers.</p>
          <p>We received full marks for our presentation and demonstration and had even received encouragement from faculty to continue or adapt this project under a grant through the university. It was a very valuable learning experience for me, as it was a project that felt completely within the hands of my group, and we did not receive much structure or guidance.</p>
        </div>
        <div class="project">
          <h2 class="title-lg">Thought Bubbles (01/24 - 04/24)</h2>
          <h2 class="title-sm">Thought Bubbles<br>(01/24 - 04/24)</h2>
          <Carousel :autoplay="2000" :wrap-around="true" :pause-autoplay-on-hover="true" class="carousel">
            <Slide v-for="(img, i) in ThoughtBubblesImages" :key="i">
              <div class="slide-inner">
                <img :src="img.image" :alt="img.title">
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <p>I was the team leader and a developer for Thought Bubbles, which served as the final project for one of my courses. The app is meant to facilitate discussions within classrooms by posing a question on the screen and collecting responses to display and reply to on the screen.</p>
          <p>I worked with 4 other students to host an application on UF's servers based on a Linux, Apache, MySQL, and PHP (LAMP) stack. We used Figma for prototyping purposes, which let us create the front end through Bootstrap and jQuery easily.</p>
          <p>We received favorable reviews at the end-of-semester showcase, and our professor had remarked that it was a tool that he could see himself actually using! This project was fun to work through limitations on what we could host on UF's servers.</p>
        </div>
      </div>
    </div>
  </section>
  <hr>
</template>

<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

interface SlideImage {
  image: string
  title: string
}

const UFCoursePlannerImages: SlideImage[] = [
  { image: '/UFCoursePlanner/SplashScreen.png', title: 'Splash Screen of UF Course Planner' },
  { image: '/UFCoursePlanner/Dashboard.png', title: "Dashboard showing courses added to user's schedule" },
  { image: '/UFCoursePlanner/Schedule.png', title: "User's schedule shown in weekly layout" },
  { image: '/UFCoursePlanner/SectionSearch.png', title: 'Section search screen' },
  { image: '/UFCoursePlanner/DegreePlan.png', title: "Degree plan screen for user's selected major" },
  { image: '/UFCoursePlanner/Profile.png', title: "User's profile screen with selections for major, courseload, and graduation date" },
]

const ThoughtBubblesImages: SlideImage[] = [
  { image: '/ThoughtBubbles/SplashScreen.png', title: 'Splash Screen of Thought Bubbles' },
  { image: '/ThoughtBubbles/CreateRoom.png', title: 'Creating a room in Thought Bubbles' },
  { image: '/ThoughtBubbles/TeacherView.png', title: 'Teacher View of Thought Bubbles - ask a question here!' },
  { image: '/ThoughtBubbles/Submitted.png', title: 'A submitted answer in Thought Bubbles' },
]
</script>

<style scoped lang="scss">
section {
  .content-container {
    .left-container {
      h1 {
        margin-left: 2.2rem;
      }

      .blurb {
        max-width: 10rem;
        margin-top: 0.5rem;

        a {
          color: orangered;
        }
      }
    }

    .text-container {
      .title-lg {
        display: block;
      }

      .title-sm {
        display: none;
      }

      h2 {
        margin-bottom: 1.5rem;
      }
    }
  }
}

.carousel {
  width: 400px;
  max-width: 100%;
  margin-bottom: 1.5rem;

  .slide-inner {
    width: 400px;
    height: 400px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  color: #EDF2F4;
  background-color: rgba(0, 0, 0, 0.4);
}

@media only screen and (max-width: 768px) {
  section {
    max-width: 90%;

    .content-container {
      .left-container {
        h1 {
          margin-left: 0px;
          margin-right: 0px;
        }

        .blurb {
          margin-bottom: 0rem;
          max-width: 100%;
        }
      }

      .text-container {
        .title-sm {
          display: block;
        }

        .title-lg {
          display: none;
        }
      }
    }
  }
}
</style>
