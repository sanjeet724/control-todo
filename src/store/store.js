import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  user: 'Sanjeet Tripathy',
  input: '',
  todo: [
    {
      id: 1,
      name: 'Finish the project',
      completed: false
    },
    {
      id: 2,
      name: 'Celebrate',
      completed: false
    }
  ],
  done: [
    {
      id: 1,
      name: 'Interview at Control',
      completed: true
    }
  ],
  todoTaskCount: 2,
  doneTaskCount: 1
}

const getters = {
  user (state) {
    return state.user
  }
}

const actions = {
  updateInput (context, actionObject) {
    context.commit(actionObject.type, actionObject.typedText)
  },
  addTask (context, actionObject) {
    context.commit(actionObject.type)
  },
  completeTask (context, actionObject) {
    context.commit(actionObject.type, actionObject.taskName)
  }
}

const mutations = {
  addTask () {
    state.todo.push({
      id: state.todo.todoTaskCount++,
      name: state.input,
      completed: false
    })
    console.log('Commiting adding of task')
  },
  updateInput (state, typedText) {
    state.input = typedText
    console.log('Commiting input update')
  },
  completeTask (state, taskName) {
    const doneTask = state.todo.find(item => item.name === taskName)
    const index = state.todo.findIndex(item => item.name === taskName)
    state.todo.splice(index, 1)
    state.done.push(doneTask)
    console.log('Completing the task')
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
