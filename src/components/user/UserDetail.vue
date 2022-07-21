<template>
    <div class="user-detail">
        <div class="user-detail__content">
            <h5>Nombres y apellidos</h5>
            <p>{{ user.name }} {{ user.surname }}</p>
            <h5>Corre electronico</h5>
            <p>{{ user.email }}</p>
            <h5>WhatsApp</h5>
            <p>{{ user.country.codePhone }}{{ user.phone }}</p>
            <button class="button button--green" type="button">Editar mis datos</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent } from 'vue'

    import { useAuthStore } from '@/store/auth'

    export default defineComponent({
        setup() {
            const authStore = useAuthStore()

            return {
                user: computed(() => authStore.user),
            }
        },
    })
</script>

<style lang="scss">
    .user-detail {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            > h5 {
                margin-bottom: 0.5rem;
            }

            > p {
                margin-bottom: 1rem;
            }
        }
    }
</style>
