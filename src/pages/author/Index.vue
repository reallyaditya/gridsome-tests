<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold py-2 text-center md:text-left mb-3">
      All authors
    </h1>

    <div class="post-authors">
      <g-link
        class="post-author__link"
        v-for="edge in $page.authors.edges"
        :key="edge.node.id"
        :to="'/author/' + edge.node.slug"
      >
        <!-- <div class="image-container rounded-full overflow-hidden w-32 h-32">
          <img :src="author.profile_image" />
        </div> -->
        <!-- <div class="font-bold pt-3">{{ author.name }}</div> -->
        <p>{{ edge.node.name }}</p>
      </g-link>
    </div>
  </div>
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
</style>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  props: ["post"],
  //   name: "authors",
  //   components: {},
  //   computed: {
  //     ...mapGetters({ ghost: "getGhost" }),
  //   },
  //   data() {
  //     return {
  //       authors: [],
  //     };
  //   },
  //   async fetch() {
  //     const authors = await this.ghost.authors.browse();
  //     this.authors = authors;
  //   },
  //   head() {
  //     return {
  //       title: "Authors",
  //       meta: [
  //         {
  //           hid: "description",
  //           name: "description",
  //           content: "authors",
  //         },
  //         { hid: "og:type", property: "og:type", content: "page" },
  //         {
  //           hid: "og:title",
  //           property: "og:title",
  //           content: "authors",
  //         },
  //         {
  //           hid: "og:description",
  //           property: "og:description",
  //           content: "authors",
  //         },
  //         {
  //           hid: "og:url",
  //           property: "og:url",
  //           content: process.env.siteUrl + this.$route.path,
  //         },
  //       ],
  //     };
  //   },
};
</script>
