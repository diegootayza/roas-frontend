<template>
    <form class="resource-form" @submit.prevent="submitForm()">
        <slot />
    </form>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        setup(props, { emit }) {
            const submitForm = () => {
                emit('process')
            }

            return {
                submitForm,
            }
        },
    })
</script>

<style lang="scss">
    .resource-form {
        width: 100%;
        display: grid;
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
        grid-template-columns: repeat(1, 1fr);

        > * {
            width: 100%;
        }
    }
</style>
