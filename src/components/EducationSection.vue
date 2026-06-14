<template>
  <section>
    <div class="section-inner">
      <h2 class="section-title">Education</h2>
      <div class="edu-card">
        <div class="edu-header">
          <img src="/GatorHead.png" alt="University of Florida logo" class="school-logo">
          <div class="school-info">
            <h3 class="school-name">University of Florida</h3>
            <p class="degree">B.S. Computer Science · Minor in Music Performance</p>
            <p class="meta">2020 – 2024 · Cum Laude · 3.71 GPA</p>
          </div>
          <img src="/DrumMajor.jpg" alt="Ryan conducting the UF Marching Band" class="drum-major">
        </div>
        <div class="edu-body">
          <p>I graduated with a Bachelor of Science in Computer Science and a minor in Music Performance. Standout courses include Data Structures and Algorithms, Operating Systems, Computer Networking, and Software Engineering.</p>
          <p>In fall semesters, I performed with the UF Pride of the Sunshine Marching Band — first as baritone section leader, then as drum major for the entire ensemble. In spring, I played euphonium in the UF Symphonic and Concert Band.</p>
          <p>In Fall 2021, I was initiated into the Alpha Eta Chapter of Kappa Kappa Psi, National Honorary Band Service Fraternity. I served as chapter webmaster for several semesters and sat on multiple committees supporting the band program.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.edu-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  transition: background-color 0.25s, border-color 0.25s;
}

.edu-header {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.25s;
}

.school-logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
  flex-shrink: 0;
}

.school-info {
  flex: 1;
  min-width: 0;
}

.school-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 0.2rem;
  transition: color 0.25s;
}

.degree {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin: 0 0 0.15rem;
  transition: color 0.25s;
}

.meta {
  font-size: 0.8rem;
  color: var(--accent);
  margin: 0;
  font-weight: 500;
  transition: color 0.25s;
}

.drum-major {
  width: 60px;
  height: 78px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 6px;
  border: 1px solid var(--border);
  flex-shrink: 0;
  transition: border-color 0.25s;
}

.edu-body {
  padding: 1.25rem 1.5rem 1.5rem;
}

@media (max-width: 480px) {
  .drum-major { display: none; }

  .edu-header { flex-wrap: wrap; }
}
</style>
