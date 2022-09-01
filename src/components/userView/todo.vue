<template>
  <a-list item-layout="horizontal" :data-source="todoData">
    <template #renderItem="{item,index}">
      <a-list-item class="TodoItem" key="index">
        <a-list-item-meta :description="item.text" class="list-item">
          <template #title>
            <a-row>
              <a-col :span="19">
                <a :href="item.href">{{ item.title }}</a>
              </a-col>
              <a-col :span="5">
                <a-row>
                  <a-col :span="12">
                    <!--           编辑按钮-->
                    <a-button class="del-button" size="small" type="primary" shape="circle">
                      <template #icon>
                        <edit-outlined/>
                      </template>
                    </a-button>
                  </a-col>
                  <a-col :span="12">
                    <!--            删除按钮-->
                    <a-button class="del-button" size="small" type="primary" danger shape="circle"
                              @click="delTodo(index)">
                      <template #icon>
                        <delete-outlined/>
                      </template>
                    </a-button>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
          </template>
          <template #avatar>
            <a-checkbox v-model:checked="item.ok"></a-checkbox>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
  <div class="add-button" @click="addTodo">
    <div style="width: 100%;text-align: center;font-size: 25px">
      <plus-outlined/>
    </div>
  </div>
</template>

<script setup>
import {PlusOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons-vue';
import { useStore } from '../../store/index.js';
import {storeToRefs} from 'pinia'
const store = useStore()
const {todoData} = storeToRefs(store)

/**
 * 添加Todo
 */
const addTodo = function () {
  todoData.value.push({
    title: 'Ant Design Title 1',
    text: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    href: "https://www.antdv.com/",
  })
}

/**
 * 删除Todo
 */
const delTodo = function (index) {
  let dom = document.getElementsByClassName("TodoItem")[index];
  let height = dom.offsetHeight
  let NextDom;
  //渐隐效果
  dom.classList.add("fade-out")
  //一秒后执行

  setTimeout(() => {
    todoData.value.splice(index, 1)
    NextDom = document.getElementsByClassName("TodoItem")[index]||null;

    dom.classList.remove("fade-out")
    if (NextDom != null){
      NextDom.style.cssText = `margin-top: ${height}px;opacity:1!important;transition: all 0s ;`
    }
    setTimeout(() => {
      if (NextDom != null){
        NextDom.style.cssText = `transition: all 1s ease 0.05s;`
      }

    }, 50);
  }, 850);
}


</script>

<style scoped>
.add-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  background-color: #1890ff;
  border-radius: 50px;
  display: flex;
  opacity: 0.7;
  align-items: center;
  color: white;
  text-align: center;
  cursor: pointer;
}

.add-button:hover {
  transition: background-color 1s ease-in-out;
  background-color: #1375cf;
}

.list-item:hover .del-button {
  transition: all 1s;
  opacity: 1;
}

.list-item {
  animation: inTo 1s;
}

.list-item-out {
  animation: outTo 1s;
}

.del-button {
  opacity: 0;
}
/**/
.fade-out{
  transition: all 1s;
  opacity: 0;

}
.fade-in{

}
.TodoItem{
  /*position: relative;*/

}

</style>
