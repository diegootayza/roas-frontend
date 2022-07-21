<template>
    <div class="course-nav">
        <div class="course-nav__main">
            <span>{{ item.name }}</span>
            <ul>
                <li v-for="(a, ia) in item.courseModule" :key="ia">
                    <div :class="{ 'is-active': a.id === courseModule }">
                        <resource-icon :name="'mdiFolderOutline'" />
                        <span>{{ a.name }}</span>
                    </div>
                    <ul>
                        <li v-for="(b, ib) in a.courseModuleLesson" :key="ib">
                            <router-link :to="{ name: 'course', params: { course: item.id, courseModule: a.id, courseModuleLesson: b.id } }">
                                <resource-icon :name="'mdiCheckboxBlankCircleOutline'" />
                                <span>{{ b.name }}</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- <pre>{{ course }}</pre> -->
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, ref } from 'vue'
    import { useQuery } from '@vue/apollo-composable'
    import { useRoute } from 'vue-router'

    import ResourceIcon from '@/components/resource/ResourceIcon.vue'

    import { readCourse } from '@/graphql/Course'

    export default defineComponent({
        components: {
            ResourceIcon,
        },
        setup() {
            const route = useRoute()

            const item = ref<any>({})

            const { course, courseModule, courseModuleLesson } = route.params

            const { result, onResult, refetch } = useQuery(readCourse, { id: course }, { fetchPolicy: 'cache-first' })

            onMounted(() => {
                onResult(({ data }) => {
                    const doc = data.readCourse
                    item.value = doc
                })

                if (result.value) {
                    const doc = result.value.readCourse
                    item.value = doc
                }
            })

            return {
                item,
                courseModule: computed(() => courseModule),
                courseModuleLesson: computed(() => courseModuleLesson),
            }
        },
    })
</script>

<style lang="scss">
    .course-nav {
        height: calc(100vh - 80px);
        width: 100%;
        overflow-y: auto;
        background-color: red;

        &__main {
            > ul {
                > li {
                    > div {
                        height: 80px;
                        padding-left: 1rem;
                        padding-right: 1rem;
                        display: flex;
                        align-items: center;
                        background-color: #8a8a8a;

                        > svg {
                            margin-right: 1rem;
                        }

                        > span {
                            width: calc(100% - (24px + 1rem));
                        }

                        &.is-active {
                            background-color: blue;
                        }
                    }

                    > ul {
                        > li {
                            > a {
                                height: 60px;
                                padding-left: 1rem;
                                padding-right: 1rem;
                                display: flex;
                                align-items: center;
                                background-color: #9a9a9a;

                                > svg {
                                    margin-right: 1rem;
                                }

                                &.is-route-exact {
                                    background-color: red;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
