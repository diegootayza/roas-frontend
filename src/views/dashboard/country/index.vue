<template>
    <main>
        <section>
            <ResourceCard :title="'Países'">
                <TableCountry />
            </ResourceCard>
        </section>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import ResourceCard from '@/components/resource/ResourceCard.vue'
    import TableCountry from '@/components/table/TableCountry.vue'

    export default defineComponent({
        components: {
            ResourceCard,
            TableCountry,
        },
        setup() {},
    })
</script>
