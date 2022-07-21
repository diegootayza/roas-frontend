<template>
    <div class="resource-select">
        <label for="">{{ label }}</label>
        <select :value="value" @input="emitController($event)">
            <option v-for="(a, ia) in items" :key="ia" :value="a.id">{{ a.name }}</option>
        </select>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        props: {
            label: { required: true, type: String },
            placeholder: { required: true, type: String },
            items: { required: true, type: Array } as any,
            value: { required: true, type: String },
        },
        setup(props, { emit }) {
            const emitController = (e: Event) => {
                emit('select', (e.target as HTMLInputElement).value)
            }

            return {
                emitController,
            }
        },
    })
</script>

<style lang="scss">
    @import '@/scss/variables.scss';

    .resource-select {
        > label {
            display: block;
            margin-bottom: 0.5rem;
        }

        > select {
            appearance: none;
            height: 40px;
            width: 100%;
            padding-left: 1rem;
            padding-right: 1rem;
            border: 1px solid $gray;
            border-radius: $border-radius;
            background-color: $white;

            &:focus {
                border: 1px solid $gray;
            }
        }
    }
</style>
