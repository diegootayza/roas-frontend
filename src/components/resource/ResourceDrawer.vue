<template>
    <div class="resource-drawer" :class="{ 'is-active': modelValue }">
        <div class="resource-drawer__header">
            <div class="space">
                <span class="resource-drawer__title">{{ title }}</span>
            </div>
            <div class="space">
                <button class="button" type="button" @click="$emit('update:modelValue', false)">
                    <resource-icon :name="'mdiClose'" />
                </button>
            </div>
        </div>
        <div class="resource-drawer__content">
            <slot />
        </div>
        <div class="resource-drawer__footer">
            <div class="space">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, toRefs } from 'vue'

    import ResourceIcon from '@/components/resource/ResourceIcon.vue'

    export default defineComponent({
        components: {
            ResourceIcon,
        },
        props: {
            title: {
                type: String,
                default: 'Título',
            },
            modelValue: {
                type: Boolean,
                default: false,
            },
        },
        setup(props) {
            const { modelValue } = toRefs(props)
        },
    })
</script>

<style lang="scss">
    .resource-drawer {
        position: fixed;
        z-index: 2000;
        top: 100%;
        left: 0;
        height: 100vh;
        width: 100%;
        transition: top 0.2s ease;
        background-color: #0c0c0c;

        &__header {
            height: 60px;
            width: 100%;
            padding-left: 1rem;
            padding-right: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #1c1c1c;
        }

        &__content {
            height: calc(100vh - 120px);
            width: 100%;
            padding: 1rem 1rem 1rem 1rem;
            overflow-y: auto;
        }

        &__footer {
            height: 60px;
            width: 100%;
            padding-left: 1rem;
            padding-right: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #1c1c1c;
        }

        &__title {
            text-transform: uppercase;
        }

        &.is-active {
            top: 0;
        }
    }
</style>
