<template>
  <div class="post-tags">
    <h1 class="post-tags__title">
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
.post-tags {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
}
</style>
