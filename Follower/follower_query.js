query = `
            query { 
                user(login: "guanhuali2") { 
                    avatarUrl
                    name
                    login
                    bio
                    websiteUrl
                    email
                    repositories(privacy: PUBLIC) {
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
            }
        }`;
export default query