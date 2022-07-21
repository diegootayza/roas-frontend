<template>
    <div class="table-course">
        <div class="table-course__header">
            <resource-action>
                <template v-slot:right>
                    <button class="button button--green" @click="actionController({ action: 'CREATE' })">Crear</button>
                </template>
            </resource-action>
        </div>
        <resource-table :items="items" :options="options" @action="actionController($event)" />
    </div>
    <form-lesson :active="active" :item="item" :method="method" @close="closeController()" />
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue'
    import { useQuery } from '@vue/apollo-composable'
    import { useRoute } from 'vue-router'

    import FormLesson from '@/components/form/FormLesson.vue'
    import ResourceAction from '@/components/resource/ResourceAction.vue'
    import ResourceTable from '@/components/resource/ResourceTable.vue'

    import { useLesson } from '@/module/Lesson'

    import { listLesson } from '@/graphql/Lesson'

    export default defineComponent({
        components: {
            FormLesson,
            ResourceAction,
            ResourceTable,
        },
        setup() {
            const route = useRoute()

            const method = ref<string>('CREATE')
            const active = ref<boolean>(false)
            const items = ref<any[]>([])
            const item = ref<any>({})

            const { options } = useLesson()

            const { module } = route.params

            const { result, onResult, refetch } = useQuery(listLesson, { module }, { fetchPolicy: 'no-cache' })

            onMounted(() => {
                onResult(({ data }) => {
                    const docs = data.listLesson
                    items.value = docs
                })

                if (result.value) {
                    const docs = result.value.listLesson
                    items.value = docs
                }
            })

            const actionController = ({ action, doc }: any) => {
                if (action === 'CREATE') {
                    method.value = 'CREATE'
                }

                if (action === 'UPDATE') {
                    item.value = doc
                    method.value = 'UPDATE'
                }

                if (action === 'DELETE') {
                    item.value = doc
                    method.value = 'DELETE'
                }

                active.value = true
            }

            const closeController = () => {
                refetch({ module })
                active.value = false
                setTimeout(() => {
                    method.value = 'CREATE'
                    item.value = {}
                }, 400)
            }

            return {
                method,
                active,
                items,
                item,
                options,
                actionController,
                closeController,
            }
        },
    })
</script>

<style lang="scss">
    .table-course {
        width: 100%;

        &__header {
            margin-bottom: 1rem;
        }
    }
</style>
