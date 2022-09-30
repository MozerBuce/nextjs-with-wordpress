import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // uri: "https://countries.trevorblades.com",
    uri: "http://localhost/wordpress_nextjs/graphql",
    // uri: "https://127.0.0.1:8080/graphql",
    cache: new InMemoryCache(),
});

export default client;