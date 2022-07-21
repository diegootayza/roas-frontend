<template>
    <nav class="dashboard-nav">
        <div class="dashboard-nav__items">
            <router-link class="dashboard-nav__item" :to="{ name: 'dashboard' }">Panel de control</router-link>
            <router-link class="dashboard-nav__item" :to="{ name: 'dashboard-course' }">Cursos</router-link>
            <router-link class="dashboard-nav__item" :to="{ name: 'dashboard-country' }">Paises</router-link>
            <router-link class="dashboard-nav__item" :to="{ name: 'dashboard-country' }">Paises</router-link>
            <router-link class="dashboard-nav__item" :to="{ name: 'dashboard' }">Usuarios</router-link>
        </div>
    </nav>
</template>

<script lang="ts">
    import { PropType, defineComponent, defineProps } from 'vue'

    interface IUser {
        name: string
        surname: string
        email: string
    }

    const props = defineProps({
        idUser: { type: String as PropType<string> },
        menu: { type: String as PropType<string> },
        nameModule: { required: true, type: String as PropType<string> },
        user: { type: Object as PropType<IUser> },
    })

    export default defineComponent({
        setup() {},
    })
</script>

<style lang="scss">
    @import '@/scss/variables.scss';

    .dashboard-nav {
        position: fixed;
        top: 1rem;
        left: 1rem;
        height: calc(100vh - 2rem);
        width: 300px;
        border-radius: $border-radius;
        background-color: $white;
        box-shadow: 0 0 8px 0 rgba($black, 0.2);

        &__items {
            padding: 1rem 1rem;
            display: grid;
            grid-row-gap: 1rem;
            grid-column-gap: 1rem;
            grid-template-columns: repeat(1, 1fr);
        }

        &__item {
            height: 60px;
            padding-left: 1rem;
            padding-right: 1rem;
            display: flex;
            align-items: center;
            background-color: #f7f6f8;
        }
    }
</style>
