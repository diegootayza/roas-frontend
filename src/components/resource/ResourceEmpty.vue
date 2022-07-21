<template>
    <div class="resource-empty">
        <div class="resource-empty__content">
            <div class="resource-empty__circle">
                <div class="resource-empty__icon">
                    <resource-icon :name="'mdiAlertCircle'" />
                </div>
            </div>
            <h5 class="resource-empty__text">No disponible.</h5>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import ResourceIcon from '@/components/resource/ResourceIcon.vue'

    export default defineComponent({
        components: {
            ResourceIcon,
        },
        setup() {},
    })
</script>

<style lang="scss">
    .resource-empty {
        width: 100%;

        &__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        &__circle {
            height: 80px;
            width: 80px;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid #909090;
        }

        &__icon {
            height: 60px;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #f7f6f8;

            > svg {
                fill: #909090;
            }
        }

        &__text {
            text-align: center;
        }
    }
</style>
