<template>
  <header>
    <HeroSection />
    <nav>
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >{{ tab }}</button>
      </div>
      <button
        class="theme-toggle"
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <!-- Sun: shown in dark mode to switch to light -->
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <!-- Moon: shown in light mode to switch to dark -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>
    </nav>
  </header>

  <main>
    <AboutSection v-show="activeTab === 'About'" />
    <ExperienceSection v-show="activeTab === 'Experience'" />
    <ProjectsSection v-show="activeTab === 'Projects'" />
    <EducationSection v-show="activeTab === 'Education'" />
  </main>

  <FooterSection />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import FooterSection from './components/FooterSection.vue'

const tabs = ['About', 'Experience', 'Projects', 'Education'] as const
type Tab = typeof tabs[number]
const activeTab = ref<Tab>('About')

const isDark = ref(true)

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  // Respect saved preference, fall back to dark (Frappé)
  const saved = localStorage.getItem('theme') ?? 'dark'
  isDark.value = saved === 'dark'
  document.documentElement.setAttribute('data-theme', saved)
})
</script>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg);
  transition: background-color 0.25s;
}

nav {
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  transition: border-color 0.25s;

  .tabs {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 0.1rem;
    padding: 0.45rem 0;
  }

  button {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-muted);
    font-family: 'Geist', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    padding: 0.4rem 1rem;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition: color 0.15s, border-color 0.15s;

    &:hover { color: var(--text); }

    &.active {
      color: var(--accent);
      border-bottom-color: var(--accent);
      font-weight: 500;
    }
  }

  .theme-toggle {
    flex-shrink: 0;
    width: 1.9rem;
    height: 1.9rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--text-muted);
    cursor: pointer;
    transition: color 0.15s, border-color 0.15s;

    &:hover {
      color: var(--accent);
      border-color: var(--accent);
    }
  }
}

main {
  flex: 1;
}

@media (max-width: 480px) {
  nav {
    padding: 0 0.75rem;

    .tabs {
      gap: 0;
    }

    button {
      font-size: 0.75rem;
      padding: 0.4rem 0.5rem;
      letter-spacing: 0;
    }
  }
}
</style>
