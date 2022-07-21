<template>
    <div class="dashboard">
        <dashboard-navbar />
        <dashboard-nav />
        <router-view />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import DashboardNav from '@/components/dashboard/DashboardNav.vue'
    import DashboardNavbar from '@/components/dashboard/DashboardNavbar.vue'

    export default defineComponent({
        components: {
            DashboardNav,
            DashboardNavbar,
        },
        setup() {
            return {}
        },
    })
</script>

<style lang="scss">
    @import '@/scss/variables.scss';

    .dashboard {
        position: relative;
        padding: 1rem 1rem 1rem calc(300px + 2rem);

        > main {
            min-height: calc(100vh - 2rem);
        }
    }
</style>
