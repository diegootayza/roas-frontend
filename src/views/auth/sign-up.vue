<template>
    <main class="auth-sign-up">
        <div class="container">
            <section class="auth-sign-up__section">
                <resource-card :max-width="'540px'" :title="'Regístrate'">
                    <resource-form @process="submitForm()">
                        <resource-input v-model="submitData.name" :label="'Nombre:'" :placeholder="'Nombre'" :type="'text'" />
                        <resource-input v-model="submitData.surname" :label="'Apellido:'" :placeholder="'Apellido'" :type="'text'" />
                        <resource-input v-model="submitData.birthday" :label="'Cumpleaños:'" :placeholder="'Cumpleaños'" :type="'date'" />
                        <select-gender v-model="submitData.gender" />
                        <select-country v-model="submitData.country" />
                        <resource-input v-model="submitData.phone" :label="'Celular:'" :placeholder="'Celular'" :type="'number'" />
                        <resource-input v-model="submitData.email" :label="'Correo electrónico:'" :placeholder="'Correo electrónico'" :type="'text'" />
                        <resource-input v-model="submitData.password" :label="'Contraseña:'" :placeholder="'Contraseña'" :type="'password'" />
                        <button class="button button--purple" type="submit">Regístrate</button>
                    </resource-form>
                    <div class="auth-sign-up__actions">
                        <h5>¿No tienes una cuenta?</h5>
                        <router-link class="button button--green" :to="{ name: 'auth-sign-in' }">Iniciar sesión</router-link>
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

    import ResourceCard from '@/components/resource/ResourceCard.vue'
    import ResourceForm from '@/components/resource/ResourceForm.vue'
    import ResourceInput from '@/components/resource/ResourceInput.vue'
    import SelectCountry from '@/components/select/SelectCountry.vue'
    import SelectGender from '@/components/select/SelectGender.vue'

    import { signUpUser } from '@/graphql/User'

    import { useAuthStore } from '@/store/auth'

    export default defineComponent({
        components: {
            ResourceCard,
            ResourceForm,
            ResourceInput,
            SelectCountry,
            SelectGender,
        },
        setup() {
            const authStore = useAuthStore()
            const router = useRouter()

            const { mutate } = useMutation(signUpUser)

            const submitData = reactive({
                name: 'Diego',
                surname: 'Otayza',
                birthday: '1991-09-21',
                phone: 67445695,
                email: 'diegootayza@live.com',
                password: '1991SEP#21',
                gender: '',
                country: '',
            })

            const submitForm = async () => {
                const response = await mutate({ input: submitData })

                if (response) {
                    const user = response.data.signUpUser

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
    .auth-sign-up {
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
