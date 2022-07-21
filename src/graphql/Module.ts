import gql from 'graphql-tag'

export const listModule = gql`
    query listModule($course: String) {
        listModule(course: $course) {
            id
            name
            active
            position
            lesson {
                id
                name
            }
        }
    }
`

export const readModule = gql`
    query readModule($id: String) {
        readModule(id: $id) {
            id
            name
            active
            position
        }
    }
`

export const createModule = gql`
    mutation createModule($input: ModuleInput) {
        createModule(input: $input) {
            id
        }
    }
`

export const updateModule = gql`
    mutation updateModule($id: String, $input: ModuleInput) {
        updateModule(id: $id, input: $input) {
            id
        }
    }
`

export const deleteModule = gql`
    mutation deleteModule($id: String) {
        deleteModule(id: $id) {
            id
        }
    }
`
