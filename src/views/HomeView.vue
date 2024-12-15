<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>
    <p>this counter id {{ oddOrEven }}</p>
    <div>
      edit counter title:
      <input v-model="counterData.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus';
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated
} from 'vue';
import { useCounter } from '@/use/useCounter';
// const counter = ref(0),
//       counterTitle = ref('Title')

const appTitle = 'My app';

const { counterData, increaseCounter, decreaseCounter, oddOrEven } = useCounter()

onMounted(() => {
  console.log('do something to counter');
});

onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMounted');
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});

onUpdated(() => {
  console.log('onUpdated');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

onUnmounted(() => {
  console.log('onUnmounted');
});

onActivated(() => {
  console.log('onActivated');
});

onDeactivated(() => {
  console.log('onDeactivated');
});
</script>
