<template>
  <div class="home">

    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counter.title }}:</h3>

    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">--</button>
      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input
        v-model="counter.title"
        v-autofocus
        type="text"
      >
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
// import { useCounter } from '@/use/useCounter';
import { useCounterStore } from '@/stores/counter'
// const counter = ref(0),
//       counterTitle = ref('Title')

const appTitle = 'My app';

// const { counterData, increaseCounter, decreaseCounter, oddOrEven } = useCounter()
const counter = useCounterStore()

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

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>