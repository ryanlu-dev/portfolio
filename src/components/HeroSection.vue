<template>
  <section>
    <h1>Ryan Lu</h1>
    <p class="subtitle">Associate Software Engineer</p>
  </section>
</template>

<style scoped lang="scss">
section {
  text-align: center;
  padding: 2.75rem 1rem 1.5rem;

  h1 {
    font-family: 'Tomorrow', sans-serif;
    font-size: clamp(3rem, 10vw, 5.5rem);
    font-weight: 700;
    color: var(--text);
    margin: 0 0 0.35rem;
    transition: color 0.25s;
  }

  .subtitle {
    font-size: clamp(0.8rem, 2vw, 0.95rem);
    color: var(--text-muted);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin: 0;
    font-weight: 300;
    transition: color 0.25s;
  }
}
</style>
