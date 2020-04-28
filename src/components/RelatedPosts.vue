<template>
  <aside class="read-next outer">
    <div class="inner">
      <div class="read-next-feed">
        <article
          class="read-next-card"
          :style="{
            backgroundImage: `url(${$static.metadata.ghost.cover_image})`,
          }"
        >
          <header class="read-next-card-header">
            <small class="read-next-card-header-sitetitle">{{
              $static.metadata.ghost.title
            }}</small>

            <h3 class="read-next-card-header-title">
              Posts
            </h3>
          </header>
          <div class="read-next-divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M13 14.5s2 3 5 3 5.5-2.463 5.5-5.5S21 6.5 18 6.5c-5 0-7 11-12 11C2.962 17.5.5 15.037.5 12S3 6.5 6 6.5s4.5 3.5 4.5 3.5"
              ></path>
            </svg>
          </div>

          <div class="read-next-card-content">
            <ul>
              <li
                v-for="edge in $static.posts.edges"
                :key="edge.node.id"
                :post="edge.node"
              >
                <g-link :to="edge.node.path">
                  {{ edge.node.title }}
                </g-link>
              </li>
            </ul>
          </div>
          <footer class="read-next-card-footer">
            <g-link to="/blog">See all posts →</g-link>
          </footer>
        </article>

        <!-- <div class="post-card post">
          <PostCard :key="$static.nextPost.id" :post="$static.nextPost" />
        </div> -->
      </div>
    </div>
  </aside>
</template>

<static-query>
{
  posts: allGhostPost(
      sortBy: "published_at",
      order: DESC,
    	limit: 3
  ) {
    edges {
      node {
        title
        path
        slug
        id
      }
    }
  }
  nextPost: ghostPost(id: "5e2b0b58219d1b3ab53da48d") {
    id
    title
    description: excerpt
    date: published_at (format: "D. MMMM YYYY")
    path
    slug
    id
    cover_image: feature_image
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
  }
  metadata {
    	ghost {
            cover_image
            title
      }
    }
}
</static-query>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard,
  },
};
</script>

<style scoped>
.read-next-feed {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 40px 0 0;
}
.read-next-card,
.read-next-feed {
  display: -ms-flexbox;
  display: flex;
}
.read-next-card {
  position: relative;
  -ms-flex: 1 1 300px;
  flex: 1 1 300px;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  padding: 25px;
  color: #fff;
  background: #15171a 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
}
.read-next-card:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  background: linear-gradient(
    135deg,
    rgba(0, 40, 60, 0.8),
    rgba(0, 20, 40, 0.7)
  );
  border-radius: 5px;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}
.read-next-card-header {
  position: relative;
  z-index: 50;
  padding-top: 20px;
  text-align: center;
}
.read-next-card-header-sitetitle {
  display: block;
  font-size: 1.3rem;
  line-height: 1.3em;
  opacity: 0.8;
}
.read-next-card-header-title {
  margin: 0;
  padding: 0 20px;
  color: #fff;
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: 1px;
}
.read-next-card-header-title a {
  color: #fff;
  font-weight: 300;
  text-decoration: none;
}
.read-next-card-header-title a:hover {
  text-decoration: none;
}
.read-next-divider {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  height: 80px;
}
.read-next-divider svg {
  width: 40px;
  fill: transparent;
  stroke: #fff;
  stroke-width: 0.5px;
  stroke-opacity: 0.65;
}
.read-next-card-content {
  position: relative;
  z-index: 50;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.7rem;
}
.read-next-card-content ul {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  list-style: none;
  align-items: center;
}
.read-next-card-content li {
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  line-height: 1.25em;
  font-weight: 200;
  letter-spacing: -0.5px;
}
.read-next-card-content li a {
  display: block;
  padding: 20px 0;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
  color: #fff;
  font-weight: 500;
  vertical-align: top;
  transition: opacity 0.3s ease;
}
.read-next-card-content li:first-of-type a {
  padding-top: 10px;
}
.read-next-card-content li a:hover {
  opacity: 1;
}
.read-next-card-footer {
  position: relative;
  margin: 15px 0 3px;
  text-align: center;
}
.read-next-card-footer a {
  color: #fff;
}
</style>
