function setQuery(user) {
    const query = `
        query { 
            user (login: "`+ user +`") { 
                avatarUrl
                name
                login
                bio
                websiteUrl
                email
                repositories(privacy: PUBLIC, first: 100) {
                    edges {
                        node {
                            description
                            owner {
                                login
                            }
                            name
                        }
                    }
                    totalCount
                }
                followers(first: 100) {
                    totalCount
                    edges {
                        node {
                            login
                            name
                            avatarUrl
                        }
                    }
                }
                following(first: 100) {
                    totalCount
                    edges {
                        node {
                            login
                            name
                            avatarUrl
                        } 
                    }
                }                  
                createdAt
            }
        }`;
    return query;
}
export default setQuery