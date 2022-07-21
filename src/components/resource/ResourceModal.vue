<template>
    <div class="resource-modal" :class="{ 'is-active': active }">
        <div class="resource-modal__content">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        props: {
            active: {
                type: Boolean,
                required: true,
            },
        },
        setup() {},
    })
</script>

<style lang="scss">
    @import '@/scss/variables.scss';

    .resource-modal {
        position: fixed;
        z-index: 2000;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease;
        background-color: rgba(#000000, 0.6);

        &__content {
            transform: scale(0.8);
            width: 100%;
            max-width: 480px;
            transition: all 0.2s ease;
        }

        &.is-active {
            opacity: 1;
            visibility: visible;

            .resource-modal {
                &__content {
                    transform: scale(1);
                }
            }
        }
    }
</style>
