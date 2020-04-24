<template>
  <Layout :show-logo="false">
    <div class="post-tags container mx-auto">
      <h1 class="text-4xl font-bold py-2 text-center md:text-left mb-3">
        All tags
      </h1>

      <div class="post-tags__link">
        <PostTags
          class="post-card__tags"
          v-for="edge in $page.tags.edges"
          :key="edge.node.id"
          :post="edge"
          :tag-page="true"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
{
  tags: allGhostTag {
    edges {
      node {
        id
        title: name
        path
      }
    }
  }
}
</page-query>

<script>
import PostTags from "~/components/PostTags.vue";

export default {
  components: {
    PostTags,
  },
  props: ["post"],
};
</script>

<style lang="scss">
.post-tags__link {
  font-size: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
}
.post-card__tags {
  @apply shadow p-8;
}
.post-card__tags:hover {
  transition: transform 0.3s;
  transform: translateY(-5px);
  box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
}
</style>
