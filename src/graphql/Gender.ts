import gql from 'graphql-tag'

export const listGender = gql`
    query listGender {
        listGender {
            id
            name
            code
            active
        }
    }
`

export const readGender = gql`
    query readGender {
        readGender {
            id
            name
            code
            active
        }
    }
`
