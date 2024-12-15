<template>
  <div class="posts">
    <h1>Post - detail</h1>
    <div>
      <p>Display id: {{ $route.params.id }} here!</p>
      <button @click="goBack">&lt; Back</button>
      <div>
        <button @click="showPostId">Show post id</button>
      </div>
      <div>
        <button @click="goHome">go in 3sec</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';


const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert('id: ' + route.params.id)
}

const goBack = () => {
  router.back()
}
const goHome = () => {
  setTimeout(() => {
    router.push({name: 'home'})
  }, 3000);
}
</script>
