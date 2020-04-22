<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
      <!-- <AuthorCircle :post="edge.node" /> -->
    </div>
  </Layout>
</template>

<page-query>
{
  posts: allGhostPost(
      sortBy: "published_at",
      order: DESC,
  ) {
    edges {
      node {
        title
        description: excerpt
        date: published_at (format: "D. MMMM YYYY")
        path
        slug
        id
        tags {
          id
          title: name
          path
        }
        authors {
          id
          name
          path
          profile_image
        }
        cover_image: feature_image
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";
// import AuthorCircle from "~/components/AuthorCircle.vue";

export default {
  components: {
    Author,
    // AuthorCircle,
    PostCard,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
}
</style>
