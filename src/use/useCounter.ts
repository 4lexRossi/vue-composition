import { computed, nextTick, reactive, watch } from 'vue';

const counterData = reactive({
  count: 0,
  title: 'My counter'
})

export function useCounter() {

  watch(() => counterData.count, (newValue, oldValue) => {
    if (newValue === 20) {
      alert('20')
    }
  })

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) {
      return 'even'
    }
    return 'odd'
  })
  const increaseCounter = async amount => {
    counterData.count += amount
    await nextTick(() => {
      console.log('asd')
    })
  }

  const decreaseCounter = amount => {
    counterData.count -= amount
  }

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}