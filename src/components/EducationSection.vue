<template>
  <section>
    <div class="section-inner">
      <h2 class="section-title">Education</h2>
      <div class="edu-card">
        <img src="/DrumMajor.jpg" alt="Ryan conducting the UF Marching Band" class="drum-major">
        <div class="edu-header">
          <img src="/GatorHead.png" alt="University of Florida logo" class="school-logo">
          <div class="school-info">
            <h3 class="school-name">University of Florida</h3>
            <p class="degree">B.S. Computer Science · Minor in Music Performance</p>
            <p class="meta">2020 – 2024 · Cum Laude · 3.71 GPA</p>
          </div>
          <img src="/GatorBandAlumni.png" alt="Gator Band Alumni logo" class="school-logo">
        </div>
        <div class="edu-body">
          <p>I graduated with a Bachelor of Science in Computer Science and a minor in Music Performance. Standout courses include Data Structures and Algorithms, Operating Systems, Computer Networking, and Software Engineering.</p>
          <p>In fall semesters, I performed with the UF Pride of the Sunshine Marching Band. I was a member in full standing for my first two years, then I served a year as a baritone section leader, then as drum major for the entire ensemble for two years. In the spring, I played euphonium in the UF Symphonic and Concert Bands.</p>
          <p>In Fall 2021, I was initiated into the Alpha Eta Chapter of Kappa Kappa Psi, National Honorary Band Service Fraternity. I served as chapter webmaster for several semesters and sat on multiple committees supporting the chapter and band programs at UF. I was an active member for several semesters and was elected to be the chapter's delegate for the 2024 Southeastern Convention.</p>
        </div>
      </div>
      <div class="irsc-card">
        <div class="edu-header">
          <div class="school-info" style="text-align: left;">
            <h3 class="school-name">Indian River State College</h3>
            <p class="degree">A.A. · General Studies</p>
            <p class="meta">2018 – 2020</p>
          </div>
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

.drum-major {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center 50%;
  display: block;
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
  max-width: 120px;
  max-height: 120px;
  object-fit: contain;
  flex-shrink: 0;
}

.school-info {
  flex: 1;
  min-width: 0;
  text-align: center;
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
}

.edu-body {
  padding: 1.25rem 1.5rem 1.5rem;
}

.irsc-card {
  margin-top: 1.25rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  transition: background-color 0.25s, border-color 0.25s;

  .edu-header {
    border-bottom: none;
  }
}

@media (max-width: 640px) {
  .drum-major {
    height: 220px;
  }
  .school-logo {
    max-width: 70px;
    max-height: 70px;
  }
}

@media (max-width: 420px) {
  .drum-major {
    height: 180px;
  }
  .school-logo {
    max-width: 48px;
    max-height: 48px;
  }
  .edu-header {
    gap: 0.6rem;
    padding: 1rem;
  }
  .school-name {
    font-size: 0.95rem;
  }
  .degree {
    font-size: 0.8rem;
  }
}
</style>
