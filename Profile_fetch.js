import query from './query'
export default class ProfileFetch {
    /**
     * Default constructor which takes in the token information
     * @param {*} accessToken the token for github
     */
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.data = null;
    }

    /**
     * Query by using the token and get the result.
     * This function is async so the render process could go first.
     * @returns the query result as a JSON object
     */
    async getProfile() {
        // query = `
        //     query { 
        //     viewer { 
        //         avatarUrl
        //         name
        //         login
        //         bio
        //         websiteUrl
        //         email
        //         repositories(privacy: PUBLIC, first: 100) {
        //             edges {
        //                 node {
        //                     description
        //                     owner {
        //                         login
        //                     }
        //                     name
        //                 }
        //             }
        //             totalCount
        //         }
        //         followers {
        //             totalCount
        //         }
        //         following {
        //             totalCount
        //         }
        //         createdAt
        //     }
        //     }`;
        url = 'https://api.github.com/graphql';
        const accessToken = this.accessToken;
        const fetch = require('node-fetch');
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({query}),
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        })
        const jsonObj = await response.json();
        this.data = jsonObj;
        return jsonObj;
    }
}
