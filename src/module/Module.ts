import { ref } from 'vue'

import { objectController } from '@/helpers/module'

export const useModule = () => {
    const options = ref<any[]>([
        {
            align: 'flex-start',
            value: (object: any) => objectController(object, 'name'),
            width: 'minmax(200px, 1fr)',
        },
        {
            align: 'flex-start',
            value: (object: any) => objectController(object, 'lesson', 'length'),
            width: 'minmax(200px, 1fr)',
        },
        {
            align: 'center',
            width: '136px',
            to: (doc: any) => ({ name: 'dashboard-course-module-lesson', params: { module: doc.id } }),
        },
    ])

    return {
        options,
    }
}
