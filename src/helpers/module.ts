export const objectController = (object: any, value: string, option?: string) => {
    if (option === 'length') return value.split('.').reduce((o, i) => o[i], object).length
    else return value.split('.').reduce((o, i) => o[i], object)
}
