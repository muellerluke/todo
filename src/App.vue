<template>
  <div>
    <h1>Todo List</h1>
    <md-field>
      <md-input
        v-model="currentTodo"
        @keydown.enter="addTodo()"
        placeholder="Add a todo"
      ></md-input>
    </md-field>
    <md-list class="todos">
      <li v-for="todo in todos" :key="todo.id" @dblclick="editing(todo)">
        <md-checkbox
          @change="removeTodo(todo)"
          class="md-primary"
        ></md-checkbox>
        <p
          :class="[
            editedToDoId == todo.id ? 'notEditingClass' : 'editingClass',
          ]"
        >
          {{ todo.label }}
        </p>
        <input
          v-model="editedToDoText"
          :class="[
            editedToDoId == todo.id ? 'editingClass' : 'notEditingClass',
          ]"
          @keydown.enter="save(todo)"
          id="editInput"
        />

        <button
          :class="[
            editedToDoId == todo.id ? 'editingClass' : 'notEditingClass',
          ]"
          @click="save(todo)"
        >
          Save
        </button>
      </li>
    </md-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: "",
      editedToDoId: "-1",
      editedToDoText: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false,
      });
      this.currentTodo = "";
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    editing(todo) {
      this.editedToDoId = todo.id;
    },
    save(todo) {
      todo.label = this.editedToDoText;
      this.editedToDoId = "-1";
      this.editedToDoText = "";
    },
  },
};
</script>

<style>
p {
  margin-top: 8px !important;
  font-size: large;
  color: #ecf0f1;
}
.editingClass {
  display: inline-block;
  margin: 0px;
}
.notEditingClass {
  display: none;
}
.md-checkbox {
  margin: 0px !important;
  margin-top: 8px !important;
  margin-right: 5px !important;
  float: left;
  border: 2px solid #ecf0f1;
  color: #ecf0f1;
  border-radius: 0.25rem;
}
input {
  width: auto;
}
.md-input {
  text-align: center;
}
li {
  display: relative;
  height: 48px;
  border-radius: 0.25rem;
  background-color: #3498db;
  margin-bottom: 5px;
  padding: 5px;
}

input:focus {
  outline: none;
}

#editInput {
  color: #ecf0f1;
  margin-top: 8px;
  height: 24px;
  width: 200px;
  padding: 2px;
  font-size: large;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ecf0f1;
  border-radius: 0.25rem;
  text-align: center;
}
button {
  margin-left: 5px !important;
  border: none;
  height: 24px;
  background-color: #ecf0f1;
  border-radius: 0.25rem;
}
button:hover {
  background-color: #bdc3c7;
}
</style>
