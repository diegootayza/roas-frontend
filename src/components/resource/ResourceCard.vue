<template>
    <div class="resource-card" :style="{ maxWidth }">
        <div class="resource-card__header">
            <resource-action>
                <template v-if="close" v-slot:left>
                    <h4>{{ title }}</h4>
                </template>
                <template v-if="!close" v-slot:center>
                    <h4>{{ title }}</h4>
                </template>
                <template v-if="close" v-slot:right>
                    <button class="button button--icon button--green" type="button" @click="$emit('close')">
                        <resource-icon :name="'mdiClose'" />
                    </button>
                </template>
            </resource-action>
        </div>
        <div class="resource-card__content">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import ResourceAction from '@/components/resource/ResourceAction.vue'
    import ResourceIcon from '@/components/resource/ResourceIcon.vue'

    export default defineComponent({
        components: {
            ResourceAction,
            ResourceIcon,
        },
        props: {
            close: { required: false, type: Boolean },
            maxWidth: { required: false, type: String },
            title: { required: true, type: String },
        },
        setup() {},
    })
</script>

<style lang="scss">
    @import '@/scss/_variables.scss';

    .resource-card {
        width: 100%;
        border-radius: $border-radius;
        background-color: $white;
        box-shadow: 0 0 8px 0 rgba($black, 0.2);

        &__header {
            height: calc(40px + 2rem);
            padding: 2rem 2rem 0 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__content {
            height: calc(100% - 72px);
            padding: 2rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 992px) {
        .resource-card {
            &__header {
                height: calc(40px + 1rem);
                padding: 1rem 1rem 0 1rem;
            }

            &__content {
                height: calc(100% - 56px);
                padding: 1rem 1rem;
            }
        }
    }
</style>
