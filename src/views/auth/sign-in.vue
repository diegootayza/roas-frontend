<template>
    <main class="auth-sign-in">
        <div class="container">
            <section class="auth-sign-in__section">
                <resource-card :max-width="'540px'" :title="'Iniciar sesión'">
                    <resource-form @process="submitForm()">
                        <resource-input v-model="submitData.email" :label="'Correo electrónico:'" :placeholder="'Correo electrónico'" :type="'text'" />
                        <resource-input v-model="submitData.password" :label="'Contraseña:'" :placeholder="'Contraseña'" :type="'password'" />
                        <button class="button button--green" type="submit">Iniciar sesión</button>
                    </resource-form>
                    <div class="auth-sign-in__actions">
                        <h5>¿No tienes una cuenta?</h5>
                        <router-link class="button button--purple" :to="{ name: 'auth-sign-up' }">Regístrate</router-link>
                    </div>
                </resource-card>
            </section>
        </div>
    </main>
</template>

<script lang="ts">
    import { defineComponent, reactive } from 'vue'
    import { useMutation } from '@vue/apollo-composable'
    import { useRouter } from 'vue-router'

    import ResourceForm from '@/components/resource/ResourceForm.vue'
    import ResourceInput from '@/components/resource/ResourceInput.vue'
    import ResourceCard from '@/components/resource/ResourceCard.vue'

    import { signInUser } from '@/graphql/User'

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

            const { mutate } = useMutation(signInUser)

            const submitData = reactive({
                email: 'diegootayza@live.com',
                password: '1991SEP#21',
            })

            const submitForm = async () => {
                const response = await mutate({ input: submitData })

                if (response) {
                    const user = response.data.signInUser

                    authStore.userController(user)
                    localStorage.setItem('user', JSON.stringify(user))

                    router.push({ name: 'current' })
                }
            }

            return {
                submitData,
                submitForm,
            }
        },
    })
</script>

<style lang="scss">
    .auth-sign-in {
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
