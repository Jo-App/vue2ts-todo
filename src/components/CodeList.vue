<template>
  <v-row align="center">
    <v-spacer></v-spacer>
    코드 목록
    <v-col cols="6" sm="6" md="6">
    <v-btn
      @click="getCodeList()"
    >코드목록 불러오기</v-btn>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">No</th>
              <th class="text-left">CodeId</th>
              <th class="text-left">CodeName</th>
              <th class="text-left">CreatedDate</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in codeList" :key="item.id"
              @click="checkTodoItem(item.id)"
              :class="{ active: item.status }"
            >
              <td>{{ item.No }}</td>
              <td>{{ item.CodeId }}</td>
              <td>{{ item.CodeName }}</td>
              <td>{{ item.CreatedDate }}</td>
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

@Component({
  name: 'codeList',
  components: {
  },
})

export default class CodeListVue extends Vue {

  get codeList(): [object] {
    return this.$store.state.code.codeList;
  }

  private getCodeList(): void {
    this.$store.dispatch('CODE_LIST');
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