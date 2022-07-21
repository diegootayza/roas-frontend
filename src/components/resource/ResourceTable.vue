<template>
    <div class="resource-table">
        <draggable v-model="docs" class="resource-table__items" item-key="id">
            <template v-slot:item="{ element: a }">
                <div class="resource-table__item">
                    <div v-for="(b, ib) in options" :key="ib" :style="{ 'justify-content': b.align }">
                        <div v-if="ib + 1 === options.length" class="resource-table__actions">
                            <router-link v-if="b.to" class="button button--icon" :to="b.to(a)">
                                <resource-icon :name="'mdiEyeOutline'" />
                            </router-link>
                            <button class="button button--icon" type="button" @click="$emit('action', { action: 'UPDATE', doc: a })">
                                <resource-icon :name="'mdiPencilOutline'" />
                            </button>
                            <button class="button button--icon" type="button" @click="$emit('action', { action: 'DELETE', doc: a })">
                                <resource-icon :name="'mdiDeleteOutline'" />
                            </button>
                        </div>
                        <template v-else>
                            <span>{{ b.value(a) }}</span>
                        </template>
                    </div>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, ref, toRefs, watch } from 'vue'
    import draggable from 'vuedraggable'

    import ResourceIcon from '@/components/resource/ResourceIcon.vue'

    export default defineComponent({
        components: {
            draggable,
            ResourceIcon,
        },
        props: {
            items: { required: true, type: Array } as any,
            options: { required: true, type: Array } as any,
        },
        setup(props) {
            const { items, options } = toRefs(props)

            const docs = ref<any[]>([])
            const columns = ref<any[]>([])

            watch(items, (values) => {
                docs.value = values
            })

            watch(docs, (values) => {
                // values.forEach((value, index) => {
                //     console.log(index, value)
                // })
            })

            options.value.forEach((option: any) => {
                columns.value.push(option.width)
            })

            return {
                docs,
                columns: computed(() => columns.value.join(' ')),
            }
        },
    })
</script>

<style lang="scss">
    @import '@/scss/variables.scss';

    .resource-table {
        width: 100%;
        padding-bottom: 1rem;
        overflow-x: scroll;

        &__items {
            display: grid;
            grid-row-gap: 1rem;
            grid-column-gap: 1rem;
            grid-template-columns: repeat(1, 1fr);
        }

        &__item {
            cursor: move;
            padding: 1rem 1rem;
            display: grid;
            grid-row-gap: 1rem;
            grid-column-gap: 1rem;
            grid-template-columns: v-bind(columns);
            border-radius: $border-radius;
            background-color: #f7f6f8;

            > div {
                height: 100%;
                display: flex;
                align-items: center;

                > span {
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }

        &__actions {
            display: flex;
            align-items: center;
            justify-content: center;

            > * {
                margin-right: 0.5rem;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
