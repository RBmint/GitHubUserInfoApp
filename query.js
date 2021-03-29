query = `
            query { 
            viewer { 
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
                followers {
                    totalCount
                }
                following {
                    totalCount
                }
                createdAt
            }
        }`;
export default query