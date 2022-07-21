import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'is-route-active',
    linkExactActiveClass: 'is-route-exact',
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/default.vue'),
            children: [
                {
                    path: '',
                    name: 'index',
                    component: () => import('@/views/index.vue'),
                },
                {
                    path: 'auth/sign-in',
                    name: 'auth-sign-in',
                    meta: { middleware: 'guest' },
                    component: () => import('@/views/auth/sign-in.vue'),
                },
                {
                    path: 'auth/sign-up',
                    name: 'auth-sign-up',
                    meta: { middleware: 'guest' },
                    component: () => import('@/views/auth/sign-up.vue'),
                },
                {
                    path: 'auth/password',
                    name: 'auth-password',
                    meta: { middleware: 'guest' },
                    component: () => import('@/views/auth/password.vue'),
                },
                {
                    path: 'current',
                    name: 'current',
                    meta: { middleware: 'user' },
                    component: () => import('@/views/current/index.vue'),
                },
                {
                    path: 'course/:course',
                    name: 'course',
                    meta: { middleware: 'user' },
                    component: () => import('@/views/course/index.vue'),
                },
            ],
        },
        {
            path: '/dashboard',
            component: () => import('@/layouts/dashboard.vue'),
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    meta: { middleware: 'admin' },
                    component: () => import('@/views/dashboard/index.vue'),
                },
                {
                    path: 'course',
                    name: 'dashboard-course',
                    meta: { middleware: 'admin' },
                    component: () => import('@/views/dashboard/course/index.vue'),
                },
                {
                    path: 'course-module/:course',
                    name: 'dashboard-course-module',
                    meta: { middleware: 'admin' },
                    component: () => import('@/views/dashboard/course/module/index.vue'),
                },
                {
                    path: 'course-module-lesson/:module',
                    name: 'dashboard-course-module-lesson',
                    meta: { middleware: 'admin' },
                    component: () => import('@/views/dashboard/course/module/lesson/index.vue'),
                },
                {
                    path: 'country',
                    name: 'dashboard-country',
                    meta: { middleware: 'admin' },
                    component: () => import('@/views/dashboard/country/index.vue'),
                },
            ],
        },
    ],
})

router.beforeEach((to, from, next) => {
    const user = localStorage.getItem('user')

    const current = user ? JSON.parse(user) : null
    const middleware = to.meta.middleware as string

    switch (middleware) {
        case 'guest':
            current ? next({ name: 'current' }) : next()
            break

        case 'user':
            current ? next() : next({ name: 'auth-sign-in' })
            break

        case 'admin':
            current ? next() : next({ name: 'auth-sign-in' })
            break

        default:
            next()
            break
    }
})

export default router
