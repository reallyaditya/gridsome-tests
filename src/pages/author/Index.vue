<template>
  <Layout :show-logo="false">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold py-2 text-center md:text-left mb-3">
        All authors
      </h1>

      <div class="post-authors">
        <g-link
          class="post-author__link flex items-center flex-col"
          v-for="author in $page.authors.edges"
          :key="author.node.id"
          :to="'/author/' + author.node.slug"
        >
          <div class="image-container rounded-full overflow-hidden w-32 h-32">
            <img :src="author.node.profile_image" />
          </div>
          <div class="font-bold pt-3">{{ author.node.name }}</div>
          <!-- <p>{{ author.node.name }}</p> -->
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
{
  authors: allGhostAuthor {
    edges {
      node {
        id
        name
        slug
        profile_image
      }
    }
  }
}
</page-query>

<style scoped>
.post-authors {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
}
.post-author__link {
  @apply shadow p-8 text-center;
}
</style>

<script>
export default {};
</script>
