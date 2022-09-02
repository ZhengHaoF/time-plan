<template>

  <a-row>
    <a-col :span="1">
      <div class="time-line" :style="'height: calc(' + runTime + '% - 30px);background-color:' + (runTime === 100?'#52c41a':'#1890ff')"> </div>
      <span>{{runTime}}</span>
    </a-col>
    <a-col :span="23">
      <a-timeline>
        <a-timeline-item v-for="(item,index) in data ">
          {{ item.time }}
          <br>
          <a-list item-layout="horizontal" :data-source="item.todo">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta :description="item.text">
                  <template #title>
                    <a :href="item.href">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-checkbox v-model:checked="item.ok"></a-checkbox>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-timeline-item>
      </a-timeline>
    </a-col>
  </a-row>


</template>

<script setup>

import {onMounted, ref, watch} from "vue";
import {useStore} from '../../store/index.js';
import {storeToRefs} from 'pinia'
import {formatDate} from "../../tool/tool.js";

const store = useStore()
const {todoData, timeLineData,userTimeInfo} = storeToRefs(store);
const runTime = ref(0);
let data = ref([
  // {
  //   time:"AM 09:00",
  //   todo:[
  //     {
  //       title: 'Ant Design Title 3',
  //       text: "Ant Design, a design language for background applications, is refined by Ant UED Team",
  //       href: "https://www.antdv.com/",
  //       ok:false
  //     },
  //     {
  //       title: 'Ant Design Title 4',
  //       text: "Ant Design, a design language for background applications, is refined by Ant UED Team",
  //       href: "https://www.antdv.com/",
  //       ok:true
  //     }
  //   ]
  // },
]);

const getDataTree = function () {
  //生成目录树
  data.value = [];
  timeLineData.value.forEach((timeLineItem, index) => {
    data.value.push({
      time: timeLineItem.time,
      todo: [],
    })
    timeLineItem.todo.forEach((timeInfoTodoItem, index1) => {
      todoData.value.forEach((todoInfo, index2) => {
        if (todoInfo.did === timeInfoTodoItem) {
          data.value[index]['todo'].push(todoInfo)
        }
      })
    })
  })
}

//计算剩余时间，设定的每日开始时间，减去每日结束时间，就是今天总时长
const getRunTime = function (){
  return Math.floor((new Date().getTime() - new Date(formatDate(new Date())).getTime()) / (new Date(userTimeInfo.value.time[1].$d) - new Date(userTimeInfo.value.time[0].$d)) * 100 *10) / 10
}


onMounted(() => {
  runTime.value = getRunTime();
  let timer = setInterval(function () {
    runTime.value = getRunTime();
  }, 5000)
  getDataTree();
})

watch(todoData.value, async (newQuestion, oldQuestion) => {
  getDataTree();
})


</script>

<style scoped>
.time-line{
  border-radius: 5px  ;
  background-color: #1890ff;
  width: 5px;
  transition: all 0.5s;
}
</style>
