<template>
  <v-row align="center" class="pa-10">
    <v-spacer></v-spacer>
    <v-col cols="12" sm="12" md="12">
    {{todoList}}
    <TodoInput></TodoInput>
      <!-- <v-simple-table>
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
      </v-simple-table> -->

      <v-data-table
        :headers="headers"
        :items="todoList"
        class="elevation-1"
        hide-default-footer
        item-key="id"
        @click:row="checkTodoItem($event)"
      >
        <template v-slot:[`item.id`]="{ item }">
          <v-icon v-if="!item.status">sentiment_dissatisfied</v-icon>
          <v-icon v-if="item.status">sentiment_very_satisfied</v-icon>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-icon @click="removeItem($event, item.id)" style="color:red;">mdi-delete</v-icon>
        </template>
      </v-data-table>
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

  private headers: object = [
    { text: '', value: 'id', align: 'start', class: 'font-weight-bold subtitle-2 header-style', width: "10%"},
    { text: 'Title', value: 'title', align: 'start', class: 'font-weight-bold subtitle-2 header-style' },
    { text: 'Content', value: 'content', align: 'start', class: 'font-weight-bold subtitle-2 header-style' },
    { text: '', value: 'status', align: 'start', class: 'font-weight-bold subtitle-2 header-style' },
  ];


  private removeItem(e: any, id: number): void {
    e.stopPropagation(); 
    //이벤트 전파 방지;
    this.$store.commit('removeTodoItem', { id });
  }

  private checkTodoItem(target: any): void {
    let id = target.id;
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