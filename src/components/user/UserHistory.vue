<template>
    <div class="user-course">
        <div class="user-course__content">
            <list-course />
        </div>
        <!-- <resource-empty /> -->
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import ResourceEmpty from '@/components/resource/ResourceEmpty.vue'
    import ListCourse from '@/components/list/ListCourse.vue'

    export default defineComponent({
        components: {
            ListCourse,
            ResourceEmpty,
        },
        setup() {},
    })
</script>

<style lang="scss">
    .user-course {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__content {
            width: 100%;
        }

        &__items {
        }

        &__item {
        }
    }
</style>
