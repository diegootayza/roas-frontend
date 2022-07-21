<template>
    <button class="resource-button" :class="classes" :type="type" @click="emitController($event)">
        <resource-icon v-if="icon" :name="icon" />
        <span v-if="text">{{ text }}</span>
    </button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import ResourceIcon from '@/components/resource/ResourceIcon.vue'

    export default defineComponent({
        components: {
            ResourceIcon,
        },
        props: {
            classes: { required: false, type: [Boolean, String] },
            type: { required: true, type: String } as any,
            icon: { required: false, type: [Boolean, String] },
            text: { required: false, type: [Boolean, String] },
        },
        setup(props, { emit }) {
            const emitController = (e: MouseEvent) => {
                e.stopImmediatePropagation()

                emit('click', e)
            }

            return { emitController }
        },
    })
</script>

<style lang="scss">
    @import '@/scss/variables.scss';

    .resource-button {
        cursor: pointer;
        height: 40px;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $black;
        border-radius: $border-radius;
        background-color: $white;

        > * {
            margin-right: 0.5rem;

            &:last-child {
                margin-right: 0;
            }
        }

        > span {
            display: block;
            text-transform: uppercase;
        }

        &.is-dense {
            height: 30px;

            > svg {
                height: 1rem;
                width: 1rem;
            }
        }
    }
</style>
