<template>
  <header class="header">
    <div class="header__left">
      <g-link class="text-center block md:text-left text-3xl" to="/">
        <g-image alt="Logo" class="logo" :src="$static.metadata.ghost.logo">
        </g-image>
      </g-link>
    </div>

    <div class="header__right">
      <ul class="flex justify-center py-5 md:py-0 md:mr-3">
        <li><g-link to="/" class="homepage">Home</g-link></li>
        <li><g-link to="/blog" class="blog">Blog</g-link></li>
        <li><g-link to="/tag" class="tags">Tags</g-link></li>
        <li><g-link to="/author" class="authors">Authors</g-link></li>
      </ul>
      <ToggleTheme />
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    ghost {
      logo
    }
  }
}
</static-query>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  components: {
    ToggleTheme,
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

.logo {
  width: 40%;
}
</style>
