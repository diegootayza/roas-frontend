<template>
    <div class="table-course">
        <div class="table-course__header">
            <ResourceAction>
                <template v-slot:right>
                    <button class="button button--green" @click="actionController({ action: 'CREATE' })">Crear</button>
                </template>
            </ResourceAction>
        </div>
        <ResourceTable :items="items" :options="options" @action="actionController($event)" />
    </div>
    <FormCountry :active="active" :item="item" :method="method" @close="closeController()" />
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue'
    import { useQuery } from '@vue/apollo-composable'

    import FormCountry from '@/components/form/FormCountry.vue'
    import ResourceAction from '@/components/resource/ResourceAction.vue'
    import ResourceTable from '@/components/resource/ResourceTable.vue'

    import { useCountry } from '@/module/Country'

    import { listCountry } from '@/graphql/Country'

    export default defineComponent({
        components: {
            FormCountry,
            ResourceAction,
            ResourceTable,
        },
        setup() {
            const active = ref<boolean>(false)
            const item = ref<any>({})
            const items = ref<any[]>([])
            const method = ref<string>('CREATE')

            const { options } = useCountry()

            const { refetch, result, onResult } = useQuery(listCountry, {}, { fetchPolicy: 'no-cache' })

            onMounted(() => {
                onResult(({ data }) => {
                    const docs = data.listCountry
                    items.value = docs
                })

                if (result.value) {
                    const docs = result.value.listCountry
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
                refetch()
                active.value = false
                setTimeout(() => {
                    method.value = 'CREATE'
                    item.value = {}
                }, 400)
            }

            return {
                actionController,
                active,
                closeController,
                item,
                items,
                method,
                options,
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
