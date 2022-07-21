import gql from 'graphql-tag'

export const listUser = gql`
    query listUser {
        listUser {
            id
            name
            surname
            birthday
            phone
            phoneVerified
            email
            emailVerified
            gender {
                id
                name
                code
            }
            country {
                id
                name
                code
                codePhone
            }
            role {
                id
                name
                code
            }
            active
        }
    }
`

export const signInUser = gql`
    mutation signInUser($input: SignInUserInput) {
        signInUser(input: $input) {
            id
            name
            surname
            birthday
            phone
            phoneVerified
            email
            emailVerified
            gender {
                id
                name
                code
            }
            country {
                id
                name
                code
                codePhone
            }
            role {
                id
                name
                code
            }
            active
            token
        }
    }
`

export const signUpUser = gql`
    mutation signUpUser($input: SignUpUserInput) {
        signUpUser(input: $input) {
            id
            name
            surname
            birthday
            phone
            phoneVerified
            email
            emailVerified
            gender {
                id
                name
                code
            }
            country {
                id
                name
                code
                codePhone
            }
            role {
                id
                name
                code
            }
            active
            token
        }
    }
`
