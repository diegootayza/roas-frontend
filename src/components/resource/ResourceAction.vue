<template>
    <div class="resource-action">
        <div class="resource-action__spaces">
            <div class="resource-action__space">
                <slot name="left" />
            </div>
            <div class="resource-action__space">
                <slot name="center" />
            </div>
            <div class="resource-action__space">
                <slot name="right" />
            </div>
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
    .resource-action {
        width: 100%;

        &__spaces {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__space {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            > * {
                margin-right: 0.5rem;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
