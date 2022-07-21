<template>
    <resource-modal :active="(method === 'CREATE' || method === 'UPDATE') && active">
        <resource-card close :title="method === 'CREATE' ? 'Crear' : 'Actualizar'" @close="$emit('close')">
            <resource-form @process="submitForm()">
                <resource-input v-model="submitData.name" :label="'Nombre:'" :placeholder="'Nombre'" :type="'text'" />
                <resource-input v-model="submitData.description" :label="'Descripción:'" :placeholder="'Descripción'" :type="'text'" />
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

    import ResourceCard from '@/components/resource/ResourceCard.vue'
    import ResourceEmpty from '@/components/resource/ResourceEmpty.vue'
    import ResourceForm from '@/components/resource/ResourceForm.vue'
    import ResourceInput from '@/components/resource/ResourceInput.vue'
    import ResourceModal from '@/components/resource/ResourceModal.vue'

    import { createCourse, deleteCourse, updateCourse } from '@/graphql/Course'

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
            const { mutate: createMutate } = useMutation(createCourse)
            const { mutate: updateMutate } = useMutation(updateCourse)
            const { mutate: deleteMutate } = useMutation(deleteCourse)

            const id = ref<string>('')
            const submitData = reactive({
                name: '',
                description: '',
            })

            watch(item, (doc) => {
                if (Object.keys(doc).length > 0) resetData(doc)
                else resetData()
            })

            const resetData = (doc?: any) => {
                id.value = doc ? doc.id : ''
                submitData.name = doc ? doc.name : ''
                submitData.description = doc ? doc.description : ''
            }

            const submitForm = async () => {
                if (method.value === 'CREATE') {
                    const createResponse = await createMutate({ input: submitData })

                    if (createResponse) {
                        const createCourse = createResponse.data.createCourse

                        console.log(createCourse)

                        emit('close')
                    }
                }

                if (method.value === 'UPDATE') {
                    const updateResponse = await updateMutate({ id: id.value, input: submitData })

                    if (updateResponse) {
                        const updateCourse = updateResponse.data.updateCourse

                        console.log(updateCourse)

                        emit('close')
                    }
                }

                if (method.value === 'DELETE') {
                    const deleteResponse = await deleteMutate({ id: id.value })

                    if (deleteResponse) {
                        const deleteCourse = deleteResponse.data.deleteCourse

                        console.log(deleteCourse)

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
