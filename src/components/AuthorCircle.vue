<template>
  <!-- <a href="{{primary_author.url}}" class="m-article-card__author js-tooltip" aria-label="Authors" data-tippy-content="{{t "Posted by"}} {{primary_author.name}} {{authors autolink="false" from="2" prefix=(t "Among with") separator=" , "}}">
        {{#if primary_author.profile_image}}
          <div style="background-image: url({{img_url primary_author.profile_image size="xs"}});"></div>
        {{else}}
          <div style="background-image: url({{asset "images/default-avatar-square-small.jpg"}});"></div>
        {{/if}}
    </a> -->

  <div class="author-card">
    <div class="author-circle" v-for="author in post.authors" :key="author.id">
      <g-link
        class="author-link"
        alt="Author Profile URL"
        :key="author.id"
        :to="author.path"
      >
        <g-image
          class="author-image"
          alt="Author Profile Image"
          :key="author.id"
          :src="author.profile_image"
        >
        </g-image>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
