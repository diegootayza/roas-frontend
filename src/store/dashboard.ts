import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('DashboardStore', {
    state: () => ({
        messages: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }),
    actions: {
        messageController(options: any) {},
    },
})
