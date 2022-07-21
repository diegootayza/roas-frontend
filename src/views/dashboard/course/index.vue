<template>
    <main>
        <section>
            <ResourceCard :title="'Cursos'">
                <TableCourse />
            </ResourceCard>
        </section>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import ResourceCard from '@/components/resource/ResourceCard.vue'
    import TableCourse from '@/components/table/TableCourse.vue'

    export default defineComponent({
        components: {
            ResourceCard,
            TableCourse,
        },
        setup() {},
    })
</script>
