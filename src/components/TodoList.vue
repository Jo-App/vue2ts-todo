<template>
  <v-row align="center">
    <v-spacer></v-spacer>
    <v-col cols="6" sm="6" md="6">
    {{todoList}}
    <TodoInput></TodoInput>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Content</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in todoList" :key="item.id"
              @click="checkTodoItem(item.id)"
              :class="{ active: item.status }"
            >
              <td>{{ item.title }}</td>
              <td>{{ item.content }}</td>
              <td>
                <v-icon @click="removeItem($event, item.id)" style="color:red;">mdi-delete</v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import TodoInput from './TodoInput.vue';

@Component({
  name: 'TodoList',
  components: {
    TodoInput,
  },
})
export default class TodoListVue extends Vue {

  get todoList(): [object] {
    return this.$store.state.todo.todoList;
  }

  private removeItem(e: any, id: number): void {
    e.stopPropagation(); //이벤트 전파 방지;
    this.$store.commit('removeTodoItem', { id });
  }

  private checkTodoItem(id: number): void {
    this.$store.commit('checkTodoItem', { id });
  }
}
</script>

<style scoped>
.active {
  text-decoration:line-through;
  background-color: rgb(167, 213, 60);
}

.active2{
  background-color: rgb(167, 213, 60);
}
</style>