<template>
  <div class="ct-Todo">
    <form class="ct-Todo-input">
      <input
        class="ct-Todo-input-field"
        v-model="input"
        type="text"
        v-on:input="updateInput"
        placeholder="What is it that needs to be done?">
      <button type="submit" name="button" v-on:click = "addTask">Add</button>
    </form>
    <div class="ct-Todo-container">
      <div class="ct-Todo-list">
        <h1>To Do</h1>
        <ol>
          <li v-for="(item, index) in todo">
          <input class="ct-task-item" type="checkbox" v-on:change = "completeTask">{{item.name}}</li>
        </ol>
      </div>
      <div class="ct-Todo-list">
        <h1>Done</h1>
        <ol>
          <li v-for="(item, index) in done">{{ item.name }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      input: this.$store.state.input,
      todo: this.$store.state.todo,
      done: this.$store.state.done
    }
  },
  methods: {
    addTask () {
      this.$store.dispatch({
        type: 'addTask'
      })
      this.input = ''
      console.log('button pressed')
    },
    updateInput (context) {
      this.$store.dispatch({
        type: 'updateInput',
        typedText: context.target.value
      })
      console.log('input updated')
    },
    completeTask (context) {
      this.$store.dispatch({
        type: 'completeTask',
        checked: context.target.checked,
        taskName: context.target.parentElement.textContent
      })
      context.target.checked = false
      console.log('update todo')
    },

    remove () {
      //
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .ct-Todo {
    padding: 4rem 0;
    background: #FAFAFA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .ct-Todo-input-field {
      width: 200px;
    }

    .ct-task-item {
      vertical-align: middle;
      margin-right: 4px;
    }

    &-container {
      display: flex;
    }

    &-list {
      display: flex;
      flex-direction: column;
      padding: 2rem 3rem;

      h1 {
        font-size: 1rem;
        font-weight: normal;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
    }
  }
</style>
