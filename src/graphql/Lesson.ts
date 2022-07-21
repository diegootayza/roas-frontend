import gql from 'graphql-tag'

export const listLesson = gql`
    query listLesson($module: String) {
        listLesson(module: $module) {
            id
            name
            active
            position
            module {
                id
                name
            }
        }
    }
`

export const readLesson = gql`
    query readLesson($id: String) {
        readLesson(id: $id) {
            id
            name
            active
            position
        }
    }
`

export const createLesson = gql`
    mutation createLesson($input: LessonInput) {
        createLesson(input: $input) {
            id
        }
    }
`

export const updateLesson = gql`
    mutation updateLesson($id: String, $input: LessonInput) {
        updateLesson(id: $id, input: $input) {
            id
        }
    }
`

export const deleteLesson = gql`
    mutation deleteLesson($id: String) {
        deleteLesson(id: $id) {
            id
        }
    }
`
