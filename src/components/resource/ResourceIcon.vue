<template>
    <svg class="resource-icon" viewBox="0 0 24 24">
        <path :d="draw" />
    </svg>
</template>

<script lang="ts">
    import { defineComponent, ref, toRefs, watch } from 'vue'

    import {
        mdiAlertCircle,
        mdiCheckboxBlankCircleOutline,
        mdiCheckboxMarkedCircleOutline,
        mdiClose,
        mdiDeleteOutline,
        mdiEyeOutline,
        mdiFolderOutline,
        mdiHome,
        mdiPencilOutline,
    } from '@mdi/js'

    export default defineComponent({
        props: {
            name: { required: true, type: [Boolean, String] } as any,
        },
        setup(props) {
            const { name } = toRefs(props)

            const icons = ref<any>({
                mdiAlertCircle,
                mdiFolderOutline,
                mdiCheckboxBlankCircleOutline,
                mdiCheckboxMarkedCircleOutline,
                mdiClose,
                mdiDeleteOutline,
                mdiEyeOutline,
                mdiHome,
                mdiPencilOutline,
            }) as any

            const draw = ref('')

            draw.value = icons.value[name.value]

            watch(name, (value) => {
                draw.value = icons.value[value]
            })

            return {
                draw,
            }
        },
    })
</script>

<style lang="scss">
    .resource-icon {
        width: 24px;
        height: 24px;
    }
</style>
