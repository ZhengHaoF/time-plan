<template>
  <a-row>
    <a-col :span="12">
      <div>
        一天时间
      </div>
      <div class="pt20">
        <a-progress type="circle" :percent="runTime" :width="80"/>
      </div>
    </a-col>
    <a-col :span="12">
      <div>
        ToDo进度
      </div>
      <div class="pt20">
        <a-progress type="circle" :percent="todoPlan" :width="80"/>
      </div>
    </a-col>
    <a-col style="position: absolute;bottom: 20px;">
      <setting-two-tone class="set-icon" @click="setting"/>
    </a-col>
  </a-row>

  <a-modal v-model:visible="settingShow" title="设置" @ok="settingOk">
    <a-form layout="vertical">
      <a-form-item label="时间精度：">
        <a-select ref="select" v-model:value="userTimeInfo.step" style="width: 260px">
          <a-select-option value="10">10</a-select-option>
          <a-select-option value="20">20</a-select-option>
          <a-select-option value="30">30</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="每日工作时间：">
        <a-time-range-picker v-model:value="userTimeInfo.time" :minuteStep="Number(userTimeInfo.step)" format="HH:mm"/>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import {SettingTwoTone} from '@ant-design/icons-vue';
import {useStore} from '../../store/index.js';
import {storeToRefs} from 'pinia'
import {formatDate} from "../../tool/tool.js";


const settingShow = ref(false);
const store = useStore()
const {userTimeInfo,todoData} = storeToRefs(store)
const todoPlan = ref(0);
const runTime = ref(0);


const setting = function () {
  settingShow.value = true;

}
const settingOk = function () {
  settingShow.value = false;
}

const getTodoPlan = function (){
  let todoOkNum = 0;
  todoData.value.forEach((item,index)=>{
    if (item.ok){
      todoOkNum++
    }
  })
   return  Math.floor(todoOkNum / todoData.value.length  * 100)
}

//计算剩余时间，设定的每日开始时间，减去每日结束时间，就是今天总时长
const getRunTime = function (){
  return Math.floor((new Date().getTime() - new Date(formatDate(new Date())).getTime()) / (new Date(userTimeInfo.value.time[1].$d) - new Date(userTimeInfo.value.time[0].$d)) * 100 *10) / 10
}

onMounted(()=>{
  todoPlan.value = getTodoPlan()
  runTime.value = getRunTime();
  var timer = setInterval(function () {
    runTime.value = getRunTime();
  }, 5000)
})

watch(todoData.value, async (newQuestion, oldQuestion) => {
  todoPlan.value = getTodoPlan()
})


</script>

<style scoped>
.set-icon {
  font-size: 25px;
  border-radius: 25px;
}

.set-icon:hover {
  transition: background-color 1s;
  background-color: #1890ff;
}
</style>
