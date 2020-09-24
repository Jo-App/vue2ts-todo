<template>
  <v-row align="center">
    <v-spacer></v-spacer>
    <v-col cols="2" sm="2" md="2">
      <v-text-field
        outlined
        v-model="inputTitle"
        label="제목"
      ></v-text-field>
    </v-col>
    <v-col cols="2" sm="2" md="2">
      <v-text-field
        outlined
        v-model="inputContent"
        label="내용"
        append-outer-icon="mdi-plus"
        @click:append-outer="addItem()"
        @keyup.enter="addItem()"
      ></v-text-field>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'TodoInput'
})
export default class TodoInputVue extends Vue {
  public inputTitle: string = '';
  public inputContent: string = '';

  addItem():void {
    if(this.inputTitle !== "" && this.inputContent !== "" ) {
      this.$store.commit("addTodoItems", { inputTitle: this.inputTitle, inputContent: this.inputContent });
      this.clearInput();
    }
  };

  clearInput():void {
    this.inputTitle = "";
    this.inputContent = "";
  }
}
</script>
