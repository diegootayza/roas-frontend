<template>
    <main>
        <section>
            <resource-card :title="'Lección'">
                <table-lesson />
            </resource-card>
        </section>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import ResourceCard from '@/components/resource/ResourceCard.vue'
    import TableLesson from '@/components/table/TableLesson.vue'

    export default defineComponent({
        components: {
            ResourceCard,
            TableLesson,
        },
        setup() {},
    })
</script>
