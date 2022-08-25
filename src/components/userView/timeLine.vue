<template>

  <a-row>
    <a-col :span="24">
      <a-timeline>
        <a-timeline-item>AM 09:00</a-timeline-item>
        <a-timeline-item>AM 10:00</a-timeline-item>
        <a-timeline-item>AM 11:00
          <br>
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-checkbox></a-checkbox>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-timeline-item>
        <a-timeline-item>AM 12:00</a-timeline-item>
        <a-timeline-item>PM 01:00</a-timeline-item>
        <a-timeline-item>
          PM 02:00
          <br>
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-checkbox></a-checkbox>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-timeline-item>
        <a-timeline-item>PM 03:00</a-timeline-item>
        <a-timeline-item>PM 04:00</a-timeline-item>
        <a-timeline-item>PM 05:00</a-timeline-item>
        <a-timeline-item>PM 06:00</a-timeline-item>
        <a-timeline-item>PM 07:00</a-timeline-item>
        <a-timeline-item>PM 08:00</a-timeline-item>
      </a-timeline>
    </a-col>
  </a-row>



</template>

<script setup>
const data = [{
  title: 'Ant Design Title 1',
}, {
  title: 'Ant Design Title 2',
}, {
  title: 'Ant Design Title 3',
}, {
  title: 'Ant Design Title 4',
}];
</script>

<style scoped>

</style>
