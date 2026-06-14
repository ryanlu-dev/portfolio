<template>
  <footer>
    <p>Built with Vue &amp; Vite · <a href="https://github.com/ryanlu-dev/portfolio">View source</a></p>
    <p class="attribution">Carousel by <a href="https://github.com/ismail9k/vue3-carousel">ismail9k</a> · Theme inspired by <a href="https://catppuccin.com">Catppuccin</a></p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  border-top: 1px solid var(--border);
  padding: 1.5rem;
  text-align: center;
  transition: border-color 0.25s;

  p {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin: 0 0 0.25rem;
    transition: color 0.25s;

    &:last-child { margin-bottom: 0; }
  }

  .attribution {
    font-size: 0.75rem;
  }
}
</style>
