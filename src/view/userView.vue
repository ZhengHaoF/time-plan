<template>
  <a-row>
    <a-col :span="4">
      <div class="list-top">
        TimePlan
      </div>
      <div class="list-body tc">
        <time-plan></time-plan>
      </div>
    </a-col>
    <a-col :span="6">
      <div class="list-top">
        时间线
      </div>
      <div class="list-body" style="background-color: white">
        <time-line></time-line>
      </div>
    </a-col>
    <a-col :span="7">
      <div class="list-top">
        ToDo
      </div>
      <div class="list-body">
        <todo></todo>
      </div>
    </a-col>
    <a-col :span="7">
      <div class="list-top">
        笔记
      </div>

      <div class="list-body" style="background-color: white;">
        <note-card></note-card>
      </div>
    </a-col>
  </a-row>

</template>

<script setup>
import NoteCard from "../components/userView/noteCard.vue";
import TimeLine from "../components/userView/timeLine.vue";
import Todo from "../components/userView/todo.vue";
import TimePlan from "../components/userView/timePlan.vue";

</script>

<style scoped>
.list-top {
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  background-color: #bae7ff;
  width: 100%;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

.list-body {
  background-color: #e6f7ff;
  height: calc(100vh - 50px);
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  overflow: auto;
}

</style>
