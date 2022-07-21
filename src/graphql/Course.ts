import gql from 'graphql-tag'

export const listCourse = gql`
    query listCourse {
        listCourse {
            id
            name
            description
            active
            position
            module {
                id
            }
        }
    }
`

export const readCourse = gql`
    query readCourse($id: String) {
        readCourse(id: $id) {
            id
            name
            description
            active
            position
        }
    }
`

export const createCourse = gql`
    mutation createCourse($input: CourseInput) {
        createCourse(input: $input) {
            id
        }
    }
`

export const updateCourse = gql`
    mutation updateCourse($id: String, $input: CourseInput) {
        updateCourse(id: $id, input: $input) {
            id
        }
    }
`

export const deleteCourse = gql`
    mutation deleteCourse($id: String) {
        deleteCourse(id: $id) {
            id
        }
    }
`
