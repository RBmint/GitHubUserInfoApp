export default class ProfileFetch {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.data = null;
    }
    async getProfile() {
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
        url = 'https://api.github.com/graphql';
        const accessToken = this.accessToken;
        const fetch = require('node-fetch');
        const response = await fetch(url, {

        // const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({query}),
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        })
        // const jsonObj = await response.json();

        const jsonObj = await response.json();
        this.data = jsonObj;
        return jsonObj;
    }
}
