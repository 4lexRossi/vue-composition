<template>
   <teleport to=".modals-container">
    <div
      class="modal"
      v-if="modelValue"
    >
      <h1>{{ title }}</h1>

      <slot />
      <h1>{{ userData.name }}</h1>
      <button @click="handleButtonClick">Close</button>
    </div>
    </teleport>
</template>

<script setup>
import { inject } from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'no title'
  }
})

const emit = defineEmits(['update:modelValue'])

const handleButtonClick = () =>{
  emit('update:modelValue', false)
}

const userData = inject('userData')
// console.log(props.title)

</script>
<style>
.modal {
  background: beige;
  color: black;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>