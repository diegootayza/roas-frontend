<template>
    <main>
        <section>
            <ResourceCard :title="'Modulos'">
                <TableModule />
            </ResourceCard>
        </section>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import ResourceCard from '@/components/resource/ResourceCard.vue'
    import TableModule from '@/components/table/TableModule.vue'

    export default defineComponent({
        components: {
            ResourceCard,
            TableModule,
        },
        setup() {},
    })
</script>
