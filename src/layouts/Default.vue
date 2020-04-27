<template>
  <div id="app">
    <TopBar />

    <main class="main flex md:min-h-screen flex-col flex-grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    TopBar,
    Footer,
  },
};
</script>

<style lang="scss">
.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}
</style>
