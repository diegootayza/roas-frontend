<template>
    <main class="user-index">
        <div class="container">
            <section class="user-index__section">
                <resource-card :title="'Mis datos personales'">
                    <user-detail />
                    <user-password />
                </resource-card>
                <resource-card :title="'Mis alertas'">
                    <user-alert />
                </resource-card>
                <resource-card :title="'Mis cursos'">
                    <user-course />
                </resource-card>
                <resource-card :title="'Historial de reproduccion'">
                    <user-history />
                </resource-card>
                <resource-card :title="'Cursos'">
                    <user-alert />
                </resource-card>
            </section>
        </div>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import ResourceCard from '@/components/resource/ResourceCard.vue'

    import UserDetail from '@/components/user/UserDetail.vue'
    import UserAlert from '@/components/user/UserAlert.vue'
    import UserCourse from '@/components/user/UserCourse.vue'
    import UserPassword from '@/components/user/UserPassword.vue'
    import UserHistory from '@/components/user/UserHistory.vue'

    export default defineComponent({
        components: {
            UserDetail,
            UserHistory,
            UserAlert,
            UserCourse,
            ResourceCard,
            UserPassword,
        },
        setup() {},
    })
</script>

<style lang="scss">
    .user-index {
        padding-top: 4rem;
        padding-bottom: 4rem;

        &__section {
            display: grid;
            grid-row-gap: 2rem;
            grid-column-gap: 2rem;
            grid-template-columns: repeat(3, 1fr);

            @media (max-width: 1140px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 992px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        @media (max-width: 992px) {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }
    }
</style>
