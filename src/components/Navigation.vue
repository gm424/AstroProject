<template>
  <div>
    <!-- <a href="#">链接</a>
    <a href="#">链接</a>
    <a href="#">链接</a> -->

    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <img src="../static/cd_logo_white.png" class="image" />
      <el-menu-item index="1">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>用户手册</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>服务中心</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="4">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { ElButton, ElMenu, ElCol, ElSubMenu, ElMenuItem, ElIcon, ElMenuItemGroup } from 'element-plus';
import 'element-plus/dist/index.css';
</script>

<style></style>
