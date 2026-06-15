<template>
  <section>
    <div class="section-inner">
      <h2 class="section-title">Experience</h2>

      <div class="job-list">

        <!-- Infotech -->
        <div class="job-card">
          <img id="iti" src="/infotech.svg" alt="Infotech Inc. banner" class="banner">
          <div class="card-body">
            <div class="job-header">
              <div class="job-meta">
                <h3 class="company">Infotech Inc.</h3>
                <p class="role">Associate Software Engineer</p>
                <p class="dates">July 2025 – Present · Gainesville, FL</p>
              </div>
              <span class="badge">Current</span>
            </div>
            <ul>
              <li>Engineer software using C#, ASP.NET, JavaScript, MSSQL, Oracle DB, Express, Vite, and Vue for AASHTOWare Project on the Enterprise team</li>
              <li>Set up, maintain, and develop tests for Gherkin/Reqnroll automated testing, QUnit, and NUnit</li>
              <li>Develop and deliver feature enhancements, maintenance, and upgrades for a widely-used construction project management platform</li>
              <li>Uphold high standards of documentation, communication, and programming best practices</li>
            </ul>
            <div class="tags">
              <span>C#</span><span>ASP.NET</span><span>JavaScript</span><span>MSSQL</span><span>Oracle DB</span><span>Vue</span><span>Vite</span><span>TDD</span>
            </div>
          </div>
        </div>

        <!-- Response Technologies -->
        <div class="job-card">
          <img id="rtc" src="/response-technologies-logo.png" alt="Response Technologies Corporation logo" class="banner">
          <div class="card-body">
            <div class="job-header">
              <div class="job-meta">
                <h3 class="company">Response Technologies Corporation</h3>
                <p class="role">Freelance Software Consultant / Developer</p>
                <p class="dates">June 2025 – February 2026 · Remote</p>
              </div>
            </div>
            <ul>
              <li>Set up an Azure virtual machine running Linux to migrate and deliver a learning management system solution</li>
              <li>Configured Apache, PostgreSQL, and PHP for a seamless migration from their old platform into their own managed solution</li>
              <li>Established and maintained SSL certifications for secure service</li>
            </ul>
            <div class="tags">
              <span>Linux</span><span>Azure</span><span>Apache</span><span>PostgreSQL</span><span>PHP</span>
            </div>
          </div>
        </div>

        <!-- Publix -->
        <div class="job-card">
          <img id="ptech"src="/PTechBanner.jpg" alt="Publix Technology banner" class="banner">
          <div class="card-body">
            <div class="job-header">
              <div class="job-meta">
                <h3 class="company">Publix Technology</h3>
                <p class="role">Software Engineer Intern</p>
                <p class="dates">May 2024 – July 2024 · Lakeland, FL</p>
              </div>
            </div>
            <ul>
              <li>Developed for the Publix Property Portal (P3), a web app used by thousands of associates and tenants to manage Publix property and leases</li>
              <li>Implemented a file-attachment rename feature using C#, Azure, jQuery, Kendo UI, and Bootstrap — released to production</li>
              <li>Created bugfixes for administrative tools and UI by modifying SQL queries and JavaScript</li>
              <li>Wrote documentation on Azure Functions email triggers for future testing and support</li>
              <li>Tested solutions across development, testing, and staging environments; presented work at intern showcase to favorable feedback from manager and executives</li>
            </ul>
            <div class="tags">
              <span>C#</span><span>ASP.NET MVC</span><span>Azure</span><span>jQuery</span><span>Kendo UI</span><span>Bootstrap</span><span>SQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.job-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.job-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  transition: background-color 0.25s, border-color 0.25s;
}

.banner {
  width: 100%;
  height: 7rem;
  object-fit: cover;
  object-position: center;
  display: block;
}

#rtc {
  background: #fff;
  object-fit: contain;
}

#iti {
  object-fit: contain;
  background: #fff;
}

.card-body {
  padding: 1.25rem 1.5rem 1.5rem;
}

.job-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-bottom: 1rem;
}

.company {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 0.2rem;
  transition: color 0.25s;
}

.role {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin: 0 0 0.15rem;
  transition: color 0.25s;
}

.dates {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0;
  opacity: 0.7;
}

.badge {
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  white-space: nowrap;
}

ul {
  padding-left: 1.25rem;
  margin: 0 0 1rem;

  li {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 0.4rem;
    line-height: 1.5;
    transition: color 0.25s;

    &:last-child { margin-bottom: 0; }
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;

  span {
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.2rem 0.6rem;
    border-radius: 99px;
    background: var(--bg);
    color: var(--text-muted);
    border: 1px solid var(--border);
    transition: background-color 0.25s, color 0.25s, border-color 0.25s;
  }
}
</style>
