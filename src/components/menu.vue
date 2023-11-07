<template>
  <div class="column side">
    <!-- <el-button @click="handleClick">asdf</el-button> -->
    <el-col>
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-sub-menu v-for="(item, index) in data" :key="index" :index="index">
          <template #title>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="(it, idx) in childrenMenu[index]"
            :key="idx"
            :index="index + '-' + idx"
            @click="showContent(it)"
            >{{ it.title }}</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </el-col>
    <!-- <ul class="menu">
      <li v-for="(item, index) in data" :key="index">
        <a @click="showMenu(item.name, index)">{{ item.name }}</a>
        <div v-if="item.visable">
          <ul v-for="(it, idx) in children" :key="idx" class="sub-menu">
            <li>
              <a @click="showContent(it)">{{ it.title }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { ElButton, ElMenu, ElCol, ElSubMenu, ElMenuItem, ElIcon, ElMenuItemGroup } from 'element-plus';
import 'element-plus/dist/index.css';
const children = ref([]);
const childrenMenu = ref([]);
const visable = ref([]);
const data = ref([]);
const Id = ref();
const emit = defineEmits(['select']);
const props = defineProps({
  menu: Object,
});
const posts = await axios.get(
  'http://127.0.0.1:2368/ghost/api/content/posts/?key=7a8900504baaab57668c5a26e2&include=tags'
);
onMounted(() => {
  console.log('menu', props.menu);
  props.menu.data.tags.forEach((element, index) => {
    data.value.push(Object.assign(element, { visable: false }));
    showMenu(element.name, index);
  });

  console.log('data', data.value);
});
const showMenu = (tag, index) => {
  console.log('showMenu', data.value);
  data.value.forEach((item, idx) => {
    if (index == idx) {
      data.value[index].visable = !data.value[index].visable;
    } else {
      data.value[idx].visable = false;
    }
  });

  showChildren(tag);
};
const showChildren = (item) => {
  children.value = posts.data.posts
    .filter((post) => post.tags.some((tag) => tag.name === item))
    .map((post) => ({
      title: post.title,
      id: post.id,
    }));
  childrenMenu.value.push(children.value);
  console.log('childrenMenu', childrenMenu.value);
};
const showContent = (item) => {
  console.log('select tag', item.id);
  emit('select', item.id);
};
const handleOpen = (e) => {
  console.log('handleOpen', e);
};
const handleClose = (e) => {
  console.log('handleClose', e);
};
</script>

<style></style>
