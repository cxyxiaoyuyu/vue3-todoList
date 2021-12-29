<template>
  <div class="list">
    <li v-for="(item, index) in deletes" :key="index">
      {{item}}
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from "vue";
import store from '@/store'

export default defineComponent({
  setup() {
    const deletes = computed(()=>store.state.deletes)
    return {deletes};
  },
});
</script>

<style scoped></style>
