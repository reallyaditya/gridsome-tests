<template>
  <div class="post-tags" v-if="tagPage">
    <g-link
      class="post-tags__link"
      v-for="tag in post"
      :key="tag.id"
      :to="tag.path"
    >
      # {{ tag.title }}
    </g-link>
  </div>

  <div class="post-tags" v-else>
    <g-link
      class="post-tags__link"
      v-for="tag in post.tags"
      :key="tag.id"
      :to="tag.path"
    >
      # {{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post", "tagPage"],
};
</script>

<style lang="scss">
.post-tags {
  // margin: 1em 0 0;
  padding: 1em 0 0;

  &__link {
    // margin-right: 0.7em;
    font-size: 0.8em;
    color: currentColor;
    text-decoration: none;
    background-color: var(--bg-color);
    color: currentColor !important; //Todo: remove important;
    padding: 0.5em;
    border-radius: var(--radius);
  }
}
</style>
