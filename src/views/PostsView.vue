<template>
  <div class="posts">
    <h1>Posts</h1>
    <div>
     <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`postDetail/${post.id}`">{{ post.title }}</router-link>
      </li>
     </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

const counterData = reactive({
  count: 0,
  title: 'About'
})

const posts = ref([
  {
    id: 'id1',
    title: 'post 1'
  },
  {
    id: 'id2',
    title: 'post 2'
  },
  {
    id: 'id3',
    title: 'post 3'
  },
  {
    id: 'id4',
    title: 'post 4'
  },

])
</script>
