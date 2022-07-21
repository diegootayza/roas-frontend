<template>
    <resource-select :items="items" :label="'País:'" :placeholder="'Selecciona un país'" :value="modelValue" @select="emitController($event)" />
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue'
    import { useQuery } from '@vue/apollo-composable'

    import { listCountry } from '@/graphql/Country'

    import ResourceSelect from '@/components/resource/ResourceSelect.vue'

    export default defineComponent({
        components: {
            ResourceSelect,
        },
        props: {
            modelValue: { required: true, type: String },
        },
        setup(props, { emit }) {
            const items = ref<any[]>([])

            const { result, onResult } = useQuery(listCountry)

            onMounted(() => {
                onResult(({ data }) => {
                    const docs = data.listCountry
                    items.value = docs
                    emit('update:modelValue', docs.length > 0 ? docs[0].id : '')
                })

                if (result.value) {
                    const docs = result.value.listCountry
                    items.value = docs
                    emit('update:modelValue', docs.length > 0 ? docs[0].id : '')
                }
            })

            const emitController = (value: string) => {
                emit('update:modelValue', value)
            }

            return {
                items,
                emitController,
            }
        },
    })
</script>
