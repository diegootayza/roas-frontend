<template>
    <resource-modal :active="(method === 'CREATE' || method === 'UPDATE') && active">
        <resource-card close :title="method === 'CREATE' ? 'Crear' : 'Actualizar'" @close="$emit('close')">
            <resource-form @process="submitForm()">
                <resource-input v-model="submitData.name" :label="'Nombre:'" :placeholder="'Nombre'" :type="'text'" />
                <button class="button button--green" type="submit">{{ method === 'CREATE' ? 'Crear' : 'Actualizar' }}</button>
            </resource-form>
        </resource-card>
    </resource-modal>
    <resource-modal :active="method === 'DELETE' && active">
        <resource-card close :title="'Eliminar'" @close="$emit('close')">
            <resource-form @process="submitForm()">
                <resource-empty />
                <button class="button button--green" type="submit">Eliminar</button>
            </resource-form>
        </resource-card>
    </resource-modal>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref, toRefs, watch } from 'vue'
    import { useMutation } from '@vue/apollo-composable'
    import { useRoute } from 'vue-router'

    import ResourceCard from '@/components/resource/ResourceCard.vue'
    import ResourceEmpty from '@/components/resource/ResourceEmpty.vue'
    import ResourceForm from '@/components/resource/ResourceForm.vue'
    import ResourceInput from '@/components/resource/ResourceInput.vue'
    import ResourceModal from '@/components/resource/ResourceModal.vue'

    import { createModule, deleteModule, updateModule } from '@/graphql/Module'

    export default defineComponent({
        components: {
            ResourceCard,
            ResourceEmpty,
            ResourceForm,
            ResourceInput,
            ResourceModal,
        },
        props: {
            method: { required: true, type: String },
            active: { required: true, type: Boolean },
            item: { required: true, type: Object },
        },
        emits: ['close'],
        setup(props, { emit }) {
            const { method, item } = toRefs(props)
            const route = useRoute()
            const { mutate: createMutate } = useMutation(createModule)
            const { mutate: updateMutate } = useMutation(updateModule)
            const { mutate: deleteMutate } = useMutation(deleteModule)

            const id = ref<string>('')
            const submitData = reactive({
                name: '',
            })

            watch(item, (doc) => {
                if (Object.keys(doc).length > 0) resetData(doc)
                else resetData()
            })

            const resetData = (doc?: any) => {
                id.value = doc ? doc.id : ''
                submitData.name = doc ? doc.name : ''
            }

            const submitForm = async () => {
                const { course } = route.params

                if (method.value === 'CREATE') {
                    const createResponse = await createMutate({ input: { ...submitData, course } })

                    if (createResponse) {
                        const createModule = createResponse.data.createModule

                        console.log(createModule)

                        emit('close')
                    }
                }

                if (method.value === 'UPDATE') {
                    const updateResponse = await updateMutate({ id: id.value, input: { ...submitData, course } })

                    if (updateResponse) {
                        const updateModule = updateResponse.data.updateModule

                        console.log(updateModule)

                        emit('close')
                    }
                }

                if (method.value === 'DELETE') {
                    const deleteResponse = await deleteMutate({ id: id.value })

                    if (deleteResponse) {
                        const deleteModule = deleteResponse.data.deleteModule

                        console.log(deleteModule)

                        emit('close')
                    }
                }
            }

            return {
                submitData,
                resetData,
                submitForm,
            }
        },
    })
</script>
