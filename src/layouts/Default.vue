<template>
  <div id="app flex md:min-h-screen flex-col">
    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <ul class="flex justify-center py-5 md:py-0 md:mr-3">
          <li><a href="/" class="homepage">Home</a></li>
          <li><a href="/blog" class="blog">Blog</a></li>
          <li><a href="/tag" class="tags">Tags</a></li>
          <li><a href="/author" class="authors">Authors</a></li>
        </ul>
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";
import Footer from "~/components/Footer.vue";

export default {
  props: {
    showLogo: { default: true },
  },
  components: {
    Logo,
    ToggleTheme,
    Footer,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}
</style>
