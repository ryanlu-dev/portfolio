<template>
  <section>
    <div class="section-inner">
      <h2 class="section-title">Experience</h2>
      <div class="job-card">
        <img src="/PTechBanner.jpg" alt="Publix Technology banner" class="banner">
        <div class="card-body">
          <div class="job-header">
            <div>
              <h3 class="company">Publix Technology</h3>
              <p class="role">Software Engineering Intern · Summer 2024</p>
            </div>
          </div>
          <p>As a software engineering intern for Publix Technology, I worked as a developer on the Publix Property Portal (P3), a web application that allows Publix employees and tenants to view and manage their property.</p>
          <p>I worked on the front end and back end hosted on Microsoft Azure and maintained through Azure DevOps. I accomplished several features and bug fixes for the web app, built using C#/ASP.NET MVC with Kendo, Bootstrap, and jQuery.</p>
          <p>I was a primary developer of a feature released to production — I added a function to the lease compliance control panel to rename file attachments, requiring front-end work to add the button and back-end logic to update the file name as an Azure Storage Blob.</p>
          <p>I worked in an agile environment over a 3-month sprint cycle, collaborating with developers, business analysts, and project managers. At the intern showcase I presented my work and received very favorable feedback from cohort leaders.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.job-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  transition: background-color 0.25s, border-color 0.25s;
}

.banner {
  width: 100%;
  height: 8rem;
  object-fit: cover;
  object-position: right center;
  display: block;
}

.card-body {
  padding: 1.25rem 1.5rem 1.5rem;
}

.job-header {
  margin-bottom: 1.1rem;
}

.company {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 0.2rem;
  transition: color 0.25s;
}

.role {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
  transition: color 0.25s;
}
</style>
