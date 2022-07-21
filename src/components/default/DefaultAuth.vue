<template>
    <div class="default-auth">
        <div class="default-auth__content">
            <router-link class="button button--green" :to="{ name: 'auth-sign-in' }" type="button">Iniciar sesión</router-link>
            <router-link class="button button--purple" :to="{ name: 'auth-sign-up' }" type="button">Regístrate</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        setup() {},
    })
</script>

<style lang="scss">
    .default-auth {
        &__content {
            display: flex;
            align-items: center;
            justify-content: center;

            > a {
                margin-right: 0.5rem;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
