<template>
  <div class="author">
    <div class="author__for" v-for="edge in post.authors" :key="edge.id">
      <g-image
        alt="Author image"
        class="author__image"
        :src="edge.profile_image"
        width="180"
        height="180"
        blur="5"
      />

      <h3 class="author__name">
        {{ edge.name }}
      </h3>

      <p class="author__intro">
        {{ edge.bio }}
      </p>

      <p class="author__links">
        <g-link :key="edge.id" :to="'//twitter.com/' + edge.twitter"
          >Follow on Twitter</g-link
        >
        <g-link :key="edge.id" :to="'//facebook.com/' + edge.facebook"
          >Facebook</g-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
    margin-left: auto;
    margin-right: auto;
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.5em;
  }

  &__links {
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
    }
  }
}
</style>
