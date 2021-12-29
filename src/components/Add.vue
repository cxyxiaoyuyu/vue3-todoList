<template>
  <div class="list">
    <h5>待办事项</h5>
    <li v-for="(item,index) in todos" :key="item+index">
      <el-checkbox @change="done(index)" :label="item"></el-checkbox>
      <el-button type="primary" size="mini" @click="del(index)">删除</el-button>
    </li> 
  </div>

  <div class="add">
    <h5>添加待办事项</h5>
    <el-input v-model="inputValue" @keyup.enter="add" placeholder="添加待办事项"></el-input>
  </div>
  
</template>

<script lang="ts">
import { defineComponent,ref ,computed} from 'vue'
import store from '@/store'

export default defineComponent({
  setup () {
    const inputValue = ref('') 

    const checked = ref(true)

    const todos = computed(()=>store.state.todos)

    const add = () => {
      store.commit('add',inputValue.value)
      inputValue.value = ''
    }

    const done = (index:Number) => {
      store.commit('done',index) 
    }

    const del = (index:Number) => {
      store.commit('delete',index) 
    }
    return {inputValue,todos,checked,add,done,del}
  }
})
</script>

<style scoped>
h5 {
  margin: 10px 0;
}

</style>