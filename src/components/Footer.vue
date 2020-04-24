<template>
  <footer
    class="footer container flex justify-between mx-auto text-sm py-5 tracking-wide"
  >
    <span class="footer__copyright"
      >Copyright © {{ new Date().getFullYear() }}.
    </span>
    <span class="footer__links"
      >Powered by <a href="//gridsome.org"> Gridsome </a></span
    >
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
