<template>
  <div class="post-meta">
    Posted {{ post.date }}.
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} min read.</strong>
    </template>
    <!-- <header class="post-full-header" v-if="post"> -->
    <p class="post-full-custom-excerpt" v-if="showSummary">
      {{ post.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["post", "showSummary"],
};
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
