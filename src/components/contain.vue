<template>
  <div class="row">
    <Menu :menu="tags" @select="select"></Menu>
    <div class="column middle">
      <div v-html="HTML ? HTML : ''" class="content"></div>
    </div>
  </div>
</template>

<script setup>
import Menu from './menu.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
const Id = ref();
const HTML = ref();

const tags = await axios.get('http://127.0.0.1:2368/ghost/api/content/tags/?key=7a8900504baaab57668c5a26e2');
const posts = await axios.get(
  'http://127.0.0.1:2368/ghost/api/content/posts/?key=7a8900504baaab57668c5a26e2&include=tags'
);
onMounted(() => {
  console.log('sgyfgiugfo', posts.data.posts);
});
const select = (e) => {
  console.log('select', e);
  Id.value = e;
  getContent();
};

const getContent = async () => {
  const content = await axios.get(
    `http://127.0.0.1:2368/ghost/api/content/posts/${Id.value}/?key=7a8900504baaab57668c5a26e2&include=tags`
  );
  console.log('content', content.data.posts[0].html);
  HTML.value = content.data.posts[0].html;
};
</script>

<style></style>
