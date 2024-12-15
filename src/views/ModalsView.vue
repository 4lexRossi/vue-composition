<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
       Show Dark
       <input type="checkbox" v-model="darkModal" />
      </label>
    </div>
    <button @click="showModal=true">Show Modal</button>
    <component
      v-model="showModal"
      title="Via prop"
      :is="darkModal ? ModalDark: Modal"
    >
      <template #title>My new Title</template>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus hic alias veniam ipsa magni. Dignissimos, perspiciatis ducimus a rerum pariatur illum est ex voluptates doloribus eum officia eaque. Esse, sunt.</p>
    </component>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';

const darkModal = ref(false)
const showModal = ref(false)
</script>
