import { ref } from 'vue'

import { objectController } from '@/helpers/module'

export const useCourse = () => {
    const options = ref<any[]>([
        {
            align: 'flex-start',
            value: (object: any) => objectController(object, 'name'),
            width: 'minmax(200px, 1fr)',
        },
        {
            align: 'flex-start',
            value: (object: any) => objectController(object, 'description'),
            width: '100px',
        },
        {
            align: 'flex-start',
            value: (object: any) => objectController(object, 'module', 'length'),
            width: '100px',
        },
        {
            align: 'center',
            width: '136px',
            to: (doc: any) => ({ name: 'dashboard-course-module', params: { course: doc.id } }),
        },
    ])

    return {
        options,
    }
}
