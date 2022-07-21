<template>
    <div class="user-password">
        <div class="user-password__content">
            <span>Cambiar contraseña</span>
            <button class="button button--green" type="button">Cambiar</button>
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
    @import '@/scss/variables.scss';

    .user-password {
        width: 100%;
        margin-top: 2rem;
        padding: 1rem;
        border-radius: $border-radius;
        background-color: #f7f6f8;

        &__content {
            display: flex;
            align-items: center;
            justify-content: space-between;

            > span {
                color: #909090;
            }
        }
    }
</style>
