<template>
    <div class="resource-input">
        <label for="">{{ label }}</label>
        <input :placeholder="placeholder" :type="type" :value="modelValue" @input="emitController($event)" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, toRefs } from 'vue'

    export default defineComponent({
        props: {
            label: [String],
            modelValue: [String, Number],
            placeholder: [String],
            type: [String],
        },
        setup(props, { emit }) {
            const { type } = toRefs(props)

            const emitController = (e: Event) => {
                const target = e.target as HTMLInputElement

                switch (type.value) {
                    case 'number':
                        emit('update:modelValue', Number(target.value))
                        break

                    default:
                        emit('update:modelValue', String(target.value))
                        break
                }
            }

            return {
                emitController,
            }
        },
    })
</script>

<style lang="scss">
    @import '@/scss/variables.scss';

    .resource-input {
        > label {
            display: block;
            margin-bottom: 0.5rem;
        }

        > input {
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
