<template>
  <Layout>
    <!-- Author intro -->
    <MetaSite />

    <!-- List posts -->
    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
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
import MetaSite from "~/components/MetaSite.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    MetaSite,
    PostCard,
  },
};
</script>

<style>
.posts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
}
</style>
