import getQuery from './query_for_all'
export default class FetchAll {
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
    async getAllInfo(username) {
        query = getQuery(username);
        url = 'https://api.github.com/graphql';
        const accessToken = this.accessToken; 
        // try {
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
        // } catch (error) {
            
        // }
        return jsonObj;
    }
}
