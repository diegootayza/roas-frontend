<template>
    <nav class="default-navbar">
        <div class="container default-navbar__container">
            <div class="default-navbar__space">
                <router-link :to="{ name: 'index' }">ROAS PRO</router-link>
                <!--  -->
            </div>
            <div class="default-navbar__space">
                <!--  -->
            </div>
            <div class="default-navbar__space">
                <default-auth />
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, ref } from 'vue'

    import { useAuthStore } from '@/store/auth'

    import DefaultAuth from '@/components/default/DefaultAuth.vue'

    export default defineComponent({
        components: {
            DefaultAuth,
        },
        setup() {
            const authStore = useAuthStore()

            return {
                user: computed(() => authStore.user),
            }
        },
    })
</script>

<style lang="scss">
    @import '@/scss/variables.scss';

    .default-navbar {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        height: 80px;
        width: 100%;
        background-color: $white;
        box-shadow: 0 0 8px 0 rgba(#000000, 0.2);

        &__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>
