import { ref } from 'vue'

import { objectController } from '@/helpers/module'

export const useLesson = () => {
    const options = ref<any[]>([
        {
            align: 'flex-start',
            value: (object: any) => objectController(object, 'name'),
            width: 'minmax(200px, 1fr)',
        },
        {
            align: 'flex-start',
            value: (object: any) => objectController(object, 'module.name'),
            width: 'minmax(200px, 1fr)',
        },
        {
            align: 'center',
            width: '88px',
        },
    ])

    return {
        options,
    }
}
