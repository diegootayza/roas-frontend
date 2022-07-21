import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client/core'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'

const httpLink = new HttpLink({
    uri: import.meta.env.VITE_URL_GRAPHQL,
})

const wsLink = new GraphQLWsLink(
    createClient({
        url: import.meta.env.VITE_URL_GRAPHQL,
    })
)

const cache = new InMemoryCache()

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query)

        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink,
    httpLink
)

export default new ApolloClient({
    cache,
    link,
})
