<template>
  <Layout>
    <g-image
      alt="Author image"
      class="author__image"
      v-if="$page.author.profile_image"
      :src="$page.author.profile_image"
    />
    <div class="author__meta">
      <h1>
        {{ $page.author.name }}
      </h1>

      <p>
        {{ $page.author.bio }}
      </p>
    </div>

    <div class="posts">
      <PostCard
        v-for="edge in $page.author.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Author ($path: String!) {
  author:ghostAuthor (path: $path) {
    name
    slug
    bio
    profile_image
    belongsTo {
      edges {
        node {
          ...on GhostPost {
            title
            path
            date: published_at (format: "D. MMMM YYYY")
            description: excerpt
            cover_image: feature_image
            content: html
            slug
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard,
  },
};
</script>

<style lang="scss" scoped>
.author__image {
  border-radius: 100%;
  width: 90px;
  height: 90px;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
}

.author__meta {
  text-align: center;
}
</style>
