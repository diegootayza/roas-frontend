<template>
    <main class="auth-password">
        <div class="container">
            <section class="auth-password__section">
                <resource-card :max-width="'540px'" :title="'Olvidé mi contraseña'">
                    <resource-form>
                        <resource-input v-model="submitData.email" :label="'Correo electrónico:'" :placeholder="'Correo electrónico'" :type="'text'" />
                        <button class="button button--green" type="button" @click="authController()">Enviar instrucciones</button>
                    </resource-form>
                </resource-card>
            </section>
        </div>
    </main>
</template>

<script lang="ts">
    import { defineComponent, reactive } from 'vue'
    import { useRouter } from 'vue-router'

    import ResourceForm from '@/components/resource/ResourceForm.vue'
    import ResourceInput from '@/components/resource/ResourceInput.vue'
    import ResourceCard from '@/components/resource/ResourceCard.vue'

    import { useAuthStore } from '@/store/auth'

    export default defineComponent({
        components: {
            ResourceCard,
            ResourceForm,
            ResourceInput,
        },
        setup() {
            const authStore = useAuthStore()
            const router = useRouter()

            const submitData = reactive({
                email: '',
            })

            const authController = async () => {
                // try {
                //     const resSignUp = await axios.post(`/api/v1/user/password`, { ...submitData })
                //     localStorage.setItem('token', JSON.stringify(resSignUp.data.token))
                //     const resCurrent = await axios.get(`/api/v1/user/current`)
                //     authStore.userController(resCurrent.data.doc)
                //     localStorage.setItem('user', JSON.stringify(resCurrent.data.doc))
                //     router.push({ name: 'user' })
                // } catch (error) {
                //     console.log(error)
                // }
            }

            return {
                submitData,
                authController,
            }
        },
    })
</script>

<style lang="scss">
    .auth-password {
        padding-top: 4rem;
        padding-bottom: 4rem;

        &__section {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__actions {
            width: 100%;
            margin-top: 2rem;
            display: grid;
            grid-row-gap: 1rem;
            grid-column-gap: 1rem;
            grid-template-columns: repeat(1, 1fr);

            > h5 {
                text-align: center;
            }

            > * {
                width: 100%;
            }
        }
    }
</style>
