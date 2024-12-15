<template>
   <teleport to=".modals-container">
    <div
      class="dark-modal"
      v-if="modelValue"
    >
      <h1>{{ title }}</h1>

      <slot />

      <button @click="handleButtonClick">Close</button>
    </div>
    </teleport>
</template>

<script setup>
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

console.log(props.title)
</script>
<style>
.dark-modal {
  background: #333;
  color: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>