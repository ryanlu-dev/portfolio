<template>
  <div class="container"><HeroSection /></div>
  <div class="container"><AboutSection /></div>
  <div class="container"><ExperienceSection /></div>
  <div class="container"><ProjectsSection /></div>
  <div class="container"><EducationSection /></div>
  <FooterSection />
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
