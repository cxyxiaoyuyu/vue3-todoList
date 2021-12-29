<template>
  <div class="list">
    <li v-for="(item, index) in dones" :key="index">
      {{item}}
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from "vue";
import store from '@/store'

export default defineComponent({
  setup() {
    const dones = computed(()=>store.state.dones)
    return {dones};
  },
});
</script>

<style scoped></style>
