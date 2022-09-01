<template>

  <a-row>
    <a-col :span="24">
      <a-timeline>
        <a-timeline-item v-for="(item,index) in data ">
          {{item.time}}
          <br>
          <a-list item-layout="horizontal" :data-source="item.todo">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
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

import {onMounted, reactive,ref} from "vue";
import { useStore } from '../../store/index.js';
import {storeToRefs} from 'pinia'

const store = useStore()
const {todoData,timeLineData} = storeToRefs(store);

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

onMounted(()=>{
  //生成目录树
  data.value = [];
  timeLineData.value.forEach((timeLineItem,index)=>{
  data.value.push({
      time:timeLineItem.time,
      todo:[],
    })
    timeLineItem.todo.forEach((timeInfoTodoItem,index1)=>{
      todoData.value.forEach((todoInfo,index2)=>{
        if (todoInfo.did === timeInfoTodoItem){
          data.value[index]['todo'].push(todoInfo)
        }
      })
    })
  })

  console.log(data)

})


</script>

<style scoped>

</style>
