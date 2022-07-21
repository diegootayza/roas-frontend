import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'

import pinia from './plugins/pinia'
import router from './plugins/router'
import apollo from './plugins/apollo'

import App from './App.vue'

const Vue = createApp({
    setup() {
        provide(DefaultApolloClient, apollo)
    },
    render: () => h(App),
})

Vue.use(pinia)
Vue.use(router)

Vue.mount('#app')
