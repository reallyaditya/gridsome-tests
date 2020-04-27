<template>
  <div class="meta">
    <h1 class="meta__site-title">
      {{ $static.metadata.ghost.title }}
    </h1>

    <g-image
      alt="Cover Image"
      class="cover_image"
      :src="$static.metadata.ghost.cover_image"
    />

    <p class="meta__intro">
      {{ $static.metadata.ghost.description }}
    </p>

    <p class="meta__links">
      <g-link :to="'//twitter.com/' + $static.metadata.ghost.twitter"
        >Follow on Twitter</g-link
      >
      <!-- <g-link :to="'//twitter.com/' + $static.metadata.ghost.twitter"
        ><g-image src="@/assets/images/twitter.svg"
      /></g-link> -->
      <g-link :to="'//facebook.com/' + $static.metadata.ghost.facebook"
        >Facebook</g-link
      >
      <!-- <g-link :to="'//facebook.com/' + $static.metadata.ghost.facebook"
        ><g-image src="@/assets/images/facebook.svg"
      /></g-link> -->
    </p>
  </div>
</template>

<static-query>
query {
  	metadata {
    	ghost {
        title
        description
        icon
        cover_image
        facebook
        twitter
      }
  	}
}
</static-query>

<style lang="scss">
.meta {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
    margin-right: auto;
    margin-left: auto;
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
