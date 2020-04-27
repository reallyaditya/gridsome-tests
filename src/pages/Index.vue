<template>
  <Layout>
    <MetaSite />
    <h2 class="title">
      A free and open source theme for headless Ghost CMS
    </h2>
    <p class="text-sm md:text-2xl text-gray-600 mt-5">
      Built with Gridsome
    </p>
    <div class="mt-5 mb-5 md:mb-0">
      <g-link to="/blog/" class="button">
        View Posts
      </g-link>
    </div>
    <div class="md:w-1/2">
      <Logo class="w-32 sm:w-48 lg:w-64 mx-auto" />
    </div>
  </Layout>
</template>

<script>
import MetaSite from "~/components/MetaSite.vue";
import Logo from "~/components/Logo.vue";

export default {
  components: {
    MetaSite,
    Logo,
  },
};
</script>

<style>
body {
  overflow-y: scroll;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.links {
  padding-top: 15px;
}
.button {
  @apply shadow px-5 py-2 inline-block;
}
</style>
