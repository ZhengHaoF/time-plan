<template>
  <a-row>
    <a-col :span="12">
      <div>
        一天时间
      </div>
      <div class="pt20">
        <a-progress type="circle" :percent="70" :width="80"/>
      </div>
    </a-col>
    <a-col :span="12">
      <div>
        ToDo进度
      </div>
      <div class="pt20">
        <a-progress type="circle" :percent="80" :width="80"/>
      </div>
    </a-col>
    <a-col style="position: absolute;bottom: 20px;">
      <setting-two-tone class="set-icon" @click="setting"/>
    </a-col>
  </a-row>

  <a-modal v-model:visible="settingShow" title="设置" @ok="settingOk">
    <a-form layout="vertical">
      <a-form-item label="时间精度：" >
        <a-select ref="select" v-model:value="timePrecision" style="width: 260px">
          <a-select-option value="10">10</a-select-option>
          <a-select-option value="20">20</a-select-option>
          <a-select-option value="30">30</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="每日工作时间：">
        <a-time-range-picker :minuteStep="Number(timePrecision)" format="HH:mm"/>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import {ref} from "vue";
const settingShow = ref(false);
import {SettingTwoTone} from '@ant-design/icons-vue';


const timePrecision = ref(10);
const setting = function () {
  settingShow.value = true;
}
const settingOk = function () {
  console.log(timePrecision.value)
  // settingShow.value = false;
}
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
