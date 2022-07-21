<template>
    <div class="user-alert">
        <div class="user-alert__content" />
        <resource-empty />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import ResourceEmpty from '@/components/resource/ResourceEmpty.vue'

    export default defineComponent({
        components: {
            ResourceEmpty,
        },
        setup() {},
    })
</script>

<style lang="scss">
    @import '@/scss/variables.scss';

    .user-alert {
        width: 100%;
        border-radius: $border-radius;

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
