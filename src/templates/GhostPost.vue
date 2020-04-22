<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">{{ $page.post.title }}</h1>
      <PostExcerpt :post="$page.post" />
      <PostMeta :post="$page.post" :show-summary="true" />
    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image
          alt="Cover image"
          v-if="$page.post.cover_image"
          :src="$page.post.cover_image"
        />
      </div>

      <div class="post-full-content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <!-- <Author class="post-author" :post="$page.post" /> -->
    <AuthorCard class="post-author" :post="$page.post" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: ghostPost (path: $path) {
    title
    path: url
    date: published_at (format: "D. MMMM YYYY")
    tags {
      id
      title: name
      path
    }
    authors {
      id
      name
      bio
      slug
      twitter
      facebook
      profile_image
    }
    description: excerpt
    content: html
    cover_image: feature_image
  }
}
</page-query>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";
import AuthorCard from "~/components/AuthorCard.vue";
// import PostExcerpt from "~/components/PostExcerpt.vue";

export default {
  components: {
    AuthorCard,
    Author,
    PostMeta,
    PostTags,
    // PostExcerpt,
  },
  props: {
    post: Object,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
