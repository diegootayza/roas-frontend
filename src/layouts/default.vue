<template>
    <div class="default">
        <default-navbar />

        <router-view />

        <!-- <default-footer /> -->
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue'

    import DefaultFooter from '@/components/default/DefaultFooter.vue'
    import DefaultNavbar from '@/components/default/DefaultNavbar.vue'

    import { useAuthStore } from '@/store/auth'

    export default defineComponent({
        components: {
            // DefaultFooter,
            DefaultNavbar,
        },
        setup() {
            const authStore = useAuthStore()

            const drawer = ref(false)

            return {
                drawer,
            }
        },
    })
</script>

<style lang="scss">
    .default {
        position: relative;

        > main {
            margin-top: 80px;
            min-height: calc(100vh - 80px);
        }
    }
</style>
