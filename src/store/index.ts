import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: ['a','b','c'] as String[],
    dones: ['d','e'] as String[],
    deletes: ['f','g'] as String[]
  },
  mutations: {
    add(state,value:String){
      state.todos.push(value)
    },
    delete(state,index){
      const item = state.todos[index]
      state.todos.splice(index,1) 
      state.deletes.push(item)
    },
    done(state,index){
      const item = state.todos[index]
      state.todos.splice(index,1) 
      state.dones.push(item)
    }
  },
  actions: {
  },
  modules: {
  }
})
