import {defineStore} from 'pinia'
import dayjs from "dayjs";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main', {
    state() {
        return {
            userTimeInfo: {
                time:[],
                //开始时间
                start: new Date(),
                //结束时间
                end: new Date(),
                //跨度
                step: 10
            },
            todoData:
                [{
                    did: "4bd71d56ad05bf3bf1640f45ddbb6c24",
                    title: 'Ant Design Title 1',
                    text: "Ant Design, a design language for background applications, is refined by Ant UED Team",
                    href: "https://www.antdv.com/",
                    ok:true,
                }, {
                    did: "4a13ba98e804b4887d5b55a1ea02e317",
                    title: 'Ant Design Title 2',
                    text: "Ant Design, a design language for background applications, is refined by Ant UED Team",
                    href: "https://www.antdv.com/",
                    ok:true,
                }, {
                    did: "d0eaff82a2db4a199842f23ecda650be",
                    title: 'Ant Design Title 666',
                    text: "Ant Design, a design language for background applications, is refined by Ant UED Team",
                    href: "https://www.antdv.com/",
                    ok:false,
                }, {
                    did: "708290a347e992aab9f346cd045ddfe7",
                    title: 'Ant Design Title 4',
                    text: "Ant Design, a design language for background applications, is refined by Ant UED Team",
                    href: "https://www.antdv.com/",
                    ok:true,
                }],
            timeLineData: [
                {
                    time: "AM 09:00",
                    todo: ["4bd71d56ad05bf3bf1640f45ddbb6c24", "d0eaff82a2db4a199842f23ecda650be"]
                },
                {
                    time: "AM 10:00",
                    todo: ["4a13ba98e804b4887d5b55a1ea02e317", "708290a347e992aab9f346cd045ddfe7"]
                },
            ]

        }
    },
})
