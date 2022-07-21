<template>
    <main class="course-index">
        <course-nav />
        <section class="course-index__content">
            <!-- TODO: Convertir en un componente -->
            <div class="course-index__video">
                <div>
                    <video controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" />
                </div>
            </div>
            <div class="course-index__spaces">
                <button class="course-index__button" type="button">
                    <resource-icon :name="'mdiCheckboxMarkedCircleOutline'" />
                    <span>Finalizado</span>
                </button>
            </div>
        </section>
        <!-- <header class="course-index__actions">
            <router-link class="course-index__action" :to="{ name: 'course' }">
                <resource-icon :name="'mdiChevronLeft'" />
                <span>Anterior</span>
                <span>Curso 1</span>
            </router-link>
            <router-link class="course-index__action" :to="{ name: 'course' }">
                <resource-icon :name="'mdiChevronRight'" />
                <span>Siguiente</span>
                <span>Curso 3</span>
            </router-link>
        </header> -->
    </main>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue'

    import ResourceIcon from '@/components/resource/ResourceIcon.vue'
    import CourseNav from '@/components/course/CourseNav.vue'

    export default defineComponent({
        components: {
            ResourceIcon,
            CourseNav,
        },
        setup() {},
    })
</script>

<style lang="scss">
    @import '@/scss/variables.scss';

    .course-index {
        display: grid;
        grid-template-columns: 300px 1fr;

        &__video {
            width: 100%;
            max-width: 800px;
            margin-bottom: 1rem;

            > div {
                position: relative;
                height: 0;
                padding-top: 56.25%;
                background-color: red;

                > video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
</style>
