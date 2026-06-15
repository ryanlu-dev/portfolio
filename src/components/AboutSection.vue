<template>
  <section>
    <div class="section-inner">
      <h2 class="section-title">About Me</h2>
      <div class="about-layout">
        <div class="about-photos">
          <img id="Ryan" src="/Ryan.jpg" alt="A picture of Ryan Lu">
          <img id="MJ" src="/MJ.jpg" alt="Ryan's cat, MJ">
        </div>
        <div class="about-text">
          <p>Hi, I'm Ryan. I love programming, gaming, music, and my cat!</p>
          <p>I'm currently an Associate Software Engineer at Infotech Inc., working on the Enterprise team for AASHTOWare Project. I'm comfortable with C#, ASP.NET, JavaScript, SQL, Java, C++, Python, React, Vue, and more — and I'm always looking to expand further. My goal is to contribute to a project and team where I'm truly valued and doing impactful work.</p>
          <p>I have years of experience as a leader through performing in marching bands and serving in organizations, which gives me a unique understanding of effective collaboration and what it takes to achieve great things together.</p>
          <p>
            I'm always looking for new opportunities to learn and grow. Feel free to reach out via
            <a ref="emailRef" class="email-link"></a>
            or <a href="https://www.linkedin.com/in/-ryan-lu-">connect with me on LinkedIn.</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emailRef = ref<HTMLAnchorElement | null>(null)

onMounted(() => {
  if (emailRef.value) {
    // atob decodes base64; the real address never appears in static HTML
    const addr = atob('cnlhbi5sdUBoZXkuY29t')
    emailRef.value.href = `mailto:${addr}`
    emailRef.value.textContent = addr
  }
})
</script>

<style scoped lang="scss">
.about-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.about-photos {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  width: 200px;

  img {
    border-radius: 8px;
    object-fit: cover;
    border: 1px solid var(--border);
    display: block;
    transition: border-color 0.25s;
  }

  #Ryan {
    object-position: center;
    width: 100%;
    height: 200px;
  }

  #MJ {
    width: 100%;
    height: 200px;
  }
}

.about-text {
  flex: 1;
  min-width: 0;
}

.tooltip-trigger {
  position: relative;
  cursor: help;
  color: var(--accent-warm);
  text-decoration: underline;
  text-decoration-color: var(--accent-warm);
  transition: color 0.15s;

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--surface);
    color: var(--text);
    border: 1px solid var(--accent-warm);
    padding: 0.3rem 0.7rem;
    border-radius: 6px;
    white-space: nowrap;
    font-size: 0.8rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s;
    z-index: 10;
  }

  &:hover::after { opacity: 1; }
}

@media (max-width: 560px) {
  .about-layout {
    flex-direction: column;
  }

  .about-photos {
    flex-direction: row;
    width: 100%;

    img {
      flex: 1;
      width: 0;
      height: 130px;
    }
  }
}
</style>
