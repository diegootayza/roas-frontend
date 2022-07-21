<template>
    <div class="list-course">
        <div class="list-course__content">
            <div v-for="(a, ia) in 8" :key="ia" class="list-course__item">
                <span>Curso</span>
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
    @import '@/scss/variables.scss';

    .list-course {
        max-height: 364px;
        padding-right: 1rem;
        overflow-y: scroll;

        &__content {
            display: grid;
            grid-row-gap: 1rem;
            grid-column-gap: 1rem;
            grid-template-columns: repeat(1, 1fr);
        }

        &__item {
            height: 60px;
            padding-left: 1rem;
            padding-right: 1rem;
            display: flex;
            align-items: center;
            border-radius: $border-radius;
            background-color: #f7f6f8;
        }
    }
</style>
