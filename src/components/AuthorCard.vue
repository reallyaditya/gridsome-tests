<template>
  <div class="author">
    <g-image
      alt="Author image"
      class="author__image"
      src="~/assets/images/author.jpg"
      width="180"
      height="180"
      blur="5"
    />

    <h3 class="author__name">
      {{ $page.author.name }}
    </h3>

    <p class="author__intro">
      {{ $page.author.bio }}
    </p>

    <p class="author__links">
      <g-link
        :key="$page.author.id"
        :to="'//twitter.com/' + $page.author.twitter"
        >Follow on Twitter</g-link
      >
      <g-link
        :key="$page.author.id"
        :to="'//facebook.com/' + $page.author.facebook"
        >Facebook</g-link
      >
      <!-- <a href="//twitter.com/gridsome">Follow on Twitter</a> -->
      <!-- <a href="//github.com/gridsome/gridsome-starter-blog">Facebook</a> -->
    </p>
  </div>
</template>

<page-query>
query Author ($path: String!) {
	author: ghostAuthor (path: $path) {
    	id
    	name
        slug
    	bio
		twitter
		facebook
  }
}
</page-query>

<script>
export default {
  props: ["showTitle"],
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
