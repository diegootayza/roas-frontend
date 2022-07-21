module.exports = {
    client: {
        includes: ['src/graphqls/*.ts'],
        service: {
            name: 'roas',
            url: 'http://localhost:5000/graphql',
        },
    },
}
