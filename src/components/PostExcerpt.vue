<template>
  <header class="post-full-header" v-if="post">
    <p class="post-full-custom-excerpt">
      {{ post.description }}
    </p>
  </header>
</template>
<script>
export default {
  props: ["post"],
};
</script>
