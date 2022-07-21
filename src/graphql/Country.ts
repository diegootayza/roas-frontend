import gql from 'graphql-tag'

export const listCountry = gql`
    query listCountry {
        listCountry {
            id
            name
            code
            codePhone
            active
        }
    }
`

export const readCountry = gql`
    query readCountry($id: String) {
        readCountry(id: $id) {
            id
            name
            code
            codePhone
            active
        }
    }
`

export const createCountry = gql`
    mutation createCountry($input: CountryInput) {
        createCountry(input: $input) {
            id
        }
    }
`

export const updateCountry = gql`
    mutation updateCountry($id: String, $input: CountryInput) {
        updateCountry(id: $id, input: $input) {
            id
        }
    }
`

export const deleteCountry = gql`
    mutation deleteCountry($id: String) {
        deleteCountry(id: $id) {
            id
        }
    }
`
