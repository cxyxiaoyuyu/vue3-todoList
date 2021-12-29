<template>
 <div class="container">
  <h1>ToDoList</h1>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="待办事项" name="add">
      <add></add>
    </el-tab-pane>

    <el-tab-pane label="已完成" name="finish">
      <done></done>
    </el-tab-pane>

    <el-tab-pane label="已删除" name="delete">
      <delete></delete> 
    </el-tab-pane>
  </el-tabs>
 </div>
</template>

<script lang="ts">
import {ref } from 'vue'
import Add from '@/components/Add.vue'
import Delete from '@/components/Delete.vue'
import Done from '@/components/Done.vue'
export default {
  components: {Add,Delete,Done},
  setup(){
    const activeName = ref('add')
    return {activeName}
  }

}
</script>

<style lang="scss">
.container {
  width: 60%;
  margin: 30px auto;
}
.list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  min-height: 40px;
}
</style>